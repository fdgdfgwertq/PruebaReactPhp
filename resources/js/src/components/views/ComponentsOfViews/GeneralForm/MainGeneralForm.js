import React, { useState } from "react";
import ButtonPage from "../../../common/ButtonPage";
import FormActividadesServicios from "./ComponentsOfGeneralForm/FormActividadesServicios";
import FormCaracteristicas from "./ComponentsOfGeneralForm/FormCaracteristicas";
import FormCaracteristicasRelevantes from "./ComponentsOfGeneralForm/FormCaracteristicasRelevantes";
import FormGeneralidades from "./ComponentsOfGeneralForm/FormGeneralidades";
import FormOtros from "./ComponentsOfGeneralForm/FormOtros";
import FormPromocionAtractivo from "./ComponentsOfGeneralForm/FormPromocionAtractivo";
import FormPuntajesValoracion from "./ComponentsOfGeneralForm/FormPuntajesValoracion";
import FormServiciosEspeciales from "./ComponentsOfGeneralForm/FormServiciosEspeciales";
import { handleFunctionsGeneralForm } from "./handleFunctionsGeneralForm";
import { StyleMainGeneralForm } from "./StyleMainGeneralForm";

const MainGeneralForm = ({ initialValues, initialErrors, who }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [load, setLoad] = useState(false);

  const {
    handleBlur,
    handleChangeCheckbox,
    handleSubmit,
    handleChangeGeneralidades,
    handleChangeAdminPropietario,
    handleChangeCaracteristicas,
    handleChangeCodigo,
    handleChangeFile,
    handleChangePuntajes,
    handleChangeCalidadMaterial,
    handleChangeCaracteristicasRelevantes,
    handleChangeTarifas,
    handleChangeActividades,
    handleChangeServicios,
    handleChangePromocion,
    handleChangeServiciosEspeciales,
    handleChangeRedes,
    handleChangeOtros,
  } = handleFunctionsGeneralForm({ values, errors, setValues, setErrors });

  return (
    <StyleMainGeneralForm onSubmit={(e) => handleSubmit(e)}>
      <FormGeneralidades
        values={values.GENERALIDADES}
        valuesCodigo={values.CARACTERISTICAS.CODIGOS}
        handleChange={handleChangeGeneralidades}
        handleChangeAdminPropietario={handleChangeAdminPropietario}
        handleBlur={handleBlur}
        errors={errors}
      />
      <FormCaracteristicas
        values={values.CARACTERISTICAS}
        handleChange={handleChangeCaracteristicas}
        handleChangeFile={handleChangeFile}
        handleBlur={handleBlur}
        errors={errors}
        handleChangeCodigo={handleChangeCodigo}
        valuesCodigo={values.CARACTERISTICAS.CODIGOS}
      />
      <FormPuntajesValoracion
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChangePuntajes}
        handleChangeCalidadMaterial={handleChangeCalidadMaterial}
        values={values.PUNTAJES_VALORACION}
        who={who}
      />
      <FormCaracteristicasRelevantes
        values={values.CARACTERISTICAS_RELEVANTES}
        handleChange={handleChangeCaracteristicasRelevantes}
        handleChangeCheckbox={handleChangeCheckbox}
        handleChangeTarifas={handleChangeTarifas}
        handleBlur={handleBlur}
        errors={errors}
      />
      <FormActividadesServicios
        values={values.ACTIVIDADES_SERVICIOS}
        handleChangeActividades={handleChangeActividades}
        handleChangeServicios={handleChangeServicios}
      />
      <FormPromocionAtractivo
        values={values.PROMOCION}
        handleChange={handleChangePromocion}
      />
      <FormServiciosEspeciales
        values={values.SERVICIOS_ESPECIALES}
        handleChange={handleChangeServiciosEspeciales}
      />
      <FormOtros
        values={values.OTROS}
        valuesRedes={values.OTROS.REDES}
        handleChange={handleChangeOtros}
        handleChangeRedes={handleChangeRedes}
      />
      <ButtonPage type="submit" colorButton="#15012e">
        Enviar
      </ButtonPage>
    </StyleMainGeneralForm>
  );
};

export default MainGeneralForm;
