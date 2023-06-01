import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import {Alert, Button, CircularProgress, TextField, Typography} from "@mui/material";
import {Cancel, Save} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
import {
    fetchNosServicesEtProduitsRequest,
    postNosServicesEtProduitsRequest,
    putNosServicesEtProduitsRequest
} from "../../../core/redux/actions/NosServicesEtProduitsActions";
import {useDispatch, useSelector} from "react-redux";
import {
    getErrorNosServicesEtProduitsSelector,
    getNosServicesEtProduitsSelector,
    getPendingNosServicesEtProduitsSelector
} from "../../../core/redux/selector/NosServicesEtProduitsSelectors";

export default function NosServicesEtProduitsEdit() {
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
    const pending = useSelector(getPendingNosServicesEtProduitsSelector);
    const error = useSelector(getErrorNosServicesEtProduitsSelector);
    const nosServicesEtProduits = useSelector(getNosServicesEtProduitsSelector);

    const config = {
        readonly: false,
        placeholder: 'Start typings...'
    }

    useEffect(() => {
        if (!!id) {
            const nosServicesEtProduitsId: number = Number.parseInt(id, 0);
            if (nosServicesEtProduitsId > 0) {
                setMyId(nosServicesEtProduitsId);
                dispatch(fetchNosServicesEtProduitsRequest(nosServicesEtProduitsId));
            }
        }
    }, [dispatch]);

    useEffect(() => {
        if (nosServicesEtProduits) {
            setTitle(nosServicesEtProduits.title || '');
            setContent(nosServicesEtProduits.content || '');
            setImage(nosServicesEtProduits.image || '');
        }
    }, [nosServicesEtProduits]);

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
                dispatch(putNosServicesEtProduitsRequest(formData));
            } else
                dispatch(postNosServicesEtProduitsRequest(formData));
        } else {
            setIsEmpty(true);
        }
    }

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files)
            setSelectedFile(files[0]);
    }

    const goToNosServicesEtProduits = () => {
        history('/nos-services-et-produits');
    }

    if (nosServicesEtProduits && nosServicesEtProduits.id && nosServicesEtProduits.id > 0 && !!nosServicesEtProduits.status) {
        goToNosServicesEtProduits();
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
            <Typography component="h1" variant="h5">
                {!!id ? 'Modifier' : 'Nouveau'} Article pour Nous sommes
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
                        onClick={goToNosServicesEtProduits}
                    >
                        Annuler
                    </Button>
                </div>
            </form>
        </div>
    );
}