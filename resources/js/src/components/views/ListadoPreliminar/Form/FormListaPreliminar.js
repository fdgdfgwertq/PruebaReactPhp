import React, { useState } from 'react';
import Fuentes from './DataJson/DataFuentes.json';
import { handleFunctionsLP } from "./handleFunctionsLP";
import { initialErrors } from './initialValuesFormListaPreliminar';
import { StyleFormListaPreliminar } from './StyleFormListaPreliminar';
import ButtonPage from '../../../common/ButtonPage';
import LoaderForm from '../../../common/LoaderForm';
import { useNavigate } from 'react-router-dom';
import GeneralFieldsGeneralidades from '../../ComponentsOfViews/GeneralFieldsGeneralidades';

const FormListaPreliminar = ({ initialValues, nameButton, who }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const { handleBlur, handleChange, handleSubmit } = handleFunctionsLP(
    values,
    setValues,
    errors,
    setErrors,
    setLoad,
    navigate
  );

  return (
    <StyleFormListaPreliminar
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(who);
      }}
    >
      <div className="ContainerFields">
        <GeneralFieldsGeneralidades
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values}
        />
        <label htmlFor="ID_FUENTE">
          <span className="NameField">Fuente</span>
          <select
            name="ID_FUENTE"
            id="ID_FUENTE"
            value={values.ID_FUENTE}
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
          {errors.ID_FUENTE && (
            <small className="errorMessage">{errors.ID_FUENTE}</small>
          )}
        </label>
      </div>
      {load ? (
        <LoaderForm colorLoad="#15012e" />
      ) : (
        <ButtonPage type="submit" colorButton="#15012e">
          {nameButton}
        </ButtonPage>
      )}
    </StyleFormListaPreliminar>
  );
};

export default FormListaPreliminar