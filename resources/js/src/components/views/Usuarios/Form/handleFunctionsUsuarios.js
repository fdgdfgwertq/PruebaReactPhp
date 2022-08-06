export const handleFunctionsUsuarios = ({
  values,
  setValues,
  setErrors,
  errors,
  navigate,
  dispatch,
}) => {
  const handleChange = async (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleBlur = async (e) => {};

  return { handleSubmit, handleBlur, handleChange };
};
