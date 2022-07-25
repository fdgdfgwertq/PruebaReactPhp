import React, { useState } from 'react';
import FormActividadesServicios from './ComponentsOfGeneralForm/FormActividadesServicios';
import FormCaracteristicas from './ComponentsOfGeneralForm/FormCaracteristicas';
import FormCaracteristicasRelevantes from './ComponentsOfGeneralForm/FormCaracteristicasRelevantes';
import FormGeneralidades from './ComponentsOfGeneralForm/FormGeneralidades';
import FormOtros from './ComponentsOfGeneralForm/FormOtros';
import FormPromocionAtractivo from './ComponentsOfGeneralForm/FormPromocionAtractivo';
import FormServiciosEspeciales from './ComponentsOfGeneralForm/FormServiciosEspeciales';
import { handleFunctionsGeneralForm } from './handleFunctionsGeneralForm';
import { StyleMainGeneralForm } from './StyleMainGeneralForm';

const MainGeneralForm = ({ initialValues, initialErrors }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [load, setLoad] = useState(false);

  const {
    handleBlur,
    handleChangeCheckbox,
    handleSubmit,
    handleChangeGeneralidades,
    handleChangeCaracteristicas,
    handleChangeFile,
    handleChangeCaracteristicasRelevantes,
    handleChangeActividades,
    handleChangeServicios,
    handleChangePromocion,
    handleChangeServiciosEspeciales,
    handleChangeRedes,
    handleChangeOtros,
  } = handleFunctionsGeneralForm({ values, errors, setValues, setErrors });

  return (
    <StyleMainGeneralForm onSubmit={(e) => handleSubmit(e)}>
      <div>
        <FormGeneralidades
          values={values.GENERALIDADES}
          handleChange={handleChangeGeneralidades}
          handleBlur={handleBlur}
          errors={errors}
        />
      </div>
      <br />
      <div>
        <FormCaracteristicas
          values={values.CARACTERISTICAS}
          handleChange={handleChangeCaracteristicas}
          handleChangeFile={handleChangeFile}
          handleBlur={handleBlur}
          errors={errors}
        />
      </div>
      <br />
      <FormCaracteristicasRelevantes
        values={values.CARACTERISTICAS_RELEVANTES}
        handleChange={handleChangeCaracteristicasRelevantes}
        handleChangeCheckbox={handleChangeCheckbox}
        handleBlur={handleBlur}
        errors={errors}
      />
      <br />
      <FormActividadesServicios
        values={values.ACTIVIDADES_SERVICIOS}
        handleChangeActividades={handleChangeActividades}
        handleChangeServicios={handleChangeServicios}
      />
      <br />
      <div>
        <FormPromocionAtractivo
          values={values.PROMOCION}
          handleChange={handleChangePromocion}
        />
      </div>
      <br />
      <div>
        <FormServiciosEspeciales
          values={values.SERVICIOS_ESPECIALES}
          handleChange={handleChangeServiciosEspeciales}
        />
      </div>
      <br />
      <FormOtros
        values={values.OTROS}
        valuesRedes={values.OTROS.REDES}
        handleChange={handleChangeOtros}
        handleChangeRedes={handleChangeRedes}
      />
      <button type="submit">enviar</button>
    </StyleMainGeneralForm>
  );
};

export default MainGeneralForm;