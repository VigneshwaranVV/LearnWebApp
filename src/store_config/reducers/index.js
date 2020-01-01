import {
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAILURE,
  LOGIN_AUTH,
  LOGOUT,
  DELETE_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  CLEAR_AUTH_STATUSMESSAGE,
  UPDATE_USER_SUCCESS
} from "../actions/types";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

function authReducer(state = [], action) {
  switch (action.type) {
    case LOGIN_AUTH_SUCCESS:
      state["formData"]=action.payload.loginResponse.userData;
      return {
        ...state, ...action.payload, isLoading: false, statusMessage: {
          message: action.payload.loginResponse.message,
          type: "success"
        }
      };
    case LOGIN_AUTH:
      return { ...state, isLoading: true, isError: "" };
    case LOGIN_AUTH_FAILURE:
      return {
        ...state, ...action.payload, isLoading: false, statusMessage: {
          message: action.payload.loginResponse.message,
          type: "failure"
        }
      };
    case LOGOUT:
      return {}
    case CLEAR_AUTH_STATUSMESSAGE:
      return { ...state, statusMessage: { message: "", type: "" } }
    case REGISTER_USER_SUCCESS:
      return {
        ...state, ...action.payload, isLoading: false, isError: "", statusMessage: {
          message: action.payload.registerUserResponse.message,
          type: "success"
        }
      };
      case UPDATE_USER_SUCCESS:
        state["formData"]=action.payload.updateUserResponse.data;
        return {
          ...state, ...action.payload, isLoading: false, isError: "", statusMessage: {
            message: action.payload.updateUserResponse.message,
            type: "success"
          }
        };
    case DELETE_USER_SUCCESS:
      return { ...state, ...action.payload, isLoading: false, isError: "" };
    default:
      return state;
  }
}

export default combineReducers({ authReducer, form: formReducer, ...{} });
