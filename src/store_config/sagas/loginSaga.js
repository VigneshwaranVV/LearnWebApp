import { put, takeEvery } from "redux-saga/effects";

import { LOGIN_AUTH } from "../actions/types";
import { loginAuthSucceeded } from "../actions";

function* loginService() {
  yield put(loginAuthSucceeded({ isLoggedIn: true }));
}

export function* loginAuthServices() {
  yield takeEvery([LOGIN_AUTH], loginService);
}
