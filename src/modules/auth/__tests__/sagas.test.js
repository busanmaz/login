import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import moxios from "moxios";

import Config from "Config";
import { watchAuth, login } from "../sagas";
import { LOGIN } from "../actionTypes";
import { loginSuccess } from "../actions";

const genWatchAuth = watchAuth();

describe("auth sagas", () => {
    test("watchAuth saga", () => {
        expect(genWatchAuth.next().value).toEqual(takeEvery(LOGIN, login));
        expect(genWatchAuth.next().done).toBe(true);
    });

    test("login saga", async () => {
        const action = {
            email: "qq@ss.com",
            password: "1234"
        };

        const genLogin = login(action);

        expect(genLogin.next().value).toEqual(
            call(axios.post, Config.apiUrl + "/login", action)
        );

        expect(genLogin.next({ data: { token: "1234" } }).value).toEqual(
            put(loginSuccess("1234"))
        );

        expect(genLogin.next().done).toBe(true);
    });
});
