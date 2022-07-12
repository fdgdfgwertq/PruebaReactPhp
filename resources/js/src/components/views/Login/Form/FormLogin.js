import React, { useState } from "react";
import ButtonPage from "../../../common/ButtonPage";
import { ContainerForm } from "./StylesFormLogin";
import { Formik } from "formik";
import { initialValues } from "./initialValuesFormLogin";
import { schemaErrorsFormLogin } from "./schemaErrorsFormLogin";
import LoaderForm from "../../../common/LoaderForm";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../../router/paths";
import { fetchLogin, saveCookies } from "./LogicFormLogin";

const FormLogin = () => {
  let navigate = useNavigate();
  const [load, setLoad] = useState(false);
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaErrorsFormLogin}
      onSubmit={async (values, { setErrors, setSubmitting, resetForm }) => {
        setLoad(true);
        const data = await fetchLogin(values);
        setLoad(false);
        if (!data.state) return setErrors(data.errors);
        saveCookies(data);
        setSubmitting(false);
        resetForm();
        navigate(HOME, { replace: true });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <ContainerForm onSubmit={handleSubmit}>
          <label htmlFor="correo">
            <span>Email</span>
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="Example@gmail.com"
              autoComplete="off"
              value={values.correo}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.correo && errors.correo ? "errorInput" : null}
            />
            {touched.correo && errors.correo && (
              <small className="errorMessage">{errors.correo}</small>
            )}
          </label>
          <label htmlFor="clave">
            <span>Contraseña</span>
            <input
              type="password"
              name="clave"
              id="clave"
              placeholder="Tu contraseña"
              value={values.clave}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.clave && errors.clave ? "errorInput" : null}
            />
            {touched.clave && errors.clave && (
              <small className="errorMessage">{errors.clave}</small>
            )}
          </label>
          {load ? (
            <LoaderForm colorLoad="white" />
          ) : (
            <ButtonPage type="submit" colorButton="white">
              LOGIN
            </ButtonPage>
          )}
        </ContainerForm>
      )}
    </Formik>
  );
};

export default FormLogin;
