import { put, takeEvery } from "redux-saga/effects";

import { LOGIN_AUTH, REGISTER_USER, DELETE_USER } from "../actions/types";
import { loginAuthSucceeded, loginAuthFailed, registerUserSucceeded, registerUserFailed, deleteUserSucceeded } from "../actions";
import LoginService, { RegisterUserService, DeleteUserService } from "../.././services/loginService"
function* getLoginService(data) {
  const response = yield LoginService(data.payload);
  if (response && response.responseCode == 200) {
    yield put(loginAuthSucceeded({ isLoggedIn: true, isLoading: false, loginResponse: response }));
  }
  else {
    yield put(loginAuthFailed({ isLoggedIn: false, isLoading: false, loginResponse: response, isError: response.message }));
  }

}

function* getRegisterUserService(data) {
  const response = yield RegisterUserService(data.payload);
  if (response && response.responseCode == 200) {
    yield put(registerUserSucceeded({ isLoading: false, registerUserResponse: response }));
  }
  else {
    yield put(registerUserFailed({ isLoading: false, isError: response.message }));
  }
}

function* deleteUserService(data) {
  const response = yield DeleteUserService(data.payload);
  if (response && response.responseCode == 200) {
    yield put(deleteUserSucceeded({ isLoading: false, isLoggedIn: false, deleteUserResponse: response }));
  }
  else {
    yield put(deleteUserSucceeded({ isLoading: false, isError: response.message }));
  }
}


export function* loginAuthServices() {
  yield takeEvery([LOGIN_AUTH], getLoginService);
}

export function* registerUserServices() {
  yield takeEvery([REGISTER_USER], getRegisterUserService);
}

export function* deleteUserServices() {
  yield takeEvery([DELETE_USER], deleteUserService);
}