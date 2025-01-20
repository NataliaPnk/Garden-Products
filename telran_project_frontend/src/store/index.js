import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productsReducer } from "./reducers/productsReducer";
import { productsByCategoryReducer } from "./reducers/productsByCategoryReducer";
import { cartReducer } from "./reducers/cartReducer";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { dailyDealReducer } from "./reducers/dailyDealReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  productsByCategory: productsByCategoryReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  favoriteProducts: favoriteReducer,
  deal: dailyDealReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

