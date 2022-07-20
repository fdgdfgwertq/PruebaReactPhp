import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataLista: {},
  message: ''
};

export const dataListaPreliminarSlice = createSlice({
  name: "dataListaPreliminarSlice",
  initialState: initialState,
  reducers: {
    setDataLista: (state, action) => {
      state.dataLista = action.payload;
    },
    setMessageLista: (state,action) => {
      state.message = action.payload;
    }
  },
});

export const { setDataLista, setMessageLista } = dataListaPreliminarSlice.actions;
export default dataListaPreliminarSlice.reducer;
