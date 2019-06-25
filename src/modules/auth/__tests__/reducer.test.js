import reducer from "../reducer";
import { LOGIN_SUCCESS } from "../actionTypes";

describe("auth reducer", () => {
    test("update state when 'loginSuccess' called", () => {
        const token = "ajuiatsfdiutausdvb";

        expect(reducer(undefined, { type: LOGIN_SUCCESS, token })).toEqual({token});
    });
});
