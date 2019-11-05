import { LOGIN_AUTH, LOGIN_AUTH_SUCCESS, LOGOUT, LOGIN_AUTH_FAILURE } from "./types";

export const loginAuth = ({ username, password }) => ({
  type: LOGIN_AUTH,
  payload: {
    username: username,
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

