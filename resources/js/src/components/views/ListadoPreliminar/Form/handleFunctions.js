import { initialErrors, initialValues } from "./initialValuesFormListaPreliminar";
import { fetchCreateListaPreliminar, fetchUpdateListaPreliminar } from "./logicFormListaPreliminar";
import { UnitValidationsListaPreliminar, ValidationsFormListaPreliminar } from "./ValidationsFormListaPreliminar";
import toast from "react-hot-toast";

export const handleFunctions = (
  values,
  setValues,
  errors,
  setErrors,
  setLoad,
  navigate
) => {
  const ValidateField = async (name, value) => {
    let FieldValue = { [name]: value };
    const response = await UnitValidationsListaPreliminar(FieldValue);
    return response;
  };

  const handleChange = async (e) => {
    let response;
    if (e.target.name === "ID_DEPARTAMENTOS" && values.ID_MUNICIPIOS) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
        ID_MUNICIPIOS: "",
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    response = await ValidateField(e.target.name, e.target.value);
    if (response.state) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmitCreate = async () => {
    setLoad(true);
    const response = await ValidationsFormListaPreliminar(values);
    if (!response.state) {
      setLoad(false);
      return setErrors({ ...initialErrors, ...response.errors });
    }
    const responseServe = await fetchCreateListaPreliminar(values);
    if (!responseServe.state) {
      if (responseServe.errors)
        setErrors({ ...initialErrors, ...responseServe.errors });
      if (responseServe.message) toast.error(responseServe.message);
      return setLoad(false);
    }
    setLoad(false);
    setValues({ ...initialValues });
    toast.success("El resgistro se almaceno correctamente");
  };

  const handleSubmitUpdate = async () => {
    setLoad(true);
    const response = await ValidationsFormListaPreliminar(values);
    if (!response.state) {
      setLoad(false);
      return setErrors({ ...initialErrors, ...response.errors });
    }
    const responseServe = await fetchUpdateListaPreliminar(values);
    if (!responseServe.state) {
      if (responseServe.errors)
        setErrors({ ...initialErrors, ...responseServe.errors });
      if (responseServe.message) toast.error(responseServe.message);
      return setLoad(false);
    }
    setLoad(false);
    toast.success("El resgistro se actualizo correctamente");
    navigate('/listado-preliminar',{replace:true});
  };

  const handleBlur = async (e) => {
    const response = await ValidateField(e.target.name, e.target.value);
    if (!response.state) return setErrors({ ...errors, ...response.errors });
  };

  return { handleSubmitCreate, handleBlur, handleChange, handleSubmitUpdate };
};