import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { NavLink, withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    position: "absolute",
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
    props.history.push(route);
  }
  return (
    <div className={props.classes.root}>
      <ButtonAppBarCollapse drawerData={drawerData} redirect={redirect}/>
      <div className={props.classes.buttonBar} id="appbar-collapse">
        {drawerData.map((data, index) => {
          return <Button color="inherit" onClick={()=>redirect(data.route)}>{data.text}</Button>;
        })}
      </div>
    </div>
  );
};

export default withRouter(withStyles(styles)(AppBarCollapse));
