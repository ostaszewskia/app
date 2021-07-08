import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import UserContext from "../UserContext";
import {Link as RouterLink, useHistory} from "react-router-dom"
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        },
        marginTop: "-80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    buttonContainer: {
        marginTop: "20px",
        width: '40ch',
        justifyItems: "space-between",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        width: "19ch",
    }
}));

const RegisterForm = () => {
    const history = useHistory();
    const classes = useStyles();

    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const userContext = React.useContext(UserContext);
    const credentials = userContext.credentials;
    const {setUser} = useContext(UserContext);
    let validated = true;
    let existing = false;
    const userContextChange = () => {

        if (loginValue === "" || passwordValue === ""){
            validated = false;

            return;
        }
        console.log("przeszło walidacje, validated: " + validated)

        credentials[0].findIndex(credential => {
            if (credential.username === loginValue) {
                existing = true;
                console.log("znaleziony");
                console.log("existing po znalezieniu: " + existing);
                return true;
            }
        })
        if (existing){
            console.log("znaleziony")
            return;
        }
        setUser({isLoggedIn: true, username: loginValue});
        credentials[0].push({
            username: loginValue,
            password: passwordValue
        });
        history.push("/");
    }

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setLoginValue(event.target.value);

    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    }

    const renderAlerts = () => {
        console.log("validated po rednerze: " + validated);
        console.log("existing po renderze: " + existing);

        if (validated) {
            return <Alert severity="info">Wartości loginu i hasła nie mogą być puste</Alert>
        }
        if (existing) {
            return <Alert severity="info">Podany użytkownik już istnieje</Alert>
        }
    }
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h1>Register</h1>
            <div id='alerts'></div>
            <div>
                <TextField
                    label="Login"
                    type="text"
                    variant="outlined"
                    value={loginValue}
                    onChange={handleLoginChange}
                />
            </div>
            <div>
                <TextField
                    label="Hasło"
                    type="password"
                    value={passwordValue}
                    variant="outlined"
                    onChange={handlePasswordChange}
                />
            </div>
            <div className={classes.buttonContainer}>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    component={RouterLink}
                    to="/"
                >
                    Anuluj
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={RouterLink}
                    onClick={userContextChange}
                >
                    Zarejestruj
                </Button>
            </div>
        </form>
    );
}

export default RegisterForm;