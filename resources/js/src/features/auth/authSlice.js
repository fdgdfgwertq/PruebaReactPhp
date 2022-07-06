import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    correo: "",
    clave: "",
  },
  sesion: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeInputValue: (state, action) => {
      state.values = {
        ...state.values,
        [action.payload.name]: action.payload.value,
      };
    },
    submitForm: (state) => {
      console.log(state.values.clave);
    },
  },
});

export const { changeInputValue, submitForm } = authSlice.actions;
export default authSlice.reducer;
