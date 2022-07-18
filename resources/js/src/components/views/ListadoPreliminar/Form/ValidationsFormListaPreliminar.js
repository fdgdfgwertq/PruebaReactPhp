import * as yup from "yup";

let schema = yup.object({
  ID_DEPARTAMENTOS: yup.string().required("valor requerido"),
  ID_MUNICIPIOS: yup.string().required("valor requerido"),
  NOMBRE: yup.string().required("valor requerido"),
  UBICACION: yup.string().required("valor requerido"),
  ID_FUENTES: yup.string().required("valor requerido"),
});

export const ValidationsFormListaPreliminar = async (values) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {state:true}
  } catch (err) {
    let errors = {};
    err.inner.forEach(val => {
      errors[val.path] = val.message;
    });
    return { state: false, errors };
  }
}

export const UnitValidationsListaPreliminar = async (value) => {
  const UnitValidation = schema.pick(Object.keys(value));
  try {
    await UnitValidation.validate(value);
    return { state: true };
  } catch (err) {
    return { state: false, errors: {[err.path] : err.message} };
  }
}