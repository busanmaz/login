import { combineReducers } from "redux";

import { auth } from "../modules";

const rootReducer = combineReducers({
    [auth.constants.NAME]: auth.reducer
});

export default rootReducer;
