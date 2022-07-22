import { configureStore } from "@reduxjs/toolkit";
import dataListaPreliminarSlice from "../features/dataListaPreliminarSlice";
import dataProfileSlice from "../features/dataProfileSlice";
import mainLayoutSlice from "../features/mainLayoutSlice";
import modalsSlice from "../features/modalsSlice";

export const store = configureStore({
  reducer: {
    mainLayoutSlice : mainLayoutSlice,
    modalsSlice : modalsSlice,
    dataProfileSlice : dataProfileSlice,
    dataListaPreliminarSlice : dataListaPreliminarSlice,
  },
});