import React from 'react';

const FormPromocionAtractivo = ({values,handleChange}) => {
  return (
    <>
      <label htmlFor="FOLLETOS_GUIAS">
        <span className="NameField">Folletos y guias</span>
        <input
          type="text"
          name="FOLLETOS_GUIAS"
          id="FOLLETOS_GUIAS"
          onChange={(e) => handleChange(e)}
          value={values.FOLLETOS_GUIAS}
          autoComplete="off"
        />
      </label>
      <label htmlFor="PUBLICACIONES">
        <span className="NameField">Publicaciones</span>
        <input
          type="text"
          name="PUBLICACIONES"
          id="PUBLICACIONES"
          onChange={(e) => handleChange(e)}
          value={values.PUBLICACIONES}
          autoComplete="off"
        />
      </label>
      <label htmlFor="TRIPADVISOR">
        <span className="NameField">TripAdvisor</span>
        <input
          type="text"
          name="TRIPADVISOR"
          id="TRIPADVISOR"
          onChange={(e) => handleChange(e)}
          value={values.TRIPADVISOR}
          autoComplete="off"
        />
      </label>
      <label htmlFor="CTRAVEL">
        <span className="NameField">Colombia travel</span>
        <input
          type="text"
          name="CTRAVEL"
          id="CTRAVEL"
          onChange={(e) => handleChange(e)}
          value={values.CTRAVEL}
          autoComplete="off"
        />
      </label>
      <label htmlFor="GOOGLEM">
        <span className="NameField">Google Maps</span>
        <input
          type="text"
          name="GOOGLEM"
          id="GOOGLEM"
          onChange={(e) => handleChange(e)}
          value={values.GOOGLEM}
          autoComplete="off"
        />
      </label>
      <label htmlFor="PAGINA_WEB_PROMOCION">
        <span className="NameField">Pagina web</span>
        <input
          type="text"
          name="PAGINA_WEB"
          id="PAGINA_WEB_PROMOCION"
          onChange={(e) => handleChange(e)}
          value={values.PAGINA_WEB}
          autoComplete="off"
        />
      </label>
      <label htmlFor="YOUTUBE_PROMOCION">
        <span className="NameField">Youtube</span>
        <input
          type="text"
          name="YOUTUBE"
          id="YOUTUBE_PROMOCION"
          onChange={(e) => handleChange(e)}
          value={values.YOUTUBE}
          autoComplete="off"
        />
      </label>
      <label htmlFor="OTROS_PROMOCION">
        <span className="NameField">Otros</span>
        <input
          type="text"
          name="OTROS"
          id="OTROS_PROMOCION"
          onChange={(e) => handleChange(e)}
          value={values.OTROS}
          autoComplete="off"
        />
      </label>
    </>
  );
}

export default FormPromocionAtractivo;