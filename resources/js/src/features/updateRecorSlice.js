import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prueba: {
    msg: 'a'
  },
};

export const updateRecordSlice = createSlice({
  name: "updateRecordSlice",
  initialState: initialState,
  reducers: {
    storeDataPrueba: (state, action) => {
      console.log(action.payload);
      state.prueba = action.payload;
    },
  },
});

export const { storeDataPrueba } = updateRecordSlice.actions;
export default updateRecordSlice.reducer;
