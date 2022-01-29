import { configureStore } from "@reduxjs/toolkit";
import loginToggleSlice from "../GlobalState/loginToggleSlice";
import userSlice from "../GlobalState/userSlice";

const store = configureStore({
  reducer: {
    loginToggleSlice: loginToggleSlice,
    userSlice: userSlice,
  },
});

export default store;
