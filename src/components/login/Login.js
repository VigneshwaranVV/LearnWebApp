import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ErrorRoundedIcon from "@material-ui/icons/ErrorRounded";
import "./styles.css";
import { colors, fonts } from "../constants/variables";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { loginAuth } from "../../store_config/actions";

const useStyles = makeStyles(theme => ({
  container: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    display: "flex",
    textAlign: "center"
  },
  root: {
    // backgroundColor: 'yellow',
    "& $notchedOutline": {
      border: "6px black"
    },
    "&$focused $notchedOutline": {
      //you want this to be the same as the backgroundColor above
      border: "6px green"
      // outline: '1px yellow'
      // outlineColor:'green'
    }
  },
  textField: {
    width: "82%",
    alignSelf: "center",
    fontFamily: fonts.Lato_Regular,
    fontSize: "15px"
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: colors.Denim,
    width: "50%",
    height: "55px",
    borderRadius: "0px",
    fontFamily: fonts.NunitoSans_Regular
  }
}));

function Login(props) {
  console.log("======props login:::",props)
  const classes = useStyles();
  // const [isLoggedIn,setLoginStatus]
  const [formData, setFormData] = React.useState({
    username: "a@ss.com",
    password: "ss"
  });
  const [isError, setIsError] = React.useState(false);
  const pwd_ref = React.createRef();
  const handleChange = (fieldKey, value) => {
    setIsError(false);
    setFormData({ ...formData, [fieldKey]: value });
  };
  useEffect(() => {
    localStorage.setItem("isLoggedIn", false);
  }, []);

  const handleProceed = () => {
    localStorage.setItem("isLoggedIn", true);
    if (formData.password.length > 0 && validateEmail(formData.username)) {
      props.onClickLogin(formData);
      props.history.push("/dashboard");
    } else {
      setIsError(true);
    }
  };

  const keyPress = e => {
    if (e.keyCode == 13) {
      //keycode for enter key is 13
      handleProceed();
    }
  };
  const keyPress_user = e => {
    if (e.keyCode == 13) {
      //keycode for enter key is 13
      pwd_ref.current.focus();
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh"
        }}
      >
        {isError && (
          <div
            style={{
              width: "90%",
              justifyContent: "center",
              borderWidth: "1px",
              borderColor: colors.Orange,
              borderStyle: "solid",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px"
              // padding: "10px"
            }}
          >
            <ErrorRoundedIcon
              style={{
                color: colors.Orange,
                width: "40px",
                height: "40px",
                padding: "10px"
              }}
            />

            <span
              style={{ color: colors.Charcoal, fontFamily: fonts.Helvetica }}
            >
              <FormattedMessage
                id="error_text"
                defaultMessage="Email ID cannot be blank or the email format is not valid"
              />
            </span>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          justifyContent: "center"
        }}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              fontFamily: fonts.Helvetica,
              fontSize: "21.6px",
              color: colors.Charcoal
            }}
          >
            LOGIN TO PROCEED
          </p>
        </div>
        <form className={classes.container} noValidate autoComplete="off">
          <FormattedMessage
            id="email_placeHolder"
            defaultMessage="Enter your Email"
          >
            {placeholder => (
              <TextField
                id="outlined-email-input"
                className={classes.textField}
                classes={{ root: classes.root }}
                onKeyDown={keyPress_user}
                hiddenLabel
                autoFocus
                variant="outlined"
                placeholder={placeholder}
                type="email"
                margin="normal"
                onChange={event => handleChange("username", event.target.value)}
                value={formData.username}
              />
            )}
          </FormattedMessage>
          <FormattedMessage id="password_placeHolder" defaultMessage="Password">
            {placeholder => (
              <TextField
                inputRef={pwd_ref}
                id="standard-password-input"
                className={classes.textField}
                onKeyDown={keyPress}
                hiddenLabel
                variant="outlined"
                placeholder={placeholder}
                type="password"
                autoComplete="current-password"
                margin="normal"
                value={formData.password}
                onChange={event => handleChange("password", event.target.value)}
              />
            )}
          </FormattedMessage>
          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
              overflowWrap: "break-word",
              width: "100%"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: colors.Denim, boxShadow: "0px" }}
              className={classes.button}
              onClick={handleProceed}
            >
              <FormattedMessage id="loginButton" defaultMessage="Proceed >" />
            </Button>
          </div>
        </form>
        <p
          style={{
            textAlign: "center",
            justifyContent: "center",
            color: colors.Denim,
            fontFamily: fonts.NunitoSans_Regular,
            fontSize: "17px"
          }}
          onClick={() => props.history.push("/dashboard")}
        >
          <FormattedMessage
            id="forgotPassword"
            defaultMessage="Forgot Password ?"
          />
        </p>
      </div>
    </div>
  );
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export const mapStateToProps = state => {
  return {
    isAuth: state.isLoggedIn
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onClickLogin: formData => {
      return dispatch(loginAuth(formData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
