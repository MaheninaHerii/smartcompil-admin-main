import {
    Alert,
    Avatar,
    Box,
    Button, CircularProgress,
    CssBaseline,
    Grid,
    Paper,
    TextField,
    Typography
} from "@mui/material";

import {Theme} from "@mui/system";
import {deepPurple} from "@mui/material/colors";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {LockOutlined} from "@mui/icons-material";
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import {useDispatch, useSelector} from "react-redux";
import {
    getAuthSelector,
    getErrorAuthSelector,
    getPendingAuthSelector
} from "../../core/redux/selector/SecuritySelectors";
import {postLoginRequest} from "../../core/redux/actions/SecurityActions";
import {IUser} from "../../core/data/interfaces/IUser";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <a color="inherit" href="https://smartcompil.fr" target="_blank" rel="noreferrer">
                SMARTCOMPIL
            </a>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url("background-login.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: deepPurple[500]
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ColorButton = withStyles(() => ({
    root: {
        color: deepPurple[500],
        backgroundColor: deepPurple[500],
        '&:hover': {
            backgroundColor: deepPurple[500],
        },
    },
}))(Button);

export default function LoginPage() {
    const classes = useStyles();
    const history = useNavigate();

    const dispatch = useDispatch();
    const pending = useSelector(getPendingAuthSelector);
    const authResponse = useSelector(getAuthSelector);
    const error = useSelector(getErrorAuthSelector);

    const [user, setUser] = useState<IUser>({
        email: '',
        password: ''
    });
    const [errorForm, setErrorForm] = useState<boolean>(false);
    const {email, password} = user;

    function handleChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.currentTarget;
        setErrorForm(false);
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        if (email && password) {
            dispatch(postLoginRequest({email, password}));
        } else {
            setErrorForm(true);
        }
    }

    if (authResponse && !!authResponse.accessToken) {
        history("/");
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined/>
                    </Avatar>
                    {!errorForm && error === 'INVALID_LOGIN' && (
                        <Alert severity="error">Veuillez vérifier votre login ou mot de passe.</Alert>)}
                    {errorForm && (
                        <Alert severity="error">Veuillez vérifier le champ sont tous obligatoire.</Alert>)}
                    <form className={classes.form} onSubmit={handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            autoComplete="email"
                            autoFocus
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handleChange}
                        />
                        <ColorButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {pending && (<><CircularProgress color="inherit"/>&nbsp;</>)}
                            Se connecter
                        </ColorButton>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
