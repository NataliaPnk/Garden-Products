import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
