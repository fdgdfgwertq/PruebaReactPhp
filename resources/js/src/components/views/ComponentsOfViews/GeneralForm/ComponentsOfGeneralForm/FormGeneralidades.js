import React from 'react'
import GeneralFieldsGeneralidades from '../../GeneralFieldsGeneralidades';
import TipoAcceso from "../DataJson/DataTipoAcceso.json";

const ExtraDataGeneralidades = ({
  values,
  errors,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <label htmlFor="GEORREFERENCIACION">
        <span className="NameField">Georrefereniciación</span>
        <input
          type="text"
          name="GEORREFERENCIACION"
          id="GEORREFERENCIACION"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={values.GEORREFERENCIACION}
          autoComplete="off"
        />
        {errors.GEORREFERENCIACION && (
          <small className="errorMessage">{errors.GEORREFERENCIACION}</small>
        )}
      </label>
      <label htmlFor="ID_TIPO_ACCESO">
        <span className="NameField">Tipo de Acceso</span>
        <select
          name="ID_TIPO_ACCESO"
          id="ID_TIPO_ACCESO"
          value={values.ID_TIPO_ACCESO}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        >
          <option value="" disabled>
            Seleccione un tipo de acceso
          </option>
          {TipoAcceso.map((val) => {
            return (
              <option
                value={val["ID_TIPO_ACCESO"]}
                key={val["ID_TIPO_ACCESO"] + val["ACCESO"]}
              >
                {val["ACCESO"]}
              </option>
            );
          })}
        </select>
        {errors.ID_TIPO_ACCESO && (
          <small className="errorMessage">{errors.ID_TIPO_ACCESO}</small>
        )}
      </label>
      <label htmlFor="INDICACIONES_ACCESO">
        <span className="NameField">Indicaciones para el acceso:</span>
        <input
          type="text"
          name="INDICACIONES_ACCESO"
          id="INDICACIONES_ACCESO"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={values.INDICACIONES_ACCESO}
          autoComplete="off"
        />
        {errors.INDICACIONES_ACCESO && (
          <small className="errorMessage">{errors.INDICACIONES_ACCESO}</small>
        )}
      </label>
    </>
  );
};

const FormGeneralidades = ({
  values,
  errors,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <GeneralFieldsGeneralidades
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
      />
      <label htmlFor="CORREGIMIENTO_VEREDA_LOCALIDAD">
        <span className="NameField">Corregimiento, Vereda o Localidad</span>
        <input
          type="text"
          name="CORREGIMIENTO_VEREDA_LOCALIDAD"
          id="CORREGIMIENTO_VEREDA_LOCALIDAD"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          value={values.CORREGIMIENTO_VEREDA_LOCALIDAD}
          autoComplete="off"
        />
        {errors.CORREGIMIENTO_VEREDA_LOCALIDAD && (
          <small className="errorMessage">
            {errors.CORREGIMIENTO_VEREDA_LOCALIDAD}
          </small>
        )}
      </label>
      <ExtraDataGeneralidades
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
      />
    </>
  );
};

export default FormGeneralidades