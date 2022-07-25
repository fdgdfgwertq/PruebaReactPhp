import React from 'react'

const FormOtros = ({
  values,
  valuesRedes,
  handleChangeRedes,
  handleChange,
}) => {
  return (
    <>
      <div className="ContainerRedes">
        <label htmlFor="PAGINA_WEB_OTROS">
          <span className="NameField">Pagina web</span>
          <input
            type="text"
            name="PAGINA_WEB"
            id="PAGINA_WEB_OTROS"
            onChange={(e) => handleChangeRedes(e)}
            value={valuesRedes.PAGINA_WEB}
            autoComplete="off"
          />
        </label>
        <label htmlFor="FACEBOOK">
          <span className="NameField">Facebook</span>
          <input
            type="text"
            name="FACEBOOK"
            id="FACEBOOK"
            onChange={(e) => handleChangeRedes(e)}
            value={valuesRedes.FACEBOOK}
            autoComplete="off"
          />
        </label>
        <label htmlFor="TWITTER">
          <span className="NameField">Twitter</span>
          <input
            type="text"
            name="TWITTER"
            id="TWITTER"
            onChange={(e) => handleChangeRedes(e)}
            value={valuesRedes.TWITTER}
            autoComplete="off"
          />
        </label>
        <label htmlFor="INSTAGRAM">
          <span className="NameField">Instagram</span>
          <input
            type="text"
            name="INSTAGRAM"
            id="INSTAGRAM"
            onChange={(e) => handleChangeRedes(e)}
            value={valuesRedes.INSTAGRAM}
            autoComplete="off"
          />
        </label>
        <label htmlFor="OTRA_OTROS">
          <span className="NameField">Otra</span>
          <input
            type="text"
            name="OTRA"
            id="OTRA_OTROS"
            onChange={(e) => handleChangeRedes(e)}
            value={valuesRedes.OTRA}
            autoComplete="off"
          />
        </label>
      </div>
      <div className="CotainerReferencias">
        <label htmlFor="REF_BIBLIOGRAFICA">
          <span className="NameField">Referencias bibliograficas</span>
          <textarea
            name="REF_BIBLIOGRAFICA"
            id="REF_BIBLIOGRAFICA"
            onChange={(e) => handleChange(e)}
            value={values.REF_BIBLIOGRAFICA}
            autoComplete="off"
          />
        </label>
      </div>
      <div className="CotainerObservaciones">
        <label htmlFor="OBSERVACIONES">
          <span className="NameField">Observaciones</span>
          <textarea
            name="OBSERVACIONES"
            id="OBSERVACIONES"
            onChange={(e) => handleChange(e)}
            value={values.OBSERVACIONES}
            autoComplete="off"
          />
        </label>
      </div>
    </>
  );
};

export default FormOtros