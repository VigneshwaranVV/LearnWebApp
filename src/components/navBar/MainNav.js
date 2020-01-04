import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store_config/actions";
import { RouteConfig } from "../../config/routeConfig";
import { colors, text_contants } from "../constants/variables";
import AppBarCollapse from "../../common/appBarCustom/AppBarCollapse";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    zIndex: 1,
    top: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    // minWidth: '80%'
  }
}));

function MainNav(props) {
  const classes = useStyles();
  const drawerData_beforeLogin = [
    {
      text: "Home",
      route: RouteConfig.root
    }, {
      text: "Login",
      route: RouteConfig.login
    },
    {
      text: "Sign Up",
      route: RouteConfig.register
    }
  ]
  const drawerData_afterLogin = [
    {
      text: "Home",
      route: RouteConfig.root
    }, {
      text: "Profile",
      route: RouteConfig.profile
    },
    {
      text: "Dashboard",
      route: RouteConfig.dashboard
    },
    {
      text: "Saved Data",
      route: RouteConfig.dashboard,
    },
    {
      text: <p style={{ verticalAlign: "center", display: "flex" }}>Logout &nbsp;<ExitToAppIcon /></p>,
      route: RouteConfig.login
    }
  ]
  return (
    <div className={classes.root}>
      <AppBar position="sticky"
        style={{ backgroundColor: colors.fb_blue, position: "sticky" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecorationLine: "none", color: "white" }}>
              {text_contants.app_header}
            </Link>
          </Typography>
          <AppBarCollapse drawerData={props.isAuth ? drawerData_afterLogin : drawerData_beforeLogin} onClickLogout={props.onClickLogout} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
export const mapStateToProps = state => {
  return { isAuth: state.authReducer.isLoggedIn };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogout: () => {
      return dispatch(logout)
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav));
