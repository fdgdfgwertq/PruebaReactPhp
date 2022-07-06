import React from "react";
import ButtonPage from "../../../common/ButtonPage";
import { ContainerForm } from "./StylesFormLogin";
import { useSelector, useDispatch } from "react-redux";
import {
  changeInputValue,
  submitForm,
} from "../../../../features/auth/authSlice";

const FormLogin = () => {
  const dispath = useDispatch();
  const { correo, clave } = useSelector((state) => state.auth.values);

  const handleChange = (e) => {
    dispath(changeInputValue({ value: e.target.value, name: e.target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(submitForm());
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <label htmlFor="correo">
        <span>Email</span>
        <input
          type="email"
          name="correo"
          id="correo"
          placeholder="Example@gmail.com"
          autoComplete="off"
          required
          value={correo}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="clave">
        <span>Contraseña</span>
        <input
          type="password"
          name="clave"
          id="clave"
          placeholder="Tu contraseña"
          required
          value={clave}
          onChange={handleChange}
        />
      </label>
      <ButtonPage type="submit" colorButton="white">
        LOGIN
      </ButtonPage>
    </ContainerForm>
  );
};

export default FormLogin;
