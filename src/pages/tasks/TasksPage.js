import TaskList from "../../components/TaskList";
import React from "react";
import UserContext from "../../UserContext";
import {Link as RouterLink} from "react-router-dom";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    taskspage: {
        width: '100vh',
        height: '90vh',
    }
}));

const TaskPage = () => {
    const userContext = React.useContext(UserContext);
    const isLoggedIn = userContext.user?.isLoggedIn;
    const classes = useStyles();

    return (
        <div className={classes.taskspage}>
            {isLoggedIn ? <TaskList/> : <Button
                component={RouterLink}
                to="/login">
                <Dialog
                    open={!isLoggedIn}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Nie zalogowano</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Aby wyświetlić zawartość listy zaloguj się na konto użytkownika
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button component={RouterLink} to="/" color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </Button>}
        </div>
    )
};

export default TaskPage;