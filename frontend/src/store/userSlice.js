import { createSlice } from "@reduxjs/toolkit";

const authInfo = {
  token: !!localStorage.getItem("jwtToken")
    ? localStorage.getItem("jwtToken")
    : "",
  isLoggedIn: !!localStorage.getItem("activeUser")
  ? localStorage.getItem("activeUser")
  : "",
};
const User = createSlice({
  name: "profile",
  initialState: authInfo,
  reducers: {
    getToken(state, action) {
      state.token = action.payload;
    },
    userStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { getToken } = User.actions;
export const {userStatus}=User.actions
export default User;
