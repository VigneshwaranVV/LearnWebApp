import { put, takeEvery } from "redux-saga/effects";

import { LOGIN_AUTH, REGISTER_USER, DELETE_USER, UPDATE_USER } from "../actions/types";
import { loginAuthSucceeded, loginAuthFailed, registerUserSucceeded, registerUserFailed, deleteUserSucceeded, updateUserSucceeded } from "../actions";
import LoginService, { RegisterUserService, DeleteUserService,UpdateUserService } from "../.././services/loginService"
function* getLoginService(data) {
  const response = yield LoginService(data.payload);
  if (response && response.responseCode === 200) {
    yield put(loginAuthSucceeded({ isLoggedIn: true, isLoading: false, loginResponse: response }));
  }
  else {
    yield put(loginAuthFailed({ isLoggedIn: false, isLoading: false, loginResponse: response, isError: response.message }));
  }

}

function* getRegisterUserService(data) {
  const response = yield RegisterUserService(data.payload);
  if (response && response.responseCode === 200) {
    yield put(registerUserSucceeded({ isLoading: false, registerUserResponse: response }));
  }
  else {
    yield put(registerUserFailed({ isLoading: false, registerUserResponse: response }));
  }
}

function* deleteUserService(data) {
  const response = yield DeleteUserService(data.payload);
  if (response && response.responseCode === 200) {
    yield put(deleteUserSucceeded({ isLoading: false, isLoggedIn: false, deleteUserResponse: response }));
  }
  else {
    yield put(deleteUserSucceeded({ isLoading: false, isError: response.message }));
  }
}

function* updateUserService(data) {
  const response = yield UpdateUserService(data.payload);
  if (response && response.responseCode === 200) {
    yield put(updateUserSucceeded({ isLoading: false,  updateUserResponse: response }));
  }
  else {
    yield put(updateUserSucceeded({ isLoading: false, isError: response.message }));
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

export function* updateUserServices() {
  yield takeEvery([UPDATE_USER], updateUserService);
}