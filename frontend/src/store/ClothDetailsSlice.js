import { createSlice } from "@reduxjs/toolkit";

const clothDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    washType: "",
    weight: 0,
    clothType: { clothName: "", quantity: 0 },
    pickupDate: "",
    deliveryDate: "",
    delivered: false,
    amountForPerKg:null,
    amountForPerPeice: null
  },
  reducers: {
    updateClothDetails(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateClothDetails } = clothDetailsSlice.actions;
export default clothDetailsSlice;
