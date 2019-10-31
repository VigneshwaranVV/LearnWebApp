import {
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAILURE,
  LOGIN_AUTH
} from "../actions/types";
import { combineReducers } from "redux";

function authReducer(state = [], action) {
  console.log("reee", action);
  switch (action.type) {
    case LOGIN_AUTH_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case LOGIN_AUTH:
      return { ...state, isLoading: true };
    case LOGIN_AUTH_FAILURE:
      return { ...state, ...action.payload, isLoading: false };
    default:
      return state;
  }
}

export default combineReducers({ authReducer, ...{} });
