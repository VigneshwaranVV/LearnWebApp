import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainNav from "./components/navBar/MainNav";
import Login from "./components/login/Login";
import DashBoard from "./components/dashBoard/dashBoard";
import profileForm from "./components/profile/profileForm";
import { RouteConfig } from "./config/routeConfig";
import { ProtectedRoute } from "./common/protected-route/ProtectedRoute";
import FooterContent from "./common/footer/FooterContent";
import NewsContent from "./components/news/content";
import Carousel from "./common/slider/Carousel";
import ApplyForm from "./components/registration/applyForm";
const Routes = () => (
  <BrowserRouter context={{}} location={{}}>
    <MainNav />
    <div style={{ minHeight: "86vh" }}>
      <Switch>
        <Route path={RouteConfig.root} exact={true} component={Carousel} />
        <Route path={RouteConfig.login} component={Login} />
        <ProtectedRoute path={RouteConfig.dashboard} component={DashBoard} />
        <Route
          path={RouteConfig.forgotPassword}
          component={() => <p>Forgot Password</p>}
        />
        <Route path={RouteConfig.register} component={ApplyForm} />
        <ProtectedRoute path={RouteConfig.profile} component={profileForm} />
      </Switch>
    </div>
    <FooterContent />
  </BrowserRouter>
);

export default Routes;
