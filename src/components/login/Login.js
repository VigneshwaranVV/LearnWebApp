import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { FormattedMessage } from "react-intl";
import "./styles.css";
import { checkEmail } from "../../validations/regexValid";
export default function Login(props) {
  const useStyles = makeStyles(() =>
    createStyles({
      loginButton: {
        height: "50px"
      }
    })
  );
  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    username: "",
    password: ""
  });
  const handleChange = (fieldKey, value) => {
    console.log("-----------------from login", fieldKey, value, formData);
    setFormData({ ...formData, [fieldKey]: value });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="form-continer">
        <p>Welcome to login screen</p>
        <TextField
          id="userNamePlaceHolder"
          placeholder="s"
          autoFocus
          placeholder="Enter your Email"
          onChange={e => handleChange("username", e.target.value)}
          value={formData.username}
          helperText={!checkEmail(formData.username) ? "Empty field!" : " "}
          // className={classes.textField}
          // defaultValue={<FormattedMessage id="userNamePlaceHolder" defaultMessage={"Enter value"} />}
          margin="normal"
          variant="outlined"
          // inputProps={{ 'aria-label': 'bare' }}
        />
        <TextField
          type="password"
          id="outlined-password"
          placeholder="Password"
          onChange={e => handleChange("password", e.target.value)}
          value={formData.password}
          // className={classes.textField}
          // defaultValue={ <FormattedMessage id="passwordPlaceHolder" defaultMessage={"Enter value"} />}
          margin="normal"
          variant="outlined"
          // inputProps={{ 'aria-label': 'bare' }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.loginButton}
            onClick={() => props.history.push("/dashboard")}
          >
            <FormattedMessage id="loginButton" defaultMessage={"Login_null"} />
          </Button>
          <p
            // variant="contained"
            // color="primary"
            className="forgotPasswordButton"
            onClick={() => props.history.push("/forgotPassword")}
          >
            <FormattedMessage
              id="forgotPassword"
              defaultMessage={"Login_null"}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
