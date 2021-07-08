import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import LoginPage from "../login/LoginPage";
import RegisterPage from "../register/RegisterPage";
import TaskPage from "../tasks/TasksPage";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/tasks" component={TaskPage} />
    </Switch>
);

export default Routes;