import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cartSlice = createSlice({
  name: "cart",
  initialState: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : {
        products: [],
        quantity: 0,
        total: 0,
      },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      if (state.products.length === 0) state.quantity = 0;
      Cookies.set("cart", JSON.stringify({ ...state }));
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
      state.products.splice(action.payload.index, 1);
      if (state.products.length === 0 || state.products.length === null) {
        state.quantity = 0;
        state.total = 0;
      }
      if (state.total < 0) state.total = 0;
      Cookies.set("cart", JSON.stringify({ ...state }));
    },
    updateProduct: (state, action) => {
      console.log(action);
      state.total = state.total + action.payload.amount;
      state.products[action.payload.index] = action.payload.product;
      if (state.products.length === 0 || state.products.length === null) {
        state.quantity = 0;
        state.total = 0;
      }
      if (state.total < 0) state.total = 0;
      Cookies.set("cart", JSON.stringify({ ...state }));
    },
    clearCart: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      Cookies.set("cart", JSON.stringify({ ...state }));
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = cartSlice.actions;
export default cartSlice.reducer;
