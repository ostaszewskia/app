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
    const [validated, setValidated] = useState(true);
    const [existing, setExisting] = useState(false);
    const userContextChange = () => {
        setValidated(true);
        setExisting(false);

        if (checkLogin(loginValue, passwordValue)){
            setUser({isLoggedIn: true, username: loginValue});
            credentials[0].push({
                username: loginValue,
                password: passwordValue
            });
            history.push("/");
        }
    }

    function checkLogin(loginVal, passVal) {
        if (loginVal === "" || passVal === "") {
            setValidated(false);

            return false;
        }
        const exists = credentials[0].findIndex(credential => {
            if (credential.username.valueOf() === loginVal.valueOf()) {
                setExisting(true)


                return true;
            }
            return false
        });
        return exists === -1;

    }


    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setLoginValue(event.target.value);

    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    }


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h1>Register</h1>
            {!validated && <Alert severity="info">Wartości loginu i hasła nie mogą być puste</Alert>}
            {existing && <Alert severity="info">Podany użytkownik już istnieje</Alert>}
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