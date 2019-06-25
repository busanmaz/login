import { LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
    token: null
};

const loginSuccess = (state, action) => {
    return {
        ...state,
        token: action.token
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return loginSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
