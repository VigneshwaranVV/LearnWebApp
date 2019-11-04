import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainNav from "./components/navBar/MainNav";
import Login from "./components/login/Login";
import DashBoard from "./components/dashBoard/dashBoard";
import Screen1 from "./components/demoScreen/screen1";
import Register from "./components/registration/register";

const Routes = () => (
  <BrowserRouter context={{}} location={{}}>
    <MainNav />
    <Switch>
      <Route path="/" exact={true} component={Screen1} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={DashBoard} />
      <Route
        path="/forgotPassword"
        component={() => <p>Forgot Password</p>}
      />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
