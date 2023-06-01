import React, {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import {Alert, Button, CircularProgress, Typography} from "@mui/material";
import {Cancel, Save} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
import {
    fetchIntroductionNousRejoindreRequest,
    postIntroductionNousRejoindreRequest,
    putIntroductionNousRejoindreRequest
} from "../../../core/redux/actions/IntroductionNousRejoindreActions";
import {useDispatch, useSelector} from "react-redux";
import {
    getErrorIntroductionNousRejoindreSelector,
    getIntroductionNousRejoindreSelector,
    getPendingIntroductionNousRejoindreSelector
} from "../../../core/redux/selector/IntroductionNousRejoindreSelectors";

export default function IntroductionNousRejoindreEdit() {
    const [myId, setMyId] = useState<number>(0);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const {id} = useParams<{ id: string | undefined }>();
    const history = useNavigate();

    const dispatch = useDispatch();
    const pending = useSelector(getPendingIntroductionNousRejoindreSelector);
    const error = useSelector(getErrorIntroductionNousRejoindreSelector);
    const introductionNousRejoindre = useSelector(getIntroductionNousRejoindreSelector);

    const config = {
        readonly: false,
        placeholder: 'Start typings...'
    }

    useEffect(() => {
        if (!!id) {
            const introductionNousRejoindreId: number = Number.parseInt(id, 0);
            if (introductionNousRejoindreId > 0) {
                setMyId(introductionNousRejoindreId);
                dispatch(fetchIntroductionNousRejoindreRequest(introductionNousRejoindreId));
            }
        }
    }, [dispatch]);

    useEffect(() => {
        if (introductionNousRejoindre) {
            setContent(introductionNousRejoindre.content || '');
        }
    }, [introductionNousRejoindre]);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (!!content) {
            setIsEmpty(false);
            if (!!id && myId > 0) {
                dispatch(putIntroductionNousRejoindreRequest({content}));
            } else
                dispatch(postIntroductionNousRejoindreRequest({id: myId, content}));
        } else {
            setIsEmpty(true);
        }
    }

    const goToIntroductionNousRejoindre = () => {
        history('/introduction-nous-rejoindre');
    }

    if (introductionNousRejoindre && introductionNousRejoindre.id && introductionNousRejoindre.id > 0 && !!introductionNousRejoindre.status) {
        goToIntroductionNousRejoindre();
    }

    return (
        <div>
            <Typography component="h1" variant="h5">
                {!!id ? 'Modifier' : 'Nouveau'} introduction pour nous rejoindre
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
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        onBlur={newContent => setContent(newContent)}
                    />

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
                        onClick={goToIntroductionNousRejoindre}
                    >
                        Annuler
                    </Button>
                </div>
            </form>
        </div>
    );
}