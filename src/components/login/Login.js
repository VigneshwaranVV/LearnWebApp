import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default function Login(props) {
  //   render() {
  const useStyles = makeStyles(() =>
    createStyles({
      loginButton: {
        height: "50px",
        marginBottom: "100px"
      }
    })
  );
  const classes = useStyles();
  console.log("-----------------from login", props);
  return (
    <div>
      <p>Welcome to login screen</p>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.loginButton}
          onClick={() => props.history.push("/nav")}
        >dddddddddddddddd</Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          // className={classes.button}
          onClick={() => props.history.push("/forgotPassword")}
        >
          Forgot Password
        </Button>
      </div>
    </div>
  );
  //   }
}

// var r = [<FormattedMessage id="loginButton" defaultMessage={"Login_null"} />];
