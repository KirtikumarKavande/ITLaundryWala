import { configureStore } from "@reduxjs/toolkit";
import User from "./userSlice";
import UserDetails from "./newUserDetails";
import clothDetailsSlice from "./ClothDetailsSlice";
const store = configureStore({
  reducer: {
    user: User.reducer,
    userDetails: UserDetails.reducer,
    clothDetails: clothDetailsSlice.reducer,
  },
});
export default store;
