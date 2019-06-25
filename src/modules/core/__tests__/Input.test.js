import React from "react";
import { shallow } from "enzyme";

import Input from "../components/Input";
import { findByTestAttr } from "../../../test/testUtils";

const onChangeMock = jest.fn();

const defaultProps = {
    onChange: onChangeMock
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };

    const wrapper = shallow(<Input {...setupProps} />);
    return wrapper;
};

describe("<Input />", () => {
    let wrapper;
    const inputProps = { inputProps: { id: "testInput" } };

    beforeEach(() => {
        wrapper = setup(inputProps);
    });

    test("renders without error", () => {
        const button = findByTestAttr(wrapper, "input");

        expect(button.length).toBe(1);
    });

    test("onChange function called", () => {
        const event = undefined;

        const input = findByTestAttr(wrapper, "input");

        input.simulate("change");

        expect(onChangeMock).toHaveBeenCalledWith(
            event,
            inputProps.inputProps.id
        );
    });

    describe("input label rendering", () => {
        test("render checkbox label when checkbox type passes", () => {
            wrapper = setup({ inputProps: { id: "testInput", type: "checkbox" } });

            const inputLabel = findByTestAttr(wrapper, "input-label");

            expect(inputLabel.length).toBe(1);
        });

        test("do not render checkbox label when checkbox type does not pass", () => {
            wrapper = setup({ inputProps: { id: "testInput" } });

            const inputLabel = findByTestAttr(wrapper, "input-label");

            expect(inputLabel.length).toBe(0);
        });
    });

    describe("input class prop", () => {
        test("when class prop passes", () => {
            const inputClass = {...inputProps, class: "test try"};

            wrapper = setup(inputClass);

            const input = findByTestAttr(wrapper, "input");

            expect(input.prop("className")).toBe(inputClass.class);
        });

        test("when class prop not passes", () => {
            const inputClass = {...inputProps};

            wrapper = setup(inputClass);

            const input = findByTestAttr(wrapper, "input");

            expect(input.prop("className")).toBe("");
        });
    });    
});
