import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productReducer, productsReducer } from "./reducers/productsReducer";
import { productsByCategoryReducer } from "./reducers/productsByCategoryReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  productsByCategory: productsByCategoryReducer,
  product: productReducer

});

export const store = createStore(rootReducer, applyMiddleware(thunk));

