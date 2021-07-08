import {Button, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {useState} from "react";
import UserContext from "../../UserContext";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '10vh',
        height: '10vh',
    }
}));

const Home = () => {
    const userContext = React.useContext(UserContext);
    const isLoggedIn = userContext.user?.isLoggedIn;
    const classes = useStyles();
    return (
        <Grid>
            <Paper elevation={3} className={classes.paper}>
                TODOLIST
            </Paper>
            {isLoggedIn ?
                <div>
                    <Button
                        component={RouterLink}
                        to="/tasks">
                        <Paper
                            className={classes.paper}
                            elevation={3}>
                            Pokaż liste
                        </Paper>

                    </Button></div> :
                <div>
                    <Button
                        component={RouterLink}
                        to="/login">
                        <Paper
                            className={classes.paper}
                            elevation={3}>
                            Zaloguj
                        </Paper>

                    </Button>
                    <Button
                        component={RouterLink}
                        to="/register">
                        <Paper
                            className={classes.paper}
                            elevation={3}>
                            Zarejestruj się
                        </Paper>

                    </Button>
                </div>
            }
        </Grid>
    )
}

export default Home;