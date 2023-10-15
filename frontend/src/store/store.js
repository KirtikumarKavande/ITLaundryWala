import { configureStore } from "@reduxjs/toolkit";
import User from "./userSlice";
import UserDetails from "./newUserDetails";
const store = configureStore({ reducer: { user: User.reducer,userDetails:UserDetails.reducer } });
export default store;
