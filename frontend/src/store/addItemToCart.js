import { createSlice } from "@reduxjs/toolkit";

const user = { cart: []};
const Cart = createSlice({
  name: "cart",
  initialState: user,
  reducers: {
    addItemToCart(state, action) {
      state.cart = [...state.cart,{...action.payload,qty:1}];
    },
  },
});

export const { addItemToCart } = Cart.actions;
export default Cart;
