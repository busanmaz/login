import { LOGIN, LOGIN_SUCCESS } from "../actionTypes";
import { loginSuccess, login } from "../actions";

describe("login actions", () => {
    test("login action runs without error", () => {
        const email = "qw@sd.com";
        const password = "12qwas";
        const expectedAction = { type: LOGIN, email, password };

        expect(login(email, password)).toEqual(expectedAction);
    });

    test("loginSuccess action runs withput error", () => {
        const token = "hsdbkhsjkhbdkshjbd";
        const expectedAction = { type: LOGIN_SUCCESS, token };

        expect(loginSuccess(token)).toEqual(expectedAction);
    });
});
