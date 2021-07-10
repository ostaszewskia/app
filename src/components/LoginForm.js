import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import UserContext from "../UserContext";
import {Link as RouterLink} from "react-router-dom"
import Alert from '@material-ui/lab/Alert';
import {useHistory} from 'react-router-dom';


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

const LoginForm = () => {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(true);
    const classes = useStyles();
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const {credentials} = useContext(UserContext);
    const {setUser} = useContext(UserContext);

    const userContextChange = () => {
        const userValues = {
            username: loginValue,
            password: passwordValue
        };

        credentials[0].forEach((userCR) => {
            if (JSON.stringify(userValues) === JSON.stringify(userCR)) {
                setUser({isLoggedIn: true, username: loginValue});
                history.push("/");
            }
        });
        setLoggedIn(false);
    }

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    }

    return (
        <form className={classes.root} noValidate autoComplete="on">
            <h1>Login</h1>
            {!loggedIn && <Alert severity="info">Podaj poprawne dane</Alert>}
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
                    Zaloguj
                </Button>
            </div>
        </form>
    )
};

export default LoginForm;