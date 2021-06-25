import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Grid} from "@material-ui/core";
import UserContext from "../UserContext";
import {Link as RouterLink } from "react-router-dom"

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
    const classes = useStyles();
    const [loginValue, setLoginValue] = useState("");
    const { setUser } = useContext(UserContext);
    const userContextChange = () => {
        setUser({isLoggedIn: true, username: loginValue})
    }


    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginValue(event.target.value);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h1>Login</h1>
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
                    variant="outlined"
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
                    to="/"
                    onClick={userContextChange}
                >
                    Zaloguj
                </Button>
            </div>
        </form>
    );
}

export default LoginForm;