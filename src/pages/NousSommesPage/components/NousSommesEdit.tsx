import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import {Alert, Button, CircularProgress, TextField, Typography} from "@mui/material";
import {Cancel, Save} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
import {
    fetchNousSommesRequest,
    postNousSommesRequest,
    putNousSommesRequest
} from "../../../core/redux/actions/NousSommesActions";
import {useDispatch, useSelector} from "react-redux";
import {
    getErrorNousSommesSelector,
    getNousSommesSelector,
    getPendingNousSommesSelector
} from "../../../core/redux/selector/NousSommesSelectors";

export default function NousSommesEdit() {
    const [title, setTitle] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [myId, setMyId] = useState<number>(0);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const [selectedFile, setSelectedFile] = useState<File>();
    const {id} = useParams<{ id: string | undefined }>();
    const history = useNavigate();

    const dispatch = useDispatch();
    const pending = useSelector(getPendingNousSommesSelector);
    const error = useSelector(getErrorNousSommesSelector);
    const nousSommes = useSelector(getNousSommesSelector);

    const config = {
        readonly: false,
        placeholder: 'Start typings...'
    }

    useEffect(() => {
        if (!!id) {
            const nousSommesId: number = Number.parseInt(id, 0);
            if (nousSommesId > 0) {
                setMyId(nousSommesId);
                dispatch(fetchNousSommesRequest(nousSommesId));
            }
        }
    }, [dispatch]);

    useEffect(() => {
        if (nousSommes) {
            setTitle(nousSommes.title || '');
            setContent(nousSommes.content || '');
            setImage(nousSommes.image || '');
        }
    }, [nousSommes]);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("file", selectedFile as Blob);
        if (!!title && !!content) {
            setIsEmpty(false);
            if (!!id && myId > 0) {
                formData.append("id", id);
                formData.append("image", image);
                dispatch(putNousSommesRequest(formData));
            } else
                dispatch(postNousSommesRequest(formData));
        } else {
            setIsEmpty(true);
        }
    }

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files)
            setSelectedFile(files[0]);
    }

    const goToNousSommes = () => {
        history('/nous-sommes');
    }

    if (nousSommes && nousSommes.id && nousSommes.id > 0 && !!nousSommes.status) {
        goToNousSommes();
    }

    const handleChange = (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const titleValue: string = event.target.value;
        changeTitle(titleValue);
    }

    const handleChangeField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const titleValue: string = event.target.value;
        changeTitle(titleValue);
    }

    const changeTitle = (titleValue: string) => {
        setTitle(titleValue);
        if (!!titleValue)
            setIsEmpty(false)
        else
            setIsEmpty(true)
    }

    return (
        <div>
            <Typography component="h1" variant="h5" align="center">
                {!!id ? 'Modifier' : 'Nouveau'}
            </Typography>
            <br/>
            <div>
                {error && (
                    <Alert severity="error">Il y a une erreur se produit, Veuillez réessayer.</Alert>)}
                {isEmpty && (
                    <Alert severity="error">Veuillez vérifier les champs titre et Contenu sont tous
                        obligatoire.</Alert>)}
            </div>
            <form onSubmit={handleSubmit} noValidate>
                <div style={{marginBottom: 15}}>
                    <TextField required id="outlined-basic" label="Titre" variant="outlined" fullWidth
                               value={title}
                               onChange={handleChangeField}
                               onBlur={handleChange}
                               error={isEmpty}
                               helperText={isEmpty ? "Veuillez remplir le titre" : ""}/>
                </div>
                <div style={{marginBottom: 15}}>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        onBlur={newContent => setContent(newContent)}
                    />

                </div>
                <div style={{marginBottom: 15}}>
                    <label htmlFor="icon-button-file">
                        <input id="icon-button-file" type="file"
                               accept="image/*" multiple={false}
                               onChange={onFileChange}/>
                    </label>
                </div>
                <div>
                    <Button variant="contained" color="primary" startIcon={<Save/>}
                            type="submit" style={{marginRight: 10}}>
                        {pending && (<><CircularProgress color="inherit"/>&nbsp;</>)}
                        Enregistrer
                    </Button>
                    <Button
                        startIcon={<Cancel/>}
                        variant="contained"
                        color="secondary"
                        onClick={goToNousSommes}
                    >
                        Annuler
                    </Button>
                </div>
            </form>
        </div>
    );
}