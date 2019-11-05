import {
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAILURE,
  LOGIN_AUTH,
  LOGOUT
} from "../actions/types";
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

function authReducer(state = [], action) {
  switch (action.type) {
    case LOGIN_AUTH_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case LOGIN_AUTH:
      return { ...state, isLoading: true };
    case LOGIN_AUTH_FAILURE:
      return { ...state, ...action.payload, isLoading: false };
    case LOGOUT:
      return {}
    default:
      return state;
  }
}

export default combineReducers({ authReducer, form: formReducer, ...{} });
