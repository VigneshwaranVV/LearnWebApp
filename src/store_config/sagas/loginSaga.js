import { put, takeEvery } from "redux-saga/effects";

import { LOGIN_AUTH } from "../actions/types";
import { loginAuthSucceeded, loginAuthFailed } from "../actions";
import LoginService from '../.././services/loginService'
function* getLoginService(data) {
  const response = yield LoginService(data.payload);
  if (response && response.responseCode == 200) {
    yield put(loginAuthSucceeded({ isLoggedIn: true, isLoading: false, loginResponse: response }));
  }
  else {
    yield put(loginAuthFailed({ isLoggedIn: false, isLoading: false, isError: response.message }));
  }

}

export function* loginAuthServices() {
  yield takeEvery([LOGIN_AUTH], getLoginService);
}
