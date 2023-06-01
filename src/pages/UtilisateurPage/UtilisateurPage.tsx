import React, {useState, useEffect} from 'react';
import {Alert, Box, Button, CircularProgress, Tab, Tabs, TextField, Typography} from "@mui/material";
import {Cancel, Edit, Save} from "@mui/icons-material";

import {useDispatch, useSelector} from "react-redux";
import {
    getPendingUserSelector,
    getUserSelector
} from "../../core/redux/selector/UserSelectors";
import {
    fetchUserRequest,
    putUpdateEmailUserRequest,
    putUpdatePasswordUserRequest
} from "../../core/redux/actions/UserActions";
import {getEmail} from "../../core/services/SecurityService";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function UtilisateurPage() {
    const [id, setId] = useState<number>(0);
    const [email, setEmail] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [disabledEmail, setDisabledEmail] = useState<boolean>(true);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [disabledPassword, setDisabledPassword] = useState<boolean>(true);
    const dispatch = useDispatch();
    const pending = useSelector(getPendingUserSelector);
    const user = useSelector(getUserSelector);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(fetchUserRequest(getEmail()));
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            setId(user.id || 0);
            setEmail(user.email || '');
        }
    }, [user]);

    const handleSubmitUpdateEmail = (event: React.SyntheticEvent) => {
        event.preventDefault();
        dispatch(putUpdateEmailUserRequest({
            id, email
        }));
        setDisabledEmail(true);
    }

    const handleSubmitUpdatePassword = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (!!newPassword && newPassword.includes(confirmPassword)) {
            setErrorPassword(false);
            dispatch(putUpdatePasswordUserRequest({
                password: newPassword, id
            }));
            setDisabledPassword(true);
        } else {
            setErrorPassword(true);
        }
    }

    return (
        <div>
            <Typography component="h1" variant="h5" align="center">
                Profil utilisateur
            </Typography>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Modifier l'email" {...a11yProps(0)} />
                    <Tab label="Modifier le mot de passe" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <form onSubmit={handleSubmitUpdateEmail} noValidate>
                    <div style={{marginBottom: 15}}>
                        <TextField required id="outlined-basic" label="E-mail" variant="outlined" fullWidth
                                   value={email}
                                   disabled={disabledEmail}
                                   onChange={event => {
                                       setEmail(event.target.value);
                                   }}
                                   onBlur={event => {
                                       setEmail(event.target.value);
                                   }}/>
                    </div>
                    <div>
                        <Button variant="contained" color="success" startIcon={<Edit/>} disabled={!disabledEmail}
                                style={{marginRight: 10}} onClick={() => setDisabledEmail(false)}>
                            Modifier
                        </Button>
                        <Button variant="contained" color="primary" startIcon={<Save/>}
                                type="submit" style={{marginRight: 10}} disabled={disabledEmail}>
                            {pending && (<><CircularProgress color="inherit"/>&nbsp;</>)}
                            Enregistrer
                        </Button>
                        <Button
                            startIcon={<Cancel/>}
                            variant="contained"
                            color="secondary" disabled={disabledEmail}
                            onClick={() => setDisabledEmail(true)}
                        >
                            Annuler
                        </Button>
                    </div>
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {errorPassword && (
                    <Alert severity="error">Veuillez vérifier votre mot de passe et confirmation de mot de
                        passe.</Alert>)}
                <form onSubmit={handleSubmitUpdatePassword} noValidate>
                    <div style={{marginBottom: 15}}>
                        <TextField required id="outlined-basic" label="Nouveau Mot de passe" variant="outlined"
                                   fullWidth
                                   value={newPassword}
                                   disabled={disabledPassword}
                                   type="password"
                                   onChange={event => {
                                       setNewPassword(event.target.value);
                                   }}
                                   onBlur={event => {
                                       setNewPassword(event.target.value);
                                   }}/>
                    </div>
                    <div style={{marginBottom: 15}}>
                        <TextField required id="outlined-basic" label="Confirmation de nouveau mot de passe"
                                   variant="outlined"
                                   fullWidth
                                   value={confirmPassword}
                                   disabled={disabledPassword}
                                   type="password"
                                   onChange={event => {
                                       setConfirmPassword(event.target.value);
                                   }}
                                   onBlur={event => {
                                       setConfirmPassword(event.target.value);
                                   }}/>
                    </div>
                    <div>
                        <Button variant="contained" color="success" startIcon={<Edit/>} disabled={!disabledPassword}
                                style={{marginRight: 10}} onClick={() => setDisabledPassword(false)}>
                            Modifier
                        </Button>
                        <Button variant="contained" color="primary" startIcon={<Save/>}
                                type="submit" style={{marginRight: 10}} disabled={disabledPassword}>
                            {pending && (<><CircularProgress color="inherit"/>&nbsp;</>)}
                            Enregistrer
                        </Button>
                        <Button
                            startIcon={<Cancel/>}
                            variant="contained"
                            color="secondary" disabled={disabledPassword}
                            onClick={() => setDisabledPassword(true)}
                        >
                            Annuler
                        </Button>
                    </div>
                </form>
            </TabPanel>
        </div>
    );
}