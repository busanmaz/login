import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, attr) => {
    return wrapper.find(`[data-test="${attr}"]`);
};

export const checkProps = (component, expectedProps) => {
    const propError = checkPropTypes(
        component.props,
        expectedProps,
        "prop",
        component.name
    );

    expect(propError).toBeUndefined();
};
