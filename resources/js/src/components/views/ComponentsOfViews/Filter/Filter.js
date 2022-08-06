import React, { useState } from "react";
import { toastMs } from "../../../../helpers/helpToastMessage";
import Departamentos from "../../ListadoPreliminar/Form/DataJson/DataDepartamentos.json";
import Municipios from "../../ListadoPreliminar/Form/DataJson/DataMunicipio.json";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { closeFilter, setDataFilter } from "../../../../features/filterSlice";
import { StyleFilter } from "./StyleFilter";
import ButtonHeader from "../../../common/ButtonHeader";
import { useSearchParams } from "react-router-dom";
const cookies = new Cookies();

const initialValues = {
  ID_DEPARTAMENTOS: "",
  ID_MUNICIPIOS: "",
};

const dataFilter = () => {
  const ID_DEPARTAMENTOS = cookies.get("id_departamentos");
  const ID_MUNICIPIOS = cookies.get("id_municipios");
  if (ID_DEPARTAMENTOS || ID_MUNICIPIOS)
    return {
      ID_DEPARTAMENTOS: ID_DEPARTAMENTOS || "",
      ID_MUNICIPIOS: ID_MUNICIPIOS || "",
    };
  return null;
};

const Filter = () => {
  const filter = dataFilter();
  const [values, setValues] = useState(filter || initialValues);
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();

  const handleChange = (e) => {
    if (e.target.name === "ID_DEPARTAMENTOS") {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
        ID_MUNICIPIOS: "",
      });
    } else setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.ID_DEPARTAMENTOS && !values.ID_MUNICIPIOS)
      return toastMs().error("No selecciono ningun filtro");
    cookies.set("id_departamentos", values.ID_DEPARTAMENTOS);
    cookies.set("id_municipios", values.ID_MUNICIPIOS);
    if (params.has("page")) params.delete("page");
    setParams(params);
    dispatch(closeFilter());
    dispatch(setDataFilter(values));
  };

  return (
    <StyleFilter>
      <form onSubmit={handleSubmit}>
        <div className="Options">
          <select
            name="ID_DEPARTAMENTOS"
            id="ID_DEPARTAMENTOS"
            value={values.ID_DEPARTAMENTOS}
            onChange={(e) => handleChange(e)}
          >
            <option value="" disabled>
              Departamento
            </option>
            {Departamentos.map((val) => {
              return (
                <option
                  value={val["Código"]}
                  key={val["Código"] + val["Nombre"]}
                >
                  {val["Nombre"][0].toUpperCase() +
                    val["Nombre"].slice(1).toLocaleLowerCase()}
                </option>
              );
            })}
          </select>
          <select
            name="ID_MUNICIPIOS"
            id="ID_MUNICIPIOS"
            value={values.ID_MUNICIPIOS}
            onChange={(e) => handleChange(e)}
            disabled={values.ID_DEPARTAMENTOS ? false : true}
          >
            <option value="" disabled>
              Municipio
            </option>
            {values.ID_DEPARTAMENTOS &&
              Municipios[values.ID_DEPARTAMENTOS].map((val) => {
                return (
                  <option
                    value={val["Id_Municipio"]}
                    key={val["Id_Municipio"] + val["Nombre"]}
                  >
                    {val["Nombre"][0].toUpperCase() +
                      val["Nombre"].slice(1).toLocaleLowerCase()}
                  </option>
                );
              })}
          </select>
        </div>
        <ButtonHeader
          type="Submit"
          imgSrc="svgAccept.svg"
          className="filterButton"
        >
          Aceptar
        </ButtonHeader>
      </form>
    </StyleFilter>
  );
};

export default Filter;
