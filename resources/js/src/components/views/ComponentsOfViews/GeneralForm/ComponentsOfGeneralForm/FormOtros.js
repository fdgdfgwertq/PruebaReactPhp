import React from 'react'

const FormOtros = ({
  values,
  valuesRedes,
  handleChangeRedes,
  handleChange,
}) => {
  return (
    <section>
      <h3>Otros</h3>
      <div className="SectionDivType2">
        <h4>Redes sociales</h4>
        <div className="SectionDivType1">
          <label htmlFor="PAGINA_WEB_OTROS" className="LabelType1">
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
          <label htmlFor="FACEBOOK" className="LabelType1">
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
          <label htmlFor="TWITTER" className="LabelType1">
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
          <label htmlFor="INSTAGRAM" className="LabelType1">
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
          <label htmlFor="OTRA_OTROS" className="LabelType1">
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
      </div>
      <div className="SectionDivType2">
        <h4>Referencias bibliograficas</h4>
        <div>
          <label htmlFor="REF_BIBLIOGRAFICA" className="LabelType1">
            <textarea
              name="REF_BIBLIOGRAFICA"
              id="REF_BIBLIOGRAFICA"
              onChange={(e) => handleChange(e)}
              value={values.REF_BIBLIOGRAFICA}
              rows={3}
            />
          </label>
        </div>
      </div>
      <div className="SectionDivType2">
        <h4>Observaciones</h4>
        <div>
          <label htmlFor="OBSERVACIONES" className="LabelType1">
            <textarea
              name="OBSERVACIONES"
              id="OBSERVACIONES"
              onChange={(e) => handleChange(e)}
              value={values.OBSERVACIONES}
              rows={3}
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default FormOtros