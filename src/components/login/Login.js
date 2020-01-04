import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ErrorRoundedIcon from "@material-ui/icons/ErrorRounded";
import "./styles.css";
import { colors, fonts } from "../constants/variables";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { loginAuth } from "../../store_config/actions";
import CustomInputField from "../../common/VTextField/CustomInputField";

const useStyles = makeStyles(theme => ({
  container: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "red",
    display: "flex",
    textAlign: "center"
  },
  textField: {
    minWidth: "70%",
    alignSelf: "center",
    fontFamily: fonts.Lato_Regular,
    fontSize: "15px"
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

function Login (props) {
  const classes = useStyles();
  // const [isLoggedIn,setLoginStatus]
  const [formData, setFormData] = React.useState({
    email: "qa@qa.com",
    password: "123#"
  });
  const [isError, setIsError] = React.useState(false);
  const pwd_ref = React.createRef();
  const handleChange = (fieldKey, value) => {
    setIsError(false);
    setFormData({ ...formData, [fieldKey]: value });
  };
  const handleProceed = () => {
    if (formData.password.length > 0 && validateEmail(formData.email)) {
      props.onClickLogin(formData);

    } else {
      setIsError(true);
    }
  };
  useEffect(() => {
    if (props.isAuth)
      props.history.replace("/profile");
      // props.history.replace("/dashboard");
  })

  const keyPress = e => {
    if (e.keyCode === 13) {
      //keycode for enter key is 13
      handleProceed();
    }
  };
  const keyPress_user = e => {
    if (e.keyCode === 13) {
      //keycode for enter key is 13
      pwd_ref.current.focus();
    }
  };
  let Background = ""
  return (
    <div style={{ backgroundImage: `url(${Background})` }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // height: "10vh"
        }}
      >
        {(isError || props.isErrorMsg) && (
          <div
            style={{
              width: "90%",
              justifyContent: "center",
              borderWidth: "1px",
              borderColor: colors.Orange,
              borderStyle: "solid",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
              marginTop: "10px"
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
              {
                props.isErrorMsg ?
                  <FormattedMessage
                    id="error_text_api"
                    defaultMessage={props.isErrorMsg}
                  />
                  :
                  <FormattedMessage
                    id="error_text"
                    defaultMessage="Email ID cannot be blank or the email format is not valid"
                  />
              }
            </span>
          </div>
        )}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "70vh",
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
        {/* <form className={classes.container} noValidate autoComplete="off"> */}
        <FormattedMessage
          id="email_placeHolder"
          defaultMessage="Enter your Email"
        >
          {placeholder => (
            <CustomInputField
              className={classes.textField}
              onKeyDown={keyPress_user}
              label={placeholder}
              autoFocus
              type="email"
              onChange={event => handleChange("email", event.target.value)}
              value={formData.email}
            />
          )}
        </FormattedMessage>
        <FormattedMessage id="password_placeHolder" defaultMessage="Password">
          {placeholder => (
            <CustomInputField
              inputRef={pwd_ref}
              onKeyDown={keyPress}
              label={placeholder}
              className={classes.textField}
              value={formData.password}
              type="password"
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
            style={{ backgroundColor: colors.fb_blue, boxShadow: "0px" ,fontWeight: "bold"}}
            className={classes.button}
            onClick={props.isLoading ? null : handleProceed}
          >
            {props.isLoading ? "Loading..." :
              <FormattedMessage id="loginButton" defaultMessage="Proceed >" />
            }
          </Button>
        </div>
        {/* </form> */}
        <p
          style={{
            textAlign: "center",
            justifyContent: "center",
            color: colors.fb_blue,
            fontFamily: fonts.NunitoSans_Regular,
            fontSize: "17px",
            padding:10
          }}
        // onClick={() => props.history.push("/dashboard")}
        >
          <FormattedMessage
            id="forgotPassword"
            defaultMessage="Forgot Password ?"
          />
        </p>
        <p onClick={()=>props.history.push("/register")}  style={{
            textAlign: "center",
            justifyContent: "center",
            color: colors.fb_blue,
            fontFamily: fonts.NunitoSans_Regular,
            fontSize: "17px",
            textDecoration: "underline"
          }}>Don't have account? Sign up here.</p>
      </div>
    </div>
  );
}

function validateEmail (email) {
  var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return re.test(String(email).toLowerCase());
}
export const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isLoggedIn,
    isLoading: state.authReducer.isLoading,
    isErrorMsg: state.authReducer.isError && state.authReducer.isError
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
