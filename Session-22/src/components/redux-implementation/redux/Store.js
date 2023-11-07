import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import textReducer from "../reducer/textReducer";

let myStore = legacy_createStore(textReducer, applyMiddleware(logger));

export default myStore;
