import { Switch, Route } from "react-router-dom";
import MainPage from "pages/Main";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
};

export default Routes;
