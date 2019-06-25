import React from "react";
import { shallow } from "enzyme";

import Login from "../components/Login";
import loginContainer from "../components/loginContainer";
import { configureStore } from "../../../base";

const loginMock = jest.fn();

const setup = (appState = {}, componentState = {}, props = {}) => {
    const store = configureStore(appState);

    const ConnectedLogin = loginContainer(Login);
    const wrapper = shallow(<ConnectedLogin store={store} {...props} />)
        .dive()
        .dive();

    wrapper.setState(componentState);

    return wrapper;
};

describe("loginContainer", () => {
    test("onLoginClick", () => {
        const componentState = { email: "qq@ww.com", password: "1234" };
        const wrapper = setup(undefined, componentState);

        const event = {
            preventDefault: () => {}
        };

        wrapper.setProps({ login: loginMock });

        wrapper.instance().onLoginClick(event);

        expect(loginMock).toHaveBeenCalledWith(
            componentState.email,
            componentState.password
        );
    });

    test("state after 'onInputChange' called", () => {
        const componentState = { };
        const inputId = "email";
        const wrapper = setup(undefined, componentState);

        const event = {
            target: {
                value: "test"
            }
        };

        wrapper.instance().onInputChange(event, inputId);
        wrapper.update();

        expect(wrapper.state(inputId)).toBe(event.target.value);
    });

    test("state after 'onCheckboxChange' called", () => {
        const componentState = { };
        const inputId = "rememberMe";
        const wrapper = setup(undefined, componentState);

        const event = {
            target: {
                checked: true
            }
        };

        wrapper.instance().onCheckboxChange(event, inputId);
        wrapper.update();

        expect(wrapper.state(inputId)).toBe(event.target.checked);
    });
});

describe("redux properties", () => {
    test("has token piece of state as prop", () => {
        const wrapper = setup({ auth: { token: "asdfg" } });

        expect(wrapper.instance().props.auth.token).toBe("asdfg");
    });

    test("has login action creator as prop", () => {
        const wrapper = setup();

        expect(wrapper.instance().props.login).toBeInstanceOf(Function);
    });
});
