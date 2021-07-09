import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserContext from "../UserContext";

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

const TaskForm = (props) => {

    const classes = useStyles();
    const [taskNameValue, setTaskNameValue] = useState("");
    const [taskDescriptionValue, setTaskDescriptionValue] = useState("");
    const userContext = React.useContext(UserContext);
    const tasks = userContext.tasks;
    const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setTaskNameValue(event.target.value);
    }

    const handleTaskDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskDescriptionValue(event.target.value);
    }

    const TaskContextChange = () => {
        const taskValues = {
            id: props.lastIndex + 1,
            username: props.username,
            taskTitle: taskNameValue,
            taskDescription: taskDescriptionValue
        };
        if (taskNameValue === "") {
            return
        }
        tasks[0].push(taskValues);


    }


    return (
        <form className={classes.root} noValidate autoComplete="off">
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
            <div className={classes.buttonContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={RouterLink}
                    onClick={TaskContextChange}
                >
                    Dodaj
                </Button>
            </div>
        </form>
    )
}
export default TaskForm