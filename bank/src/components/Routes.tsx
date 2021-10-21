import { Switch, Route } from "react-router-dom";
import MainPage from "components/Main";
import CreateAccountPage from "components/Account/CreateAccount";
import AccountPage from "components/Account";
import AddAccountPage from "components/Account/AddAccount";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/create-account" component={CreateAccountPage} />
      <Route exact path="/account" component={AccountPage} />
      <Route exact path="/add-account" component={AddAccountPage} />
    </Switch>
  );
};

export default Routes;
