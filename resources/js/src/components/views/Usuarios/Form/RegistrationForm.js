import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonPage from "../../../common/ButtonPage";
import { handleFunctionsUsuarios } from "./handleFunctionsUsuarios";
import { initialValuesUsuarios } from "./initialValuesUsuarios";
import TipoUsuario from "./DataJson/DataTipoUsuario.json";

const RegistrationForm = () => {
  const [values, setValues] = useState(initialValuesUsuarios);
  const [errors, setErrors] = useState(initialValuesUsuarios);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleBlur, handleChange, handleSubmit } = handleFunctionsUsuarios({
    dispatch,
    errors,
    navigate,
    setErrors,
    setValues,
    values,
  });

  return (
    <form className="FormStyleR" onSubmit={(e) => handleSubmit(e)}>
      <div className="ContainerFields">
        <label htmlFor="PRIMER_NOMBRE" >
          <span className="NameField">Primer nombre</span>
          <input
            type="text"
            name="PRIMER_NOMBRE"
            id="PRIMER_NOMBRE"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.PRIMER_NOMBRE}
            autoComplete="off"
          />
          {errors.PRIMER_NOMBRE && (
            <small className="errorMessage">{errors.PRIMER_NOMBRE}</small>
          )}
        </label>
        <label htmlFor="SEGUNDO_NOMBRE" >
          <span className="NameField">Segundo nombre</span>
          <input
            type="text"
            name="SEGUNDO_NOMBRE"
            id="SEGUNDO_NOMBRE"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.SEGUNDO_NOMBRE}
            autoComplete="off"
          />
          {errors.SEGUNDO_NOMBRE && (
            <small className="errorMessage">{errors.SEGUNDO_NOMBRE}</small>
          )}
        </label>
        <label htmlFor="PRIMER_APELLIDO" >
          <span className="NameField">Primer apellido</span>
          <input
            type="text"
            name="PRIMER_APELLIDO"
            id="PRIMER_APELLIDO"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.PRIMER_APELLIDO}
            autoComplete="off"
          />
          {errors.PRIMER_APELLIDO && (
            <small className="errorMessage">{errors.PRIMER_APELLIDO}</small>
          )}
        </label>
        <label htmlFor="SEGUNDO_APELLIDO" >
          <span className="NameField">Segundo apellido</span>
          <input
            type="text"
            name="SEGUNDO_APELLIDO"
            id="SEGUNDO_APELLIDO"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.SEGUNDO_APELLIDO}
            autoComplete="off"
          />
          {errors.SEGUNDO_APELLIDO && (
            <small className="errorMessage">{errors.SEGUNDO_APELLIDO}</small>
          )}
        </label>
        <label htmlFor="USUARIO" >
          <span className="NameField">Usuario</span>
          <input
            type="text"
            name="USUARIO"
            id="USUARIO"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.USUARIO}
            autoComplete="off"
          />
          {errors.USUARIO && (
            <small className="errorMessage">{errors.USUARIO}</small>
          )}
        </label>
        <label htmlFor="CORREO" >
          <span className="NameField">Correo</span>
          <input
            type="email"
            name="CORREO"
            id="CORREO"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.CORREO}
            autoComplete="off"
          />
          {errors.CORREO && (
            <small className="errorMessage">{errors.CORREO}</small>
          )}
        </label>
        <label htmlFor="CLAVE" >
          <span className="NameField">Contraseña</span>
          <input
            type="password"
            name="CLAVE"
            id="CLAVE"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.CLAVE}
          />
          {errors.CLAVE && (
            <small className="errorMessage">{errors.CLAVE}</small>
          )}
        </label>
        <label htmlFor="CONFIRM_CLAVE" >
          <span className="NameField">Confimar contraseña</span>
          <input
            type="password"
            name="CONFIRM_CLAVE"
            id="CONFIRM_CLAVE"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.CONFIRM_CLAVE}
          />
          {errors.CONFIRM_CLAVE && (
            <small className="errorMessage">{errors.CONFIRM_CLAVE}</small>
          )}
        </label>
        <label htmlFor="ID_TIPO_USUARIO">
          <span className="NameField">Tipo de usuario</span>
          <select
            name="ID_TIPO_USUARIO"
            id="ID_TIPO_USUARIO"
            value={values.ID_TIPO_USUARIO}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          >
            <option value="" disabled>
              Selecione un tipo de usuario
            </option>
            {TipoUsuario.map((val) => {
              return (
                <option
                  value={val.ID_TIPO_USUARIO}
                  key={val.ID_TIPO_USUARIO + val.TIPO}
                >
                  {val.TIPO}
                </option>
              );
            })}
          </select>
          {errors.ID_TIPO_USUARIO && (
            <small className="errorMessage">{errors.ID_TIPO_USUARIO}</small>
          )}
        </label>
      </div>
      <ButtonPage type="submit" colorButton="green" className="ButtonRegistrar">
        Registrar
      </ButtonPage>
    </form>
  );
};

export default RegistrationForm;
