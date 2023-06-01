import React, {useState, useEffect} from 'react';
import {Button, CircularProgress, TextField, Typography} from "@mui/material";
import {Cancel, Edit, Save} from "@mui/icons-material";

import {useDispatch, useSelector} from "react-redux";
import {
    getPendingContactezNousSelector,
    getContactezNousSelector
} from "../../core/redux/selector/ContactezNousSelectors";
import {fetchContactezNousRequest, putContactezNousRequest} from "../../core/redux/actions/ContactezNousActions";

export default function ContactezNousPage() {
    const [id, setId] = useState<number>(0);
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [facebook, setFacebook] = useState<string>('');
    const [linkedin, setLinkedin] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(true);
    const dispatch = useDispatch();
    const pending = useSelector(getPendingContactezNousSelector);
    const contactezNous = useSelector(getContactezNousSelector);

    useEffect(() => {
        dispatch(fetchContactezNousRequest());
    }, [dispatch]);

    useEffect(() => {
        if (contactezNous) {
            setId(contactezNous.id || 0);
            setPhone(contactezNous.phone || '');
            setEmail(contactezNous.email || '');
            setAddress(contactezNous.address || '');
            setFacebook(contactezNous.facebook || '');
            setLinkedin(contactezNous.linkedin || '');
        }
    }, [contactezNous]);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        dispatch(putContactezNousRequest({
            id, phone, email, address, facebook, linkedin
        }));
        setDisabled(true);
    }

    return (
        <div>
            <Typography component="h1" variant="h5" align="center">
                Contactez-nous
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <div style={{marginBottom: 15}}>
                    <TextField required id="outlined-basic" label="Téléphone" variant="outlined" fullWidth
                               value={phone}
                               disabled={disabled}
                               onChange={event => {
                                   setPhone(event.target.value);
                               }}
                               onBlur={event => {
                                   setPhone(event.target.value);
                               }}/>
                </div>
                <div style={{marginBottom: 15}}>
                    <TextField required id="outlined-basic" label="E-mail" variant="outlined" fullWidth
                               value={email}
                               disabled={disabled}
                               onChange={event => {
                                   setEmail(event.target.value);
                               }}
                               onBlur={event => {
                                   setEmail(event.target.value);
                               }}/>
                </div>
                <div style={{marginBottom: 15}}>
                    <TextField required id="outlined-basic" label="Address" variant="outlined" fullWidth
                               value={address}
                               disabled={disabled}
                               onChange={event => {
                                   setAddress(event.target.value);
                               }}
                               onBlur={event => {
                                   setAddress(event.target.value);
                               }}/>
                </div>
                <div style={{marginBottom: 15}}>
                    <TextField required id="outlined-basic" label="Facebook" variant="outlined" fullWidth
                               value={facebook}
                               disabled={disabled}
                               onChange={event => {
                                   setFacebook(event.target.value);
                               }}
                               onBlur={event => {
                                   setFacebook(event.target.value);
                               }}/>
                </div>
                <div style={{marginBottom: 15}}>
                    <TextField required id="outlined-basic" label="Linkedin" variant="outlined" fullWidth
                               value={linkedin}
                               disabled={disabled}
                               onChange={event => {
                                   setLinkedin(event.target.value);
                               }}
                               onBlur={event => {
                                   setLinkedin(event.target.value);
                               }}/>
                </div>
                <div>
                    <Button variant="contained" color="success" startIcon={<Edit/>} disabled={!disabled}
                            style={{marginRight: 10}} onClick={() => setDisabled(false)}>
                        Modifier
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<Save/>}
                            type="submit" style={{marginRight: 10}} disabled={disabled}>
                        {pending && (<><CircularProgress color="inherit"/>&nbsp;</>)}
                        Enregistrer
                    </Button>
                    <Button
                        startIcon={<Cancel/>}
                        variant="contained"
                        color="secondary" disabled={disabled}
                        onClick={() => setDisabled(true)}
                    >
                        Annuler
                    </Button>
                </div>
            </form>
        </div>
    );
}