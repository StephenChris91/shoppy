import { createSlice } from "@reduxjs/toolkit";
import commerce from "../Utils/libs/commerce";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const itemInCart = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { ADD_TO_CART } = cartSlice.actions;
