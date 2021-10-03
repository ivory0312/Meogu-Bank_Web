import { Switch, Route } from "react-router-dom";
import MainPage from "pages/Main";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage}></Route>
    </Switch>
  );
};

export default Routes;
