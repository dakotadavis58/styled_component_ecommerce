import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
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
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = cartSlice.actions;
export default cartSlice.reducer;
