import { configureStore } from "@reduxjs/toolkit";
import User from "./userSlice";
import UserDetails from "./newUserDetails";
import clothDetailsSlice from "./ClothDetailsSlice";
import ExistingUserDetails from "./UserDetails";
import OrderHistorySlice from "./orderHistorySlice";
import BarcodePrinting from "./barcodePrintingData";
import Cart from "./addItemToCart";
const store = configureStore({
  reducer: {
    user: User.reducer,
    userDetails: UserDetails.reducer,
    existingUserDetails: ExistingUserDetails.reducer,
    clothDetails: clothDetailsSlice.reducer,
    orderHistoryDetails:OrderHistorySlice.reducer,
    BarcodePrinting:BarcodePrinting.reducer,
    cart:Cart.reducer
  },
});
export default store;
