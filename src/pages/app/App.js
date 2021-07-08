import UserContext from "../../UserContext";
import {createStyles, CssBaseline, Drawer, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Routes from "./Routes";
import NavBar from "./NavBar";
import {useState} from "react";

const useStyles = makeStyles( () =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            border: '2px solid red',
        },
        content: {
            // paddingTop: "80px",
            justifyContent: "center",
            alignItems: "center",
            border: '2px solid blue',
            height: '93vh'
        },
        navbar: {
            width: "100%",
            border: '2px solid green',
            // height: '10vh'
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
            id: 1,
            username: "user1",
            taskTitle: "user1's task1",
            taskDescription: "user1's task1 description"
        },
        {
            id: 2,
            username: "user1",
            taskTitle: "user1's task2",
            taskDescription: "user1's task2 description"
        },
        {
            id: 3,
            username: "user1",
            taskTitle: "user1's task3",
            taskDescription: "user1's task3 description"
        },
        {
            id: 4,
            username: "user1",
            taskTitle: "user1's task4",
            taskDescription: "user1's task4 description"
        },
        {
            id: 1,
            username: "user2",
            taskTitle: "user2's task1",
            taskDescription: "user2's task1 description"
        },
        {
            id: 2,
            username: "user2",
            taskTitle: "user2's task2",
            taskDescription: "user2's task2 description"
        },
        {
            id: 3,
            username: "user2",
            taskTitle: "user2's task3",
            taskDescription: "user2's task3 description"
        },
        {
            id: 4,
            username: "user2",
            taskTitle: "user2's task4",
            taskDescription: "user2's task4 description"
        },
    ]


    const [credentialContext, addUserContext] = useState([USER_CREDENTIALS]);
    const [context, setContext] = useState({isLoggedIn: false, username: ""},);
    const [tasksContext, addTask] = useState([TASKS]);

    return(
        <UserContext.Provider value={{ user: context, setUser: setContext , credentials: credentialContext, addUser: addUserContext, tasks: tasksContext, addTask: addTask}} >
            <div className="App">
                <div className={classes.root}>
                    <CssBaseline />
                    <NavBar className={classes.navbar}/>
                    <Grid container className={classes.content}>
                            <Routes />
                    </Grid>
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;