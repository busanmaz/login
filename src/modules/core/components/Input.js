import React from "react";

const Input = props => {
    const classes = props.class ? props.class.split(" ") : [];

    const onChange = event => {
        props.onChange(event, props.inputProps.id);
    };

    return (
        <>
            <input
                data-test="input"
                className={classes.join(" ")}
                onChange={onChange}
                {...props.inputProps}
            />
            {props.inputProps.type === "checkbox" ? (
                <label
                    data-test="input-label"
                    className="form-check-label"
                    htmlFor={props.inputProps.id}
                >
                    {props.label}
                </label>
            ) : null}
        </>
    );
};

export default Input;
