import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({});

const store = configureStore({ reducer: { reducer } });

export default store;
