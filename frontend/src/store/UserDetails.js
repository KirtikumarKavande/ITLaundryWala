const { createSlice } = require("@reduxjs/toolkit");

const ExistingUserDetails = createSlice({
  initialState: { customerId: 0, name: "", mobileNumber: null },
  name: "user",
  reducers: {
    updateExistingUserDetails(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateExistingUserDetails } = ExistingUserDetails.actions;

export default ExistingUserDetails;
