import React from "react";
import { shallow } from "enzyme";

import Button from "../components/Button";
import { findByTestAttr } from "../../../test/testUtils";

const onClickMock = jest.fn();

const defaultProps = {
    onClick: onClickMock
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };

    const wrapper = shallow(<Button {...setupProps} />);
    return wrapper;
};

describe("<Button />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test("renders without error", () => {
        const button = findByTestAttr(wrapper, "button");

        expect(button.length).toBe(1);
    });
    
    test("onClick button", () => {
        const button = findByTestAttr(wrapper, "button");

        button.simulate("click");

        expect(onClickMock).toHaveBeenCalled();
    });
});
