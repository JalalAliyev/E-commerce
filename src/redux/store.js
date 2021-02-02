import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware());

export default store;
