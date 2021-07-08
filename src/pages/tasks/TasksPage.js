import TaskList from "../../components/TaskList";
import React from "react";
import UserContext from "../../UserContext";
import {Link as RouterLink} from "react-router-dom";
import {Button, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '10vh',
        height: '10vh',
    },
    taskspage: {
        width: '100vh',
        height: '100vh',
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
                <Paper
                    className={classes.paper}
                    elevation={3}>
                    Zaloguj
                </Paper>

            </Button>}
        </div>


    )
}

export default TaskPage;