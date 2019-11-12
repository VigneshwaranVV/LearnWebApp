import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from "../../store_config/actions";
import { RouteConfig } from "../../config/routeConfig";
import { colors, text_contants } from "../constants/variables";
import AppBarCollapse from "../../common/appBarCustom/AppBarCollapse";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // position: "sticky",
    zIndex: 1,
    top: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function MainNav(props) {
  const classes = useStyles();
  const [isLoginScreen, toggleSignUp] = React.useState(false);
  useEffect(() => {
    if (window.location.pathname == "/login") {
      toggleSignUp(true);
    }
  })
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    if (path) {
      props.history.replace(path)
    }
    if (path == RouteConfig.login) {
      props.onClickLogout();
    }
  }
  const drawerData_beforeLogin = [
    {
      text: 'Login',
      route: RouteConfig.login
    },
    {
      text: 'Sign Up',
      route: RouteConfig.register
    }
  ]
  const drawerData_afterLogin = [
    {
      text: 'Profile',
      route: RouteConfig.profile
    },
    {
      text: 'Dashboard',
      route: RouteConfig.dashboard
    }
  ]
  return (
    <div className={classes.root}>

      <AppBar position="static" style={{ backgroundColor: colors.fb_blue }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecorationLine: "none", color: "white" }}>
              {text_contants.app_header}
            </Link>
          </Typography>
          <AppBarCollapse drawerData={props.isAuth ? drawerData_afterLogin : drawerData_beforeLogin} />
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
