import React from 'react';

const FormServiciosEspeciales = ({values,handleChange}) => {
  return (
    <section>
      <h3>
        Servicios para personas en condición de discapacidad o condiciones
        especiales
      </h3>
      <div className="SectionDivType1">
        <label htmlFor="ASCENSORES" className="LabelType1">
          <span className="NameField">Ascensores</span>
          <input
            type="text"
            name="ASCENSORES"
            id="ASCENSORES"
            onChange={(e) => handleChange(e)}
            value={values.ASCENSORES}
            autoComplete="off"
          />
        </label>
        <label htmlFor="RAMPAS" className="LabelType1">
          <span className="NameField">Rampas</span>
          <input
            type="text"
            name="RAMPAS"
            id="RAMPAS"
            onChange={(e) => handleChange(e)}
            value={values.RAMPAS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="DISCAP_AUDITIVA" className="LabelType1">
          <span className="NameField">Discapacidad auditiva</span>
          <input
            type="text"
            name="DISCAP_AUDITIVA"
            id="DISCAP_AUDITIVA"
            onChange={(e) => handleChange(e)}
            value={values.DISCAP_AUDITIVA}
            autoComplete="off"
          />
        </label>
        <label htmlFor="BANOS_ESPECIALES" className="LabelType1">
          <span className="NameField">Baños</span>
          <input
            type="text"
            name="BANOS"
            id="BANOS_ESPECIALES"
            onChange={(e) => handleChange(e)}
            value={values.BANOS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="MOVILIDAD" className="LabelType1">
          <span className="NameField">Movilidad</span>
          <input
            type="text"
            name="MOVILIDAD"
            id="MOVILIDAD"
            onChange={(e) => handleChange(e)}
            value={values.MOVILIDAD}
            autoComplete="off"
          />
        </label>
        <label htmlFor="OTROS_ESPECIALES" className="LabelType1">
          <span className="NameField">Otros</span>
          <input
            type="text"
            name="OTROS"
            id="OTROS_ESPECIALES"
            onChange={(e) => handleChange(e)}
            value={values.OTROS}
            autoComplete="off"
          />
        </label>
      </div>
    </section>
  );
}

export default FormServiciosEspeciales