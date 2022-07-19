import { configureStore } from "@reduxjs/toolkit";
import dataProfileSlice from "../features/dataProfileSlice";
import mainLayoutSlice from "../features/mainLayoutSlice";
import modalsSlice from "../features/modalsSlice";
import updateRecordSlice from "../features/updateRecorSlice";

export const store = configureStore({
  reducer: {
    mainLayoutSlice : mainLayoutSlice,
    modalsSlice : modalsSlice,
    dataProfileSlice : dataProfileSlice,
    updateRecordSlice : updateRecordSlice
  },
});