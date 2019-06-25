import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import Config from "Config";
import { LOGIN } from "./actionTypes";
import { loginSuccess } from "./actions";

export function* login(action) {
    try {
        const postData = {
            email: action.email,
            password: action.password
        };

        const response = yield call(
            axios.post,
            Config.apiUrl + "/login",
            postData
        );

        yield put(loginSuccess(response.data.token));
    } catch (error) {
        console.log(error, error.response);
    }
}

export function* watchAuth() {
    yield takeEvery(LOGIN, login);
}
