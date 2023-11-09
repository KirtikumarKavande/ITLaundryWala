import { configureStore } from "@reduxjs/toolkit";
import User from "./userSlice";
import UserDetails from "./newUserDetails";
import clothDetailsSlice from "./ClothDetailsSlice";
import ExistingUserDetails from "./UserDetails";
import OrderHistorySlice from "./orderHistorySlice";
const store = configureStore({
  reducer: {
    user: User.reducer,
    userDetails: UserDetails.reducer,
    existingUserDetails: ExistingUserDetails.reducer,
    clothDetails: clothDetailsSlice.reducer,
    orderHistoryDetails:OrderHistorySlice.reducer
  },
});
export default store;
