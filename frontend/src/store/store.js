import { configureStore } from "@reduxjs/toolkit";
import User from "./userSlice";
const store = configureStore({ reducer: { user: User.reducer } });
export default store;
