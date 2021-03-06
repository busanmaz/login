import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";

export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            rootReducer,
            initialState,
            applyMiddleware(sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run
    };
}
