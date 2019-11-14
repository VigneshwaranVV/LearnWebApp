import { loginAuthServices ,registerUserServices} from "./loginSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
      fork(loginAuthServices),
      fork(registerUserServices)
    ]);
  }