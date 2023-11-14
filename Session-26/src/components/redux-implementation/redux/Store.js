import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

import textReducer from "../reducer/textReducer";
import productsReducer from "../reducer/productsReducer";

var combined_Reducers = combineReducers({
  textReducer,
  productsReducer,
});

let myStore = legacy_createStore(combined_Reducers, applyMiddleware(logger));

export default myStore;
