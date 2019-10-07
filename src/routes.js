import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainNav from "./components/navBar/MainNav";
import Login from "./components/login/Login";

const Routes = () => (
  <BrowserRouter context={{}} location={{}}>
    <main>
      <MainNav />
      <Switch>
            <Route path="/login" component={Login} />
        <Route
          path="/forgotPassword"
          component={() => <p>Forgot Password</p>}
        />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
