import React from 'react';
import TipoClima from "../DataJson/DataTipoClima.json";
import AccesoHorarios from "../DataJson/DataAccesoHorarios.json";
import DiasHorarios from "../DataJson/DataDiasHorarios.json";
import TipoEstado from "../DataJson/DataTipoEstadoAtractivo.json"

const FormCaracteristicasRelevantes = ({
  values,
  errors,
  handleChange,
  handleBlur,
  handleChangeCheckbox,
}) => {
  return (
    <>
      <div className="ContainerClima">
        <span className="NameContainer">Clima</span>
        <label htmlFor="ID_TIPO_CLIMA">
          <span className="NameField">Tipo de clima</span>
          <select
            name="ID_TIPO_CLIMA"
            id="ID_TIPO_CLIMA"
            value={values.ID_TIPO_CLIMA}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
          >
            <option value="" disabled>
              Seleccione un tipo de clima
            </option>
            {TipoClima.map((val) => {
              return (
                <option
                  value={val["ID_TIPO_CLIMA"]}
                  key={val["ID_TIPO_CLIMA"] + val["TIPO_CLIMA"]}
                >
                  {val["TIPO_CLIMA"]}
                </option>
              );
            })}
          </select>
          {errors.ID_TIPO_CLIMA && (
            <small className="errorMessage">{errors.ID_TIPO_CLIMA}</small>
          )}
        </label>
        <label htmlFor="TEMPERATURA">
          <span className="NameField">Temperatura</span>
          <input
            type="text"
            name="TEMPERATURA"
            id="TEMPERATURA"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={values.TEMPERATURA}
            autoComplete="off"
          />
          {errors.TEMPERATURA && (
            <small className="errorMessage">{errors.TEMPERATURA}</small>
          )}
        </label>
      </div>
      <div className="ContainerHorario">
        <span className="NameContainer">Horarios</span>
        <div className="ContainerAcceso">
          <span className="NameContainer">Acceso</span>
          {AccesoHorarios.map(({ NOMBRE }) => {
            return (
              <div
                className="ContainerOptionAcceso"
                key={"ACCESO_HORARIOS" + NOMBRE}
              >
                <input
                  type="checkbox"
                  id={"ACCESO_HORARIOS" + NOMBRE}
                  name="ACCESO_HORARIOS"
                  value={NOMBRE}
                  checked={values.ACCESO_HORARIOS[NOMBRE]}
                  onChange={(e) => handleChangeCheckbox(e)}
                />
                <label htmlFor={"ACCESO_HORARIOS" + NOMBRE}>{NOMBRE}</label>
              </div>
            );
          })}
        </div>
        <div className="ContainerDias">
          <span className="NameContainer">Dias</span>
          {DiasHorarios.map(({ NOMBRE }) => {
            return (
              <div
                className="ContainerOptionAcceso"
                key={"DIAS_HORARIOS" + NOMBRE}
              >
                <input
                  type="checkbox"
                  id={"DIAS_HORARIOS" + NOMBRE}
                  name="DIAS_HORARIOS"
                  value={NOMBRE}
                  checked={values.ACCESO_HORARIOS[NOMBRE]}
                  onChange={(e) => handleChangeCheckbox(e)}
                />
                <label htmlFor={"DIAS_HORARIOS" + NOMBRE}>{NOMBRE}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ContainerTarifas"></div>
      <div className="ContainerEstadoAtractivo">
        <label htmlFor="ID_TIPO_ESTADO">
          <span className="NameField">Estado del atractivo</span>
          <select
            name="ID_TIPO_ESTADO"
            id="ID_TIPO_ESTADO"
            value={values.ID_TIPO_ESTADO}
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
          >
            <option value="" disabled>
              Seleccione un tipo de estado
            </option>
            {TipoEstado.map((val) => {
              return (
                <option
                  value={val["ID_TIPO_ESTADO"]}
                  key={val["ID_TIPO_ESTADO"] + val["TIPO_ESTADO"]}
                >
                  {val["TIPO_ESTADO"]}
                </option>
              );
            })}
          </select>
          {errors.ID_TIPO_ESTADO && (
            <small className="errorMessage">{errors.ID_TIPO_ESTADO}</small>
          )}
        </label>
      </div>
    </>
  );
};

export default FormCaracteristicasRelevantes;