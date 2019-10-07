import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { FormattedMessage } from "react-intl";

export default function Login(props) {
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
          onClick={() => props.history.push("/dashboard")}
        >
          <FormattedMessage id="loginButton" defaultMessage={"Login_null"} />
        </Button>
        <br />
        <Button
          variant="contained"
          color="primary"
          // className={classes.button}
          onClick={() => props.history.push("/forgotPassword")}
        >
          <FormattedMessage id="forgotPassword" defaultMessage={"Login_null"} />
        </Button>
      </div>
    </div>
  );
}
