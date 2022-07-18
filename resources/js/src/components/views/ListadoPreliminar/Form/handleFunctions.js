import { initialValues } from "./initialValuesFormListaPreliminar";
import { UnitValidationsListaPreliminar, ValidationsFormListaPreliminar } from "./ValidationsFormListaPreliminar";

export const handleFunctions = (values, setValues, errors, setErrors) => {

  const ValidateField = async (name,value) => {
    let FieldValue = {[name]:value}
    const response = await UnitValidationsListaPreliminar(FieldValue);
    return response;
  }

  const handleChange = async (e) => {
    let response;
    if (e.target.name === "ID_DEPARTAMENTOS" && values.ID_MUNICIPIOS) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
        ID_MUNICIPIOS: "",
      });
    }else{
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    response = await ValidateField(e.target.name, e.target.value);
    if (response.state) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    const response = await ValidationsFormListaPreliminar(values);
    console.log(response);
    console.log(values);
    if (!response.state) return setErrors({ ...initialValues, ...response.errors });
  };

  const handleBlur = async (e) => {
    const response = await ValidateField(e.target.name, e.target.value);
    if(!response.state) return setErrors({ ...errors, ...response.errors });
  };

  return { handleSubmit, handleBlur, handleChange };
};