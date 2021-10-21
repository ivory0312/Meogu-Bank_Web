import { Switch, Route } from "react-router-dom";
import MainPage from "pages/Main";
import CreateAccountPage from "pages/CreateAccount";
import AccountPage from "pages/Account";
import AddAccountPage from "pages/AddAccount";

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
