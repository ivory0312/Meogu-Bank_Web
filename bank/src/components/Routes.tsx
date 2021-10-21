import { Switch, Route } from "react-router-dom";
import MainPage from "pages/Main";
import CreateAccountPage from "pages/CreateAccount";
import AccountPage from "pages/Account";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/create-account" component={CreateAccountPage} />
      <Route exact path="/account" component={AccountPage} />
    </Switch>
  );
};

export default Routes;
