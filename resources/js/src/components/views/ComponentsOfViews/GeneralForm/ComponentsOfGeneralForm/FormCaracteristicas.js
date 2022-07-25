import React from 'react';

const FormCaracteristicas = ({
  values,
  errors,
  handleChange,
  handleChangeFile,
  handleBlur,
}) => {
  return (
    <>
      <label htmlFor="DESCRIPCION_CARACTERISTICAS">
        <span className="NameField">Descripción</span>
        <textarea
          name="DESCRIPCION"
          id="DESCRIPCION_CARACTERISTICAS"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={values.DESCRIPCION}
          autoComplete="off"
        />
        {errors.DESCRIPCION && (
          <small className="errorMessage">{errors.DESCRIPCION}</small>
        )}
      </label>
      <div className="ContainerInputFile">
        <span className="NameField">Imágen 1 </span>
        <input
          type="file"
          name="IMAGEN1"
          onChange={(e) => handleChangeFile(e)}
        />
        {errors.IMAGEN1 && (
          <small className="errorMessage">{errors.IMAGEN1}</small>
        )}
      </div>
      <div className="ContainerInputFile">
        <span className="NameField">Imágen 2 </span>
        <input
          type="file"
          name="IMAGEN2"
          onChange={(e) => handleChangeFile(e)}
        />
        {errors.IMAGEN2 && (
          <small className="errorMessage">{errors.IMAGEN2}</small>
        )}
      </div>
      <label htmlFor="FUENTE">
        <span className="NameField">Fuente de las imagenes</span>
        <input
          type="text"
          name="FUENTE"
          id="FUENTE"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={values.FUENTE}
          autoComplete="off"
        />
        {errors.FUENTE && (
          <small className="errorMessage">{errors.FUENTE}</small>
        )}
      </label>
    </>
  );
};

export default FormCaracteristicas;