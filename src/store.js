import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./redux/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
