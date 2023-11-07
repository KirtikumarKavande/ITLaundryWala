import { createSlice } from "@reduxjs/toolkit";

const clothDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    washType: "",
    weight: 0,
    amount: 0,
    clothType: { clothName: "", quantity: 0 },
    pickupDate: "",
    deliveryDate: "",
  },
  reducers: {
    updateClothDetails(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateClothDetails } = clothDetailsSlice.actions;
export default clothDetailsSlice;
