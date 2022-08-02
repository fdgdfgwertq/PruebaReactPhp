import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataLista: []
};

export const dataListaPreliminarSlice = createSlice({
  name: "dataListaPreliminarSlice",
  initialState: initialState,
  reducers: {
    setDataLista: (state, action) => {
      state.dataLista = action.payload;
    }
  },
});

export const { setDataLista } = dataListaPreliminarSlice.actions;
export default dataListaPreliminarSlice.reducer;
