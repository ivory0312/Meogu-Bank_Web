import { Switch, Route } from "react-router-dom";
import MainPage from "pages/Main";
import CreateAccountPage from "pages/CreateAccount";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/create-account" component={CreateAccountPage} />
    </Switch>
  );
};

export default Routes;
