import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link as RouterLink } from "react-router-dom"
import LoginButton from "../../components/LoginButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom : 20,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button
                            color="inherit"
                            component={RouterLink}
                            to="/"
                        >
                            TODO List
                        </Button>
                    </Typography>
                    <LoginButton />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;