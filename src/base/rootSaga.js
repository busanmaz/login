import { fork } from "redux-saga/effects";

import { auth } from "../modules";

export function* rootSaga() {
    yield fork(auth.sagas.watchAuth);
}
