import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import LoginForm from "../../components/LoginForm";

const useStyles = makeStyles(() =>
    createStyles({
        login: {
            marginLeft: "24px",
            marginBottom: "8px",
        },
        root: {
            marginBottom: "24px",
        }
}));


const LoginPage = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid
                container
                item
                xs={6}
                className={classes.login}
                direction="row"
                justify="space-between"
            >
                <Grid item>
                    <LoginForm />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LoginPage;