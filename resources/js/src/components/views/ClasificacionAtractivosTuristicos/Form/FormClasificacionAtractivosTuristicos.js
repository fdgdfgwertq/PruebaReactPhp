import { Formik } from 'formik';
import React from 'react';
import { helpCapitalize } from '../../../../helpers/helpCapitalize';
import { schemaErrorsFormCAT } from './schemaErrorsFormCAT';
import { StyleFormClasificacionAtractivosTuristicos } from './StyleFormClasificacionAtractivosTuristicos'
import TipoDeBien from "./DataJson/DataTipoDeBien.json";
import ButtonPage from '../../../common/ButtonPage';

const initialValues = {
  "ID_TIPO_BIEN" : ""
}

const FormClasificacionAtractivosTuristicos = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaErrorsFormCAT}
      onSubmit={async (values) => {
        console.log("submit", values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <StyleFormClasificacionAtractivosTuristicos onSubmit={handleSubmit}>
          <div className="MainInformation">
            <p>
              <span className="titleInformation">Departamento: </span>
              <span className="information">{helpCapitalize("Bogota")}</span>
            </p>
            <p>
              <span className="titleInformation">Municipio: </span>
              <span className="information">{helpCapitalize("Bogota")}</span>
            </p>
            <label htmlFor="ID_TIPO_BIEN">
              <span className="titleInformation">Tipo de bien</span>
              <select
                name="ID_TIPO_BIEN"
                id="ID_TIPO_BIEN"
                value={values.ID_TIPO_BIEN}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" disabled>
                  Seleccione un tipo de bien
                </option>
                {TipoDeBien.map((val) => {
                  return (
                    <option
                      value={val["id_tipos_bien"]}
                      key={val["id_tipos_bien"] + val["tipo_bien"]}
                    >
                      {helpCapitalize(val["tipo_bien"])}
                    </option>
                  );
                })}
              </select>
              {touched.ID_TIPO_BIEN && errors.ID_TIPO_BIEN && (
                <small className="errorMessage">{errors.ID_TIPO_BIEN}</small>
              )}
            </label>
          </div>
          <div className="ContainerButtons">
            <ButtonPage type="submit" colorButton="blue">
              Clasificar
            </ButtonPage>
            <ButtonPage type="submit" colorButton="green">
              Siguiente
            </ButtonPage>
          </div>
        </StyleFormClasificacionAtractivosTuristicos>
      )}
    </Formik>
  );
}

export default FormClasificacionAtractivosTuristicos