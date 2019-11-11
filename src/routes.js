import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainNav from "./components/navBar/MainNav";
import Login from "./components/login/Login";
import DashBoard from "./components/dashBoard/dashBoard";
import Screen1 from "./components/demoScreen/screen1";
import Register from "./components/registration/register";
import profileForm from "./components/profile/profileForm";
import { RouteConfig } from "./config/routeConfig";
import { ProtectedRoute } from "./common/protected-route/ProtectedRoute";
import FooterContent from "./common/footer/FooterContent";

const Routes = () => (
  <BrowserRouter context={{}} location={{}}>
    <MainNav />
    <div style={{height:'80vh'}}>
    <Switch>
      <Route path={RouteConfig.root} exact={true} component={DashBoard} />
      <Route path={RouteConfig.login} component={Login} />
      <ProtectedRoute path={RouteConfig.dashboard} component={DashBoard} />
      <Route
        path={RouteConfig.forgotPassword}
        component={() => <p>Forgot Password</p>}
      />
      <Route path={RouteConfig.register} component={Register} />
      <ProtectedRoute path={RouteConfig.profile} component={profileForm} />
    </Switch>
    </div>
    <FooterContent />
  </BrowserRouter>
);

export default Routes;
