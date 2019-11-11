import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logout } from "../../store_config/actions";
import { RouteConfig } from "../../config/routeConfig";
import { colors, text_contants } from "../constants/variables";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "sticky",
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
  return (
    <div className={classes.root}>

      <AppBar position="static" style={{backgroundColor: colors.fb_blue}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecorationLine: "none", color: "white" }}>
              {text_contants.app_header}
            </Link>
          </Typography>
          {props.isAuth ?
            <Link
              // to="/profile"
              onClick={handleClick}
              style={{ textDecorationLine: "none", color: "white" }}
            >
              <div style={{ backgroundColor: 'lightgrey', display: 'flex', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                *
                  </div>
            </Link>

            : null
            // <Button
            //   style={{ minWidth: "20%",color:colors.fb_blue }}
            //   color="inherit"
            //   onClick={() => toggleSignUp(!isLoginScreen)}
            // >
            //   {!isLoginScreen ? (
            //     <Link
            //       to={RouteConfig.login}
            //       style={{ textDecorationLine: "none", color: "white" }}
            //     >
            //       Login
            //   </Link>
            //   ) : (
            //       <Link
            //         to={RouteConfig.register}
            //         style={{ textDecorationLine: "none", color: "white" }}
            //       >
            //         Don't have account?
            //   </Link>
            //     )}
            // </Button>
          }
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(RouteConfig.profile)}>Profile</MenuItem>
        <MenuItem onClick={() => handleClose(RouteConfig.profile)}>My account</MenuItem>
        <MenuItem onClick={() => handleClose(RouteConfig.login)}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export const mapStateToProps = state => {
  return { isAuth: state.authReducer.isLoggedIn };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogout: ()=>{
      return dispatch(logout)
    }
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainNav));
