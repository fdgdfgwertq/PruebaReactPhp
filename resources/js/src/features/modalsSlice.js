import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalLayoutState: false,
};

export const modalsSlice = createSlice({
  name: "modalsSlice",
  initialState: initialState,
  reducers: {
    closeModalLayoutState: (state) => {state.modalLayoutState = false},
    openModalLayoutState: (state) => {state.modalLayoutState = true},
  },
});

export const { closeModalLayoutState, openModalLayoutState } = modalsSlice.actions;
export default modalsSlice.reducer;
