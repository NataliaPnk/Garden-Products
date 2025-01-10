import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productsReducer } from "./reducers/productsReducer";
import { productsByCategoryReducer } from "./reducers/productsByCategoryReducer";
import { cartReducer } from "./reducers/cartReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  productsByCategory: productsByCategoryReducer,
  product: productsReducer,
  cart: cartReducer,
  favoriteProducts: favoriteReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

