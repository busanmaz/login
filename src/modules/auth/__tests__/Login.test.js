import React from "react";
import { shallow } from "enzyme";

import Login from "../components/Login";
import { checkProps, findByTestAttr } from "../../../test/testUtils";

const onInputChangeMock = jest.fn();
const onCheckboxChangeMock = jest.fn();
const onLoginClickMock = jest.fn();

const defaultProps = {
    onInputChange: onInputChangeMock,
    onCheckboxChange: onCheckboxChangeMock,
    onLoginClick: onLoginClickMock
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };

    const wrapper = shallow(<Login {...setupProps} />);
    return wrapper;
};

describe("<Login />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    })

    test("renders without error", () => {
        const login = findByTestAttr(wrapper, "login");

        expect(login.length).toBe(1);
    });

    test("renders email Input component properly", () => {
        const email = findByTestAttr(wrapper, "email");

        expect(email.length).toBe(1);
    });

    test("renders password Input component properly", () => {
        const password = findByTestAttr(wrapper, "password");

        expect(password.length).toBe(1);
    });

    test("renders remember me Input component properly", () => {
        const rememberMe = findByTestAttr(wrapper, "remember-me");

        expect(rememberMe.length).toBe(1);
    });

    test("renders submit Button component properly", () => {
        const submitButton = findByTestAttr(wrapper, "submit-button");

        expect(submitButton.length).toBe(1);
    });

    test("renders with expected props", () => {
        checkProps(Login, defaultProps);
    });

    describe("Login mock functions", () => {
        test("when email changes call onInputChange", () => {
            const event = { target: { value: "" } };

            const email = findByTestAttr(wrapper, "email");

            email.simulate('change', event);

            expect(onInputChangeMock).toHaveBeenCalledWith(event);
        });

        test("when rememberMe changes call onCheckboxChange", () => {
            const event = { target: { checked: true } };

            const rememberMe = findByTestAttr(wrapper, "remember-me");

            rememberMe.simulate('change', event);

            expect(onCheckboxChangeMock).toHaveBeenCalledWith(event);
        });

        test("when login clicks call onLoginClick", () => {
            const submit = findByTestAttr(wrapper, "submit-button");

            submit.simulate('click');

            expect(onLoginClickMock).toHaveBeenCalled();
        });
    });
});
