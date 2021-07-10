import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserContext from "../UserContext";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        width: "19ch",
    }
}));

const TaskForm = (props) => {
    const classes = useStyles();
    const [taskNameValue, setTaskNameValue] = useState("");
    const [taskDescriptionValue, setTaskDescriptionValue] = useState("");
    const [existing, setExisting] = useState(false);
    const [validated, setValidated] = useState(true);
    const userContext = React.useContext(UserContext);
    const tasks = userContext.tasks;

    const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setTaskNameValue(event.target.value);
    }

    const handleTaskDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskDescriptionValue(event.target.value);
    }

    const TaskContextChange = () => {
        setValidated(true);
        setExisting(false);
        const taskValues = {
            username: props.username,
            taskTitle: taskNameValue,
            taskDescription: taskDescriptionValue,
            done: false,
            dateAdded: new Date(),
        };
        if (taskNameValue === "") {
            setValidated(false)
            return
        }

        const checkIfExist = tasks[0].findIndex(taskInContext => {
            return (taskInContext.taskTitle.valueOf() === taskNameValue.valueOf() &&
                taskInContext.username.valueOf() === props.username.valueOf());
        });
        if (checkIfExist > -1) {
            setExisting(true);
            return;
        }
        tasks[0].push(taskValues);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            {existing &&
            <Alert severity="info">Posiadasz już zadanie o takiej nazwie (nazwa zadania musi być unikalna)</Alert>}
            {!validated && <Alert severity="info">Zadanie musi posiadać nazwe</Alert>}
            <div>
                <TextField
                    label="Nazwa zadania"
                    type="text"
                    variant="outlined"
                    value={taskNameValue}
                    onChange={handleTaskNameChange}
                />
            </div>
            <div>
                <TextField
                    label="Opis zadania"
                    type="text"
                    value={taskDescriptionValue}
                    variant="outlined"
                    onChange={handleTaskDescriptionChange}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                component={RouterLink}
                onClick={TaskContextChange}
            >
                Dodaj
            </Button>
        </form>
    )
};

export default TaskForm;