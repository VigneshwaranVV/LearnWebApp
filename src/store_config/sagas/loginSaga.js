import { put, takeEvery } from "redux-saga/effects";

import { LOGIN_AUTH, REGISTER_USER } from "../actions/types";
import { loginAuthSucceeded, loginAuthFailed, registerUserSucceeded, registerUserFailed } from "../actions";
import LoginService, { RegisterUserService } from "../.././services/loginService"
function* getLoginService(data) {
  const response = yield LoginService(data.payload);
  if (response && response.responseCode == 200) {
    yield put(loginAuthSucceeded({ isLoggedIn: true, isLoading: false, loginResponse: response }));
  }
  else {
    yield put(loginAuthFailed({ isLoggedIn: false, isLoading: false, isError: response.message }));
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


export function* loginAuthServices() {
  yield takeEvery([LOGIN_AUTH], getLoginService);
}

export function* registerUserServices() {
  yield takeEvery([REGISTER_USER], getRegisterUserService);
}
