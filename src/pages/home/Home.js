import {Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import UserContext from "../../UserContext";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    button: {
        margin: "5px",
    },
    text: {
        transition: "ease-in-out",
    }
}));

const Home = () => {
    const userContext = React.useContext(UserContext);
    const isLoggedIn = userContext.user?.isLoggedIn;
    const classes = useStyles();

    return (
        <Grid>
            {isLoggedIn ?

                <Button
                    component={RouterLink}
                    to="/tasks"
                    variant="contained"
                    color="inherit"
                >
                    Pokaż listę
                </Button> :
                <div className={classes.container}>
                    <h1 className={classes.text}>Witaj w aplikacji TODO</h1>
                    <Button
                        component={RouterLink}
                        to="/login"
                        variant="contained"
                        color="inherit"
                        className={classes.button}
                    >
                        Logowanie
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/register"
                        variant="contained"
                        color="inherit"
                        className={classes.button}
                    >
                        Rejestracja
                    </Button>
                </div>
            }
        </Grid>
    )
};

export default Home;