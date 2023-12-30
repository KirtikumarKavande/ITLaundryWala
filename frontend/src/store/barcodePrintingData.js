import { createSlice } from "@reduxjs/toolkit";

const user = { barcodePrintingData: []};
const BarcodePrinting = createSlice({
  name: "barcodePrinting",
  initialState: user,
  reducers: {
    addBarcodePrinting(state, action) {
      state.barcodePrintingData = action.payload;
    },
  },
});

export const { addBarcodePrinting} = BarcodePrinting.actions;
export default BarcodePrinting;
