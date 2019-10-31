import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
  console.log("----------------hell from mainnav:::", props, window);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecorationLine: "none", color: "white" }}>
              {" "}
              DATA SEARCH
            </Link>
          </Typography>
          <Button
            style={{ minWidth: "20%" }}
            color="inherit"
            onClick={() => toggleSignUp(!isLoginScreen)}
          >
            {!isLoginScreen ? (
              <Link
                to="/login"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                Login
              </Link>
            ) : (
              <Link
                to="/register"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                Don't have account?
              </Link>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export const mapStateToProps = state => {
  return { isAuth: state.isLoggedIn };
};


export default connect(mapStateToProps)(MainNav);
