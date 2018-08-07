import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import sidebar from "./reducers/sidebarReducer";

export default createStore(
    combineReducers({
        sidebar
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);