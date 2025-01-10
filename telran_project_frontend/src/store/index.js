import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productsReducer } from "./reducers/productsReducer";
import { productsByCategoryReducer } from "./reducers/productsByCategoryReducer";
import { cartReducer } from "./reducers/cartReducer";
import { singleProductReducer } from "./reducers/singleProductReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  productsByCategory: productsByCategoryReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

