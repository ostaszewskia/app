import {Button, createStyles, Menu, MenuItem} from "@material-ui/core";
import {Link as RouterLink } from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles";
import UserContext from "../UserContext";
import React, {useState} from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

const useStyles = makeStyles( () => {
    return createStyles({
        loginButton: {
            color: "white",
            borderColor: "white",
            fontsize: "1.00em",
            textTransform: "none",
        },
        circleIcon: {
            marginLeft: "10px",
        },
        logoutButtonText: {
          paddingTop: "3px",
        },
})});

const LoginButton = () => {
    const classes = useStyles();
    const userContext = React.useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const isLoggedIn = userContext.user?.isLoggedIn;
    const username = userContext.user?.username;

    const handleClick = (event: React.ChangeEvent<any>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        setAnchorEl(null);
        userContext.setUser({isLoggedIn: false, username: ""})
    }

    return (
        <div>
            {!isLoggedIn && (<div>
                <Button
                    variant="outlined"
                    color="inherit"
                    component={RouterLink}
                    to="/login"
                    className={classes.loginButton}
                >
                    Login
                </Button>
            </div>)}
            {isLoggedIn && (
                <div>
                    <Button
                        onClick={handleClick}
                        className={classes.loginButton}
                        aria-haspopup={true}
                        aria-controls="simple-menu"
                    >
                        <div className={classes.logoutButtonText}>{username}</div>
                        <AccountCircleIcon className={classes.circleIcon}/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogout}>Wyloguj się</MenuItem>
                    </Menu>
                </div>
            )}
            </div>
    );
};

export default LoginButton;