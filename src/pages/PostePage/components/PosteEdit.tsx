import React, {useEffect, useRef, useState} from 'react';
import JoditEditor from "jodit-react";
import {Alert, Button, CircularProgress, InputLabel, TextField, Typography} from "@mui/material";
import {Cancel, Save} from "@mui/icons-material";
import {useNavigate, useParams} from "react-router-dom";
import {fetchPosteRequest, postPosteRequest, putPosteRequest} from "../../../core/redux/actions/PosteActions";
import {useDispatch, useSelector} from "react-redux";
import {
    getErrorPosteSelector,
    getPendingPosteSelector,
    getPosteSelector
} from "../../../core/redux/selector/PosteSelectors";
import {IPoste} from "../../../core/data/interfaces/IPoste";
import {IPosteNotValid} from "../../../core/data/interfaces/IPosteNotValid";

export default function PosteEdit() {
    const [posteNotValid, setPosteNotValid] = useState<IPosteNotValid>({
        title: false,
        description: false
    });
    const [myId, setMyId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const editorDescription = useRef(null);
    const editorMission = useRef(null);
    const editorProfile = useRef(null);
    const editorRemuneration = useRef(null);
    const editorContact = useRef(null);

    const [contentDescription, setContentDescription] = useState('');
    const [contentMission, setContentMission] = useState('');
    const [contentProfile, setContentProfile] = useState('');
    const [contentRemuneration, setContentRemuneration] = useState('');
    const [contentContact, setContentContact] = useState('');

    const {id} = useParams<{ id: string | undefined }>();
    const history = useNavigate();

    const dispatch = useDispatch();
    const pending = useSelector(getPendingPosteSelector);
    const error = useSelector(getErrorPosteSelector);
    const posteData = useSelector(getPosteSelector);

    const config = {
        readonly: false,
        placeholder: 'Start typings...'
    }

    useEffect(() => {
        if (!!id) {
            const posteId: number = Number.parseInt(id, 0);
            if (posteId > 0) {
                setMyId(posteId);
                dispatch(fetchPosteRequest(posteId));
            }
        }
    }, [dispatch]);

    useEffect(() => {
        if (posteData) {
            setTitle(posteData.title || '');
            setContentDescription(posteData.description || '');
            setContentMission(posteData.mission || '');
            setContentProfile(posteData.profile || '');
            setContentRemuneration(posteData.remuneration || '');
            setContentContact(posteData.contact || '');
        }
    }, [posteData]);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const poste: IPoste = {
            id: myId,
            title,
            description: contentDescription,
            profile: contentProfile,
            mission: contentMission,
            remuneration: contentRemuneration,
            contact: contentContact
        }
        if (!!title) {
            setIsEmpty(false);
            if (!!id && myId > 0) {
                dispatch(putPosteRequest(poste));
            } else {
                dispatch(postPosteRequest(poste));
            }
        } else {
            setIsEmpty(true);
        }
    }

    const goToPoste = () => {
        history('/poste');
    }

    if (posteData && posteData.id && posteData.id > 0 && !!posteData.status) {
        goToPoste();
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
        if (!!titleValue) {
            setPosteNotValid(
                {
                    ["title"]: false
                }
            )
        } else {
            setPosteNotValid(
                {
                    ["title"]: true
                }
            )
        }
    }

    return (
        <div>
            <Typography component="h1" variant="h5">
                {!!id ? 'Modifier' : 'Nouveau'} Poste
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
                               error={posteNotValid.title}
                               helperText={posteNotValid.title ? "Veuillez remplir le titre" : ""}/>
                </div>
                <div style={{marginBottom: 15}}>
                    <InputLabel htmlFor="description">
                        Description :
                    </InputLabel>
                    <JoditEditor
                        ref={editorDescription}
                        value={contentDescription}
                        config={config}
                        onBlur={newContent => setContentDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                    />

                </div>
                <div style={{marginBottom: 15}}>
                    <InputLabel htmlFor="mission">
                        Mission :
                    </InputLabel>
                    <JoditEditor
                        ref={editorMission}
                        value={contentMission}
                        config={config}
                        onBlur={newContent => setContentMission(newContent)}
                    />

                </div>
                <div style={{marginBottom: 15}}>
                    <InputLabel htmlFor="profile">
                        Profile :
                    </InputLabel>
                    <JoditEditor
                        ref={editorProfile}
                        value={contentProfile}
                        config={config}
                        onBlur={newContent => setContentProfile(newContent)}
                    />
                </div>
                <div style={{marginBottom: 15}}>
                    <InputLabel htmlFor="remuneration">
                        Rémuneration :
                    </InputLabel>
                    <JoditEditor
                        ref={editorRemuneration}
                        value={contentRemuneration}
                        config={config}
                        onBlur={newContent => setContentRemuneration(newContent)}
                    />
                </div>
                <div style={{marginBottom: 15}}>
                    <InputLabel htmlFor="contact">
                        Contact :
                    </InputLabel>
                    <JoditEditor
                        ref={editorContact}
                        value={contentContact}
                        config={config}
                        onBlur={newContent => setContentContact(newContent)}
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
                        onClick={goToPoste}
                    >
                        Annuler
                    </Button>
                </div>
            </form>
        </div>
    );
}