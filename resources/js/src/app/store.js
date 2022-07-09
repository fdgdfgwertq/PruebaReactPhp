import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import mainLayoutSlice from "../features/mainLayoutSlice";
import modalsSlice from "../features/modalsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mainLayoutSlice : mainLayoutSlice,
    modalsSlice : modalsSlice
  },
});