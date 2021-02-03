import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

const widdleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...widdleware));

export const persistor = persistStore(store);
