import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { withRouter } from 'react-router-dom'
import { RouteConfig } from "../../config/routeConfig";

const styles = theme => ({
  root: {
    position: "sticky",
    // height: '7vh',
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});

const AppBarCollapse = props => {
  const { drawerData } = { ...props }
  const redirect = (route = '/') => {
    if (route === RouteConfig.login) {
      props.onClickLogout();
    }
    props.history.push(route);
  }
  return (
    <div className={props.classes.root}>
      <ButtonAppBarCollapse drawerData={drawerData} redirect={redirect} />
      <div className={props.classes.buttonBar} id="appbar-collapse">
        {drawerData.map((data, index) => {
          return <Button color="inherit" onClick={() => redirect(data.route)} key={index}>{data.text}</Button>;
        })}
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(AppBarCollapse));
