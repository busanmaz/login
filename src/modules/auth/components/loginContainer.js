import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const loginContainer = WrappedComponent => {
    class UnconnectedComponent extends Component {
        state = {};

        onLoginClick = event => {
            event.preventDefault(); 

            this.props.login(this.state.email, this.state.password);
        };

        onInputChange = (event, inputId) => {
            this.setState({ [inputId]: event.target.value });
        };

        onCheckboxChange = (event, inputId) => {
            this.setState({ [inputId]: event.target.checked });
        };

        render() {
            return (
                <WrappedComponent
                    onLoginClick={this.onLoginClick}
                    onInputChange={this.onInputChange}
                    onCheckboxChange={this.onCheckboxChange}
                />
            );
        }
    }

    const mapStateToProps = ({ auth }) => {
        return { auth };
    };

    const mapDispatchToProps = dispatch => {
        return bindActionCreators(actions, dispatch);
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(UnconnectedComponent);
};

export default loginContainer;
