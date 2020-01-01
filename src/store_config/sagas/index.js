import { loginAuthServices ,registerUserServices, deleteUserServices, updateUserServices} from "./loginSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
      fork(loginAuthServices),
      fork(registerUserServices),
      fork(updateUserServices),
      fork(deleteUserServices)

    ]);
  }