import React from "react";

const Button = props => {
    return (
        <button data-test="button" className="btn btn-primary form-control" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
