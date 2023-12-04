import { createSlice } from "@reduxjs/toolkit";

const OrderHistorySlice = createSlice({
  name: "orderHistory",
  initialState: {
    washType: "",
    weight: 0,
    clothType: { clothName: "", quantity: 0 },
    pickupDate: "",
    deliveryDate: "",
    delivered: false,
    isShowOrderHistory:false,
  },
  reducers: {
    updateOrderHistoryDetails(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateOrderHistoryDetails } = OrderHistorySlice.actions;
export default OrderHistorySlice;
