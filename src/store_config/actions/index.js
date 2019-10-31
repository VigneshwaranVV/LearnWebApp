import { LOGIN_AUTH, LOGIN_AUTH_SUCCESS } from "./types";

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
