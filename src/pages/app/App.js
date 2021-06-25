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
        },
        content: {
            paddingTop: "80px",
            justifyContent: "center",
            alignItems: "center",
        },
        navbar: {
            width: "100%"
        }
    })
)

const App = () => {
    const classes = useStyles();
    const [context, setContext] = useState({isLoggedIn: false, username: ""})

    return(
        <UserContext.Provider value={{ user: context, setUser: setContext }} >
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