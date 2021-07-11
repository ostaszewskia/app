import UserContext from "../../UserContext";
import {createStyles, CssBaseline, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Routes from "./Routes";
import NavBar from "./NavBar";
import {useState} from "react";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
        },
        content: {
            justifyContent: "center",
            alignItems: "center",
            height: '90vh',
        },
        navbar: {
            width: "100%",
            height: '10vh',
        }
    })
)

const App = () => {
    const classes = useStyles();
    const USER_CREDENTIALS = [
        {
            username: "user1",
            password: "user1"
        },
        {
            username: "user2",
            password: "user2"
        },
        {
            username: "byczek1",
            password: "byczek1"
        },
        {
            username: "byczek2",
            password: "byczek2"
        }
    ];
    const TASKS = [
        {
            username: "user1",
            taskTitle: "user1's task1",
            taskDescription: "user1's task1 description",
            done: false,
            dateAdded: new Date(2020, 1, 2, 18),
        },
        {
            username: "user1",
            taskTitle: "user1's task2",
            taskDescription: "user1's task2 description",
            done: false,
            dateAdded: new Date(2020, 1, 2, 18, 5),
        },
        {
            username: "user1",
            taskTitle: "user1's task3",
            taskDescription: "user1's task3 description",
            done: true,
            dateAdded: new Date(2020, 1, 3, 19),
        },
        {
            username: "user1",
            taskTitle: "user1's task4",
            taskDescription: "user1's task4 description",
            done: false,
            dateAdded: new Date(2020, 1, 4, 20, 50)
        },
        {
            username: "user2",
            taskTitle: "user2's task1",
            taskDescription: "user2's task1 description",
            done: false,
            dateAdded: "",
        },
        {
            username: "user2",
            taskTitle: "user2's task2",
            taskDescription: "user2's task2 description",
            done: false,
            dateAdded: "",
        },
        {
            username: "user2",
            taskTitle: "user2's task3",
            taskDescription: "user2's task3 description",
            done: true,
            dateAdded: "",
        },
        {
            username: "user2",
            taskTitle: "user2's task4",
            taskDescription: "user2's task4 description",
            done: false,
            dateAdded: "",
        },
    ];
    const [credentialContext, addUserContext] = useState([USER_CREDENTIALS]);
    const [context, setContext] = useState({isLoggedIn: false, username: ""},);
    const [tasksContext, addTask] = useState([TASKS]);

    return (
        <UserContext.Provider value={{
            user: context,
            setUser: setContext,
            credentials: credentialContext,
            addUser: addUserContext,
            tasks: tasksContext,
            addTask: addTask
        }}>
            <div className="App">
                <div className={classes.root}>
                    <CssBaseline/>
                    <NavBar className={classes.navbar}/>
                    <Grid container className={classes.content}>
                        <Routes/>
                    </Grid>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;