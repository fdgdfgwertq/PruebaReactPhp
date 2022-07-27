import React from "react";
import TipoClima from "../DataJson/DataTipoClima.json";
import AccesoHorarios from "../DataJson/DataAccesoHorarios.json";
import DiasHorarios from "../DataJson/DataDiasHorarios.json";
import TipoEstado from "../DataJson/DataTipoEstadoAtractivo.json";
import { helpCapitalize } from "../../../../../helpers/helpCapitalize";

const Clima = ({ values, errors, handleChange, handleBlur }) => {
  return (
    <div className="SectionDivType2">
      <h4>Clima</h4>
      <div className="SectionDivType1">
        <label htmlFor="ID_TIPO_CLIMA" className="LabelType1">
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
        <label htmlFor="TEMPERATURA" className="LabelType1">
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
    </div>
  );
};

const Horario = ({ values, handleChange }) => {
  return (
    <div className="SectionDivType2">
      <h4>Horario</h4>
      <div className="MainHorario">
        <div className="LabelType1 ContainerCheckbox">
          <span className="NameField">Acceso</span>
          <div>
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
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor={"ACCESO_HORARIOS" + NOMBRE}>
                    {helpCapitalize(NOMBRE)}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="LabelType1 ContainerCheckbox">
          <span className="NameField">Dias de visita</span>
          <div>
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
                    checked={values.DIAS_HORARIOS[NOMBRE]}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor={"DIAS_HORARIOS" + NOMBRE}>
                    {helpCapitalize(NOMBRE)}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tarifas = ({ values, handleChange }) => {
  return (
    <div className="SectionDivType2">
      <h4>Tarifas</h4>
      <div className="SectionDivType1">
        <label htmlFor="NINOS" className="LabelType1">
          <span className="NameField">Niños</span>
          <input
            type="text"
            name="NINOS"
            id="NINOS"
            onChange={(e) => handleChange(e)}
            value={values.NINOS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="ADULTOS" className="LabelType1">
          <span className="NameField">Adulto</span>
          <input
            type="text"
            name="ADULTOS"
            id="ADULTOS"
            onChange={(e) => handleChange(e)}
            value={values.ADULTOS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="ADULTO_MAYOR" className="LabelType1">
          <span className="NameField">Adulto mayor</span>
          <input
            type="text"
            name="ADULTO_MAYOR"
            id="ADULTO_MAYOR"
            onChange={(e) => handleChange(e)}
            value={values.ADULTO_MAYOR}
            autoComplete="off"
          />
        </label>
        <label htmlFor="EXTRANJEROS" className="LabelType1">
          <span className="NameField">Extranjeros</span>
          <input
            type="text"
            name="EXTRANJEROS"
            id="EXTRANJEROS"
            onChange={(e) => handleChange(e)}
            value={values.EXTRANJEROS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="ESTUDIANTES" className="LabelType1">
          <span className="NameField">Estudiantes</span>
          <input
            type="text"
            name="ESTUDIANTES"
            id="ESTUDIANTES"
            onChange={(e) => handleChange(e)}
            value={values.ESTUDIANTES}
            autoComplete="off"
          />
        </label>
        <label htmlFor="CITA_PREVIA" className="LabelType1">
          <span className="NameField">Cita previa</span>
          <input
            type="text"
            name="CITA_PREVIA"
            id="CITA_PREVIA"
            onChange={(e) => handleChange(e)}
            value={values.CITA_PREVIA}
            autoComplete="off"
          />
        </label>
        <label htmlFor="GENERAL" className="LabelType1">
          <span className="NameField">General</span>
          <input
            type="text"
            name="GENERAL"
            id="GENERAL"
            onChange={(e) => handleChange(e)}
            value={values.GENERAL}
            autoComplete="off"
          />
        </label>
      </div>
    </div>
  );
};

const EstadoAtractivo = ({ values, errors, handleChange, handleBlur }) => {
  return (
    <div className="SectionDivType2">
      <h4>Estado del atractivo</h4>
      <div>
        <label htmlFor="ID_TIPO_ESTADO" className="LabelType1">
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
    </div>
  );
};

const FormCaracteristicasRelevantes = ({
  values,
  errors,
  handleChange,
  handleChangeTarifas,
  handleBlur,
  handleChangeCheckbox,
}) => {
  return (
    <section>
      <h3>Caracteristicas relevantes</h3>
      <Clima
        values={values}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <Horario values={values} handleChange={handleChangeCheckbox} />
      <Tarifas values={values.TARIFAS} handleChange={handleChangeTarifas} />
      <EstadoAtractivo
        values={values}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </section>
  );
};

export default FormCaracteristicasRelevantes;
