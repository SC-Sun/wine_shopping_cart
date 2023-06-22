import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const loadStore = () => {
  if (localStorage.getItem("cart")) {
    const local = JSON.parse(localStorage.getItem("cart"));
    const INITIAL_STATE = {
      cart: {
        cartItems: local,
      },
    };
    return INITIAL_STATE;
  } else {
    return [];
  }
};

const middleware = [thunk];
const applyM = applyMiddleware(middleware);

const store = configureStore({ reducer, applyM, preloadedState: loadStore() });

export default store;
