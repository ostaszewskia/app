import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import LoginForm from "../../components/LoginForm";
import LoginPage from "../login/LoginPage";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
    </Switch>
);

export default Routes;