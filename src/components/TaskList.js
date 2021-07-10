import UserContext from "../UserContext";
import {DataGrid} from '@material-ui/data-grid';
import React from "react";
import TaskForm from "./TaskForm";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import {
    Button,
    Card, CardActions,
    CardContent,
    Checkbox, Collapse, FormControlLabel, IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: theme.palette.background.paper,
        margin: '20px',
        '&:hover': {
            background: "green",
        },
    },
    tasksDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "space-between",
        flexWrap: "wrap",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    done: {
        backgroundColor: "green",
        color: "white"
    },
    deleted: {
        backgroundColor: "red",
        color: "white"
    },
}));

const TaskList = () => {
    const userContext = React.useContext(UserContext);
    const username = userContext.user.username;
    const tasks = userContext.tasks;
    const classes = useStyles();
    const [expandedId, setExpandedId] = React.useState(-1);
    const [doneId, setDoneId] = React.useState(-1);
    const [deletedId, setDeletedId] = React.useState(-1);
    const [showDone, setShowDone] = React.useState(false);

    const handleCheckClick = () => {
        setShowDone(!showDone);
    };


    const handleExpandClick = (i) => {
        setExpandedId(expandedId === i ? -1 : i);
    };

    const handleDoneClick = (i) => {
        setDoneId(doneId === i ? -1 : i);
    };
    const handleDeleteClick = (i) => {
        setDeletedId(deletedId === i ? -1 : i);
    };


    let userTasks = [];
    tasks[0].forEach((tasks) => {

        if (tasks.username.valueOf() === username.valueOf() && tasks.done === showDone) {
            userTasks.push(tasks)
        }
    })
    userTasks.reverse();
    return (

        <div className={classes.root}>
            <TaskForm username={username} lastIndex={userTasks.length}/>
            <FormControlLabel
                control={
                    <Checkbox
                        onChange={handleCheckClick}
                        color="primary"
                    />
                }
                label="Pokaż ukończone"
            />

            <div className={classes.tasksDiv}>
                {userTasks.map((task) => {
                    let taskDateMinutes = task.dateAdded.getMinutes();
                    if (taskDateMinutes < 10) {
                        taskDateMinutes = "0" + taskDateMinutes;
                    }
                    let hasDescription = () => {
                        return task.taskDescription !== "";
                    }
                    return (

                        <Card className='{classes.card}' variant="outlined">
                            <CardContent>
                                <Typography variant="h4" component="h2">
                                    {task.taskTitle}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant="h7" component="h2">
                                    {task.dateAdded.getDate() + "/" + task.dateAdded.getMonth() + "/" + task.dateAdded.getFullYear() + " " + task.dateAdded.getHours() + ":" + taskDateMinutes}
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <IconButton
                                    aria-label="mark as done"
                                    onClick={() => {
                                        handleDoneClick(task.taskTitle);
                                        const index = tasks[0].findIndex(taskInContext => {
                                            return (taskInContext.taskTitle.valueOf() === task.taskTitle.valueOf() &&
                                                taskInContext.username.valueOf() === task.username.valueOf());
                                        });
                                        tasks[0][index].done = !tasks[0][index].done;

                                    }}
                                >
                                    <CheckIcon/>
                                </IconButton>
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => {
                                        handleDeleteClick(task.taskTitle);
                                        const index = tasks[0].findIndex(taskInContext => {
                                            return (taskInContext.taskTitle.valueOf() === task.taskTitle.valueOf() &&
                                                taskInContext.username.valueOf() === task.username.valueOf());
                                        });
                                        tasks[0].splice(index, 1);
                                    }}>
                                    <DeleteForeverIcon/>
                                </IconButton>

                                {hasDescription() && <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expandedId,
                                    })}
                                    onClick={() => handleExpandClick(task.taskTitle)}
                                    aria-expanded={expandedId === task.taskTitle}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>}
                            </CardActions>
                            {hasDescription() &&
                            <Collapse in={expandedId === task.taskTitle} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>{task.taskDescription}</Typography>

                                </CardContent>
                            </Collapse>}
                        </Card>
                    );
                })}</div>
        </div>
    )
}

export default TaskList
