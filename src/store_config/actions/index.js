import { LOGIN_AUTH, LOGIN_AUTH_SUCCESS, LOGOUT, LOGIN_AUTH_FAILURE, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from "./types";

export const loginAuth = ({ email, password }) => ({
  type: LOGIN_AUTH,
  payload: {
    email: email,
    password: password
  }
});

export const loginAuthSucceeded = content => ({
  type: LOGIN_AUTH_SUCCESS,
  payload: content
});

export const loginAuthFailed = content => ({
  type: LOGIN_AUTH_FAILURE,
  payload: content
});
export const logout = ({
  type: LOGOUT
});

export const registerUser = (formData) => ({
  type: REGISTER_USER,
  payload: {
    formData:formData
  }
})
export const registerUserSucceeded = content => ({
  type: REGISTER_USER_SUCCESS,
  payload: content
});

export const registerUserFailed = content => ({
  type: REGISTER_USER_FAILURE,
  payload: content
});
