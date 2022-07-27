import React from 'react';

const Actividades = ({ values, handleChange }) => {
  return (
    <div className="SectionDivType2">
      <h4>Actividades</h4>
      <div className="SectionDivType1">
        <label htmlFor="CULTURALES" className="LabelType1">
          <span className="NameField">Culturales</span>
          <input
            type="text"
            name="CULTURALES"
            id="CULTURALES"
            onChange={(e) => handleChange(e)}
            value={values.CULTURALES}
            autoComplete="off"
          />
        </label>
        <label htmlFor="ARTISTICAS" className="LabelType1">
          <span className="NameField">Artisticas</span>
          <input
            type="text"
            name="ARTISTICAS"
            id="ARTISTICAS"
            onChange={(e) => handleChange(e)}
            value={values.ARTISTICAS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="FISICAS" className="LabelType1">
          <span className="NameField">Fisicas</span>
          <input
            type="text"
            name="FISICAS"
            id="FISICAS"
            onChange={(e) => handleChange(e)}
            value={values.FISICAS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="RECREATIVAS" className="LabelType1">
          <span className="NameField">Recreativas</span>
          <input
            type="text"
            name="RECREATIVAS"
            id="RECREATIVAS"
            onChange={(e) => handleChange(e)}
            value={values.RECREATIVAS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="OTROS_ACTIVIDADES" className="LabelType1">
          <span className="NameField">Otros</span>
          <input
            type="text"
            name="OTROS"
            id="OTROS_ACTIVIDADES"
            onChange={(e) => handleChange(e)}
            value={values.OTROS}
            autoComplete="off"
          />
        </label>
      </div>
    </div>
  );
};

const Servicios = ({ values, handleChange }) => {
  return (
    <div className="SectionDivType2">
      <h4>Servicios que se ofrecen en el lugar</h4>
      <div className="SectionDivType1">
        <label htmlFor="TIENDAS" className="LabelType1">
          <span className="NameField">Tiendas</span>
          <input
            type="text"
            name="TIENDAS"
            id="TIENDAS"
            onChange={(e) => handleChange(e)}
            value={values.TIENDAS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="GUIAS" className="LabelType1">
          <span className="NameField">Guias</span>
          <input
            type="text"
            name="GUIAS"
            id="GUIAS"
            onChange={(e) => handleChange(e)}
            value={values.GUIAS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="BANOS_SERVICIOS" className="LabelType1">
          <span className="NameField">Baños</span>
          <input
            type="text"
            name="BANOS"
            id="BANOS_SERVICIOS"
            onChange={(e) => handleChange(e)}
            value={values.BANOS}
            autoComplete="off"
          />
        </label>
        <label htmlFor="RESTAURANTES" className="LabelType1">
          <span className="NameField">Restaurantes</span>
          <input
            type="text"
            name="RESTAURANTES"
            id="RESTAURANTES"
            onChange={(e) => handleChange(e)}
            value={values.RESTAURANTES}
            autoComplete="off"
          />
        </label>
        <label htmlFor="PARQUEADERO" className="LabelType1">
          <span className="NameField">Parqueadero</span>
          <input
            type="text"
            name="PARQUEADERO"
            id="PARQUEADERO"
            onChange={(e) => handleChange(e)}
            value={values.PARQUEADERO}
            autoComplete="off"
          />
        </label>
        <label htmlFor="ALOJAMIENTO" className="LabelType1">
          <span className="NameField">Alojamiento</span>
          <input
            type="text"
            name="ALOJAMIENTO"
            id="ALOJAMIENTO"
            onChange={(e) => handleChange(e)}
            value={values.ALOJAMIENTO}
            autoComplete="off"
          />
        </label>
        <label htmlFor="OTROS_SERVICIOS" className="LabelType1">
          <span className="NameField">Otros</span>
          <input
            type="text"
            name="OTROS"
            id="OTROS_SERVICIOS"
            onChange={(e) => handleChange(e)}
            value={values.OTROS}
            autoComplete="off"
          />
        </label>
      </div>
    </div>
  );
};

const FormActividadesServicios = ({
  values,
  handleChangeActividades,
  handleChangeServicios,
}) => {
  return (
    <section>
      <h3>Actividades y servicios</h3>
      <Actividades
        values={values.ACTIVIDADES}
        handleChange={handleChangeActividades}
      />
      <Servicios
        values={values.SERVICIOS}
        handleChange={handleChangeServicios}
      />
    </section>
  );
};

export default FormActividadesServicios;