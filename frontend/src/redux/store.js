import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducders";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const store = configureStore({ reducer });

export default store;
