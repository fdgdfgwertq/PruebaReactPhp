export const handleFunctionsGeneralForm = ({
  values,
  setValues,
  errors,
  setErrors,
}) => {
  const normalChange = (name,value,table) => {
    setValues({
      ...values,
      [table]: {
        ...values[table],
        [name]: value,
      },
    });
  }

  const handleChangeGeneralidades = async (e) => {
    if (e.target.name === "ID_DEPARTAMENTOS" && values.ID_MUNICIPIOS) {
      setValues({
        ...values,
        GENERALIDADES: {
          ...values.GENERALIDADES,
          [e.target.name]: e.target.value,
          ID_MUNICIPIOS: "",
        },
      });
    } else {
      normalChange(e.target.name, e.target.value,"GENERALIDADES");
    }
  };
  
  const handleChangeCaracteristicas = (e) => {
    normalChange(e.target.name, e.target.value, "CARACTERISTICAS");
  }

  const handleChangeFile = (e) => {
    console.log(e);
    setValues({
      ...values,
      CARACTERISTICAS: {
        ...values.CARACTERISTICAS,
        [e.target.name]: e.target.files[0]
      },
    });
  }

  const handleChangeCaracteristicasRelevantes = (e) => {
    normalChange(e.target.name, e.target.value, "CARACTERISTICAS_RELEVANTES");
  }

  const handleChangeCheckbox = (e) => {
    setValues({
      ...values,
      CARACTERISTICAS_RELEVANTES: {
        ...values.CARACTERISTICAS_RELEVANTES,
        [e.target.name]: {
          ...values.CARACTERISTICAS_RELEVANTES[e.target.name],
          [e.target.value]: true,
        },
      },
    });
  };

  const normalChangeActividadesServicios = (name,value,table) => {
    setValues({
      ...values,
      ACTIVIDADES_SERVICIOS: {
        ...values.ACTIVIDADES_SERVICIOS,
        [table]: {
          ...values.ACTIVIDADES_SERVICIOS[table],
          [name]: value,
        },
      },
    });
  }

  const handleChangeActividades = (e) => {
    normalChangeActividadesServicios(
      e.target.name,
      e.target.value,
      "ACTIVIDADES"
    );
  }

  const handleChangeServicios = (e) => {
    normalChangeActividadesServicios(
      e.target.name,
      e.target.value,
      "SERVICIOS"
    );
  };

  const handleChangePromocion = (e) => {
    normalChange(e.target.name, e.target.value, "PROMOCION");
  }

  const handleChangeServiciosEspeciales = (e) => {
    normalChange(e.target.name, e.target.value, "SERVICIOS_ESPECIALES");
  };

  const handleChangeRedes = (e) => {
    setValues({
      ...values,
      OTROS: {
        ...values.OTROS,
        REDES: {
          ...values.OTROS.REDES,
          [e.target.name]: e.target.value,
        },
      },
    });
  }

  const handleChangeOtros = (e) => {
    normalChange(e.target.name, e.target.value, "OTROS");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }
  
  const handleBlur = (e) => {

  }

  return {
    handleChangeCheckbox,
    handleBlur,
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
  };
};