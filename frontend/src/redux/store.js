import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducders";

const reducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({ reducer: { reducer } });

export default store;
