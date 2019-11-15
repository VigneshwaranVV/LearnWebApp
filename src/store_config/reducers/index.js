import {
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAILURE,
  LOGIN_AUTH,
  LOGOUT,
  DELETE_USER_SUCCESS,
  REGISTER_USER_SUCCESS
} from "../actions/types";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

function authReducer(state = [], action) {
  switch (action.type) {
    case LOGIN_AUTH_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case LOGIN_AUTH:
      return { ...state, isLoading: true, isError: "" };
    case LOGIN_AUTH_FAILURE:
      return { ...state, ...action.payload, isLoading: false };
    case LOGOUT:
      return {}
      case REGISTER_USER_SUCCESS:
          return { ...state, ...action.payload,isLoading: false, isError: "" };
      case DELETE_USER_SUCCESS:
        return { ...state, ...action.payload,isLoading: false, isError: "" };
    default:
      return state;
  }
}

export default combineReducers({ authReducer, form: formReducer, ...{} });
