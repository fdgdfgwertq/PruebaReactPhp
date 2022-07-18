import React, { useState } from 'react';
import Departamentos from './DataJson/DataDepartamentos.json';
import Municipios from './DataJson/DataMunicipio.json';
import Fuentes from './DataJson/DataFuentes.json';
import { handleFunctions } from './handleFunctions';
import { initialValues } from './initialValuesFormListaPreliminar';
import { StyleFormListaPreliminar } from './StyleFormListaPreliminar';
import ButtonPage from '../../../common/ButtonPage';

const FormListaPreliminar = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const { handleBlur, handleChange, handleSubmit } = handleFunctions(
    values,
    setValues,
    errors,
    setErrors
  );

  return (
    <StyleFormListaPreliminar
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <div className="ContainerFields">
        <label htmlFor="ID_DEPARTAMENTOS">
          <span className="NameField">Departamento</span>
          <select
            name="ID_DEPARTAMENTOS"
            id="ID_DEPARTAMENTOS"
            value={values.ID_DEPARTAMENTOS}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
          >
            <option value="" disabled>
              Seleccione un departamento
            </option>
            {Departamentos.map((val) => {
              return (
                <option
                  value={val["Código"]}
                  key={val["Código"] + val["Nombre"]}
                >
                  {val["Nombre"][0].toUpperCase() +
                    val["Nombre"].slice(1).toLocaleLowerCase()}
                </option>
              );
            })}
          </select>
          {errors.ID_DEPARTAMENTOS && (
            <small className="errorMessage">{errors.ID_DEPARTAMENTOS}</small>
          )}
        </label>
        <label htmlFor="ID_MUNICIPIOS">
          <span className="NameField">Municipio</span>
          <select
            name="ID_MUNICIPIOS"
            id="ID_MUNICIPIOS"
            value={values.ID_MUNICIPIOS}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            disabled={values.ID_DEPARTAMENTOS ? false : true}
          >
            <option value="" disabled>
              {values.ID_DEPARTAMENTOS
                ? "Seleccione un municipio"
                : "Primero seleccione departamento"}
            </option>
            {values.ID_DEPARTAMENTOS &&
              Municipios[values.ID_DEPARTAMENTOS].map((val) => {
                return (
                  <option
                    value={val["Id_Municipio"]}
                    key={val["Id_Municipio"] + val["Nombre"]}
                  >
                    {val["Nombre"][0].toUpperCase() +
                      val["Nombre"].slice(1).toLocaleLowerCase()}
                  </option>
                );
              })}
          </select>
          {errors.ID_MUNICIPIOS && (
            <small className="errorMessage">{errors.ID_MUNICIPIOS}</small>
          )}
        </label>
        <label htmlFor="NOMBRE">
          <span className="NameField">Nombre</span>
          <input
            type="text"
            name="NOMBRE"
            id="NOMBRE"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.NOMBRE}
            autoComplete="off"
          />
          {errors.NOMBRE && (
            <small className="errorMessage">{errors.NOMBRE}</small>
          )}
        </label>
        <label htmlFor="UBICACION">
          <span className="NameField">Ubicación</span>
          <input
            type="text"
            name="UBICACION"
            id="UBICACION"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.UBICACION}
            autoComplete="off"
          />
          {errors.UBICACION && (
            <small className="errorMessage">{errors.UBICACION}</small>
          )}
        </label>
        <label htmlFor="ID_FUENTES">
          <span className="NameField">Fuente</span>
          <select
            name="ID_FUENTES"
            id="ID_FUENTES"
            value={values.ID_FUENTES}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          >
            <option value="" disabled>
              Selecione una fuente
            </option>
            {Fuentes.map((val) => {
              return (
                <option
                  value={val.id_tipos_bien}
                  key={val.id_tipos_bien + val.tipo_bien}
                >
                  {val.tipo_bien[0].toUpperCase() +
                    val.tipo_bien.slice(1).toLocaleLowerCase()}
                </option>
              );
            })}
          </select>
          {errors.ID_FUENTES && (
            <small className="errorMessage">{errors.ID_FUENTES}</small>
          )}
        </label>
      </div>
      <ButtonPage type="submit" colorButton="#15012e">
        Enviar
      </ButtonPage>
    </StyleFormListaPreliminar>
  );
}

export default FormListaPreliminar