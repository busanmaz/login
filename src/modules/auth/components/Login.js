import React from "react";
import PropTypes from "prop-types";

import classes from "./Login.module.scss";
import { core } from "../../";

const Login = props => {
    const { Input, Button } = core.components;

    return (
        <form className={classes.login} data-test="login">
            <div className="form-group">
                <Input
                    data-test="email"
                    inputProps={{
                        id: "email",
                        type: "email",
                        placeholder: "Enter Email"
                    }}
                    class="form-control"
                    onChange={props.onInputChange}
                />
            </div>
            <div className="form-group">
                <Input
                    data-test="password"
                    inputProps={{
                        id: "password",
                        type: "password",
                        placeholder: "Enter Password"
                    }}
                    class="form-control"
                    onChange={props.onInputChange}
                />
            </div>
            <div className="form-check">
                <Input
                    data-test="remember-me"
                    inputProps={{
                        id: "chkRememberMe",
                        type: "checkbox"
                    }}
                    class="form-check-input"
                    label="Remember me"
                    onChange={props.onCheckboxChange}
                />
            </div>
            <Button data-test="submit-button" class="form-control" onClick={props.onLoginClick}>
                Login
            </Button>
        </form>
    );
};

Login.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    onCheckboxChange: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired
};

export default Login;
