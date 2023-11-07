import { createSlice } from "@reduxjs/toolkit";

const user = { userData: {} };
const UserDetails = createSlice({
  name: "userDetails",
  initialState: user,
  reducers: {
    addUserdetails(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { addUserdetails } = UserDetails.actions;
export default UserDetails;
