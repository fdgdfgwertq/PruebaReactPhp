import Componentes from "./DataJson/DataComponentes.json";
import Elementos from "./DataJson/DataElementos.json";
import Significado from "./DataJson/DataSignificado.json";

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

  const handleChangeDepartamentosMunicipio = (name,value) => {
    if (name === "ID_DEPARTAMENTOS"){
      setValues({
        ...values,
        CARACTERISTICAS: {
          ...values.CARACTERISTICAS,
          CODIGOS: {
            ...values.CARACTERISTICAS.CODIGOS,
            [name]: value,
            ID_MUNICIPIOS: "",
            ID_TIPO_PATRIMONIO: "",
            ID_GRUPO: "",
            ID_COMPONENTE: "",
            ID_ELEMENTO: "",
          },
        },
      });
    }else {
      setValues({
        ...values,
        CARACTERISTICAS: {
          ...values.CARACTERISTICAS,
          CODIGOS: {
            ...values.CARACTERISTICAS.CODIGOS,
            [name]: value,
            ID_TIPO_PATRIMONIO: "",
            ID_GRUPO: "",
            ID_COMPONENTE: "",
            ID_ELEMENTO: "",
          },
        },
      });
    }
  }

  const handleChangeGeneralidades = async (e) => {
    if (
      e.target.name === "ID_DEPARTAMENTOS" ||
      e.target.name === "ID_MUNICIPIOS"
    ) {
      handleChangeDepartamentosMunicipio(e.target.name, e.target.value);
    } else {
      normalChange(e.target.name, e.target.value, "GENERALIDADES");
    }
  };

  const handleChangeAdminPropietario = (e) => {
    setValues({
      ...values,
      GENERALIDADES: {
        ...values.GENERALIDADES,
        "ADMIN/PROPIETARIOS": {
          ...values.GENERALIDADES["ADMIN/PROPIETARIOS"],
          [e.target.name]: e.target.value
        },
      },
    });
  }
  
  const handleChangeCaracteristicas = (e) => {
    normalChange(e.target.name, e.target.value, "CARACTERISTICAS");
  }

  const handleChangeCodigo = (e) => {
    if (e.target.name === "ID_TIPO_PATRIMONIO") {
      return setValues({
        ...values,
        CARACTERISTICAS: {
          ...values.CARACTERISTICAS,
          CODIGOS: {
            ...values.CARACTERISTICAS.CODIGOS,
            [e.target.name]: e.target.value,
            ID_GRUPO: "",
            ID_COMPONENTE: "",
            ID_ELEMENTO: "",
          },
        },
      });
    }
    if (e.target.name === "ID_GRUPO"){
      let ID_COMPONENTE = "",ID_ELEMENTO = "",
      Componente = Componentes[values.CARACTERISTICAS.CODIGOS.ID_TIPO_PATRIMONIO][
        e.target.value
      ];
      if(!Componente) {
        ID_ELEMENTO = "1";
        ID_COMPONENTE = "1";
      }
      return setValues({
        ...values,
        CARACTERISTICAS: {
          ...values.CARACTERISTICAS,
          CODIGOS: {
            ...values.CARACTERISTICAS.CODIGOS,
            [e.target.name]: e.target.value,
            ID_COMPONENTE,
            ID_ELEMENTO,
          },
        },
      });
    }
    if (e.target.name === "ID_COMPONENTE") {
      let ID_ELEMENTO = "",
        Grupo =
          Elementos[values.CARACTERISTICAS.CODIGOS.ID_TIPO_PATRIMONIO][
            values.CARACTERISTICAS.CODIGOS.ID_GRUPO
          ];
      if(!Grupo) ID_ELEMENTO = "1";
      else{
        let Elemento =
          Elementos[values.CARACTERISTICAS.CODIGOS.ID_TIPO_PATRIMONIO][
            values.CARACTERISTICAS.CODIGOS.ID_GRUPO
          ][e.target.value];
        if(!Elemento) ID_ELEMENTO = "1";
      }
      return setValues({
        ...values,
        CARACTERISTICAS: {
          ...values.CARACTERISTICAS,
          CODIGOS: {
            ...values.CARACTERISTICAS.CODIGOS,
            [e.target.name]: e.target.value,
            ID_ELEMENTO,
          },
        },
      });
    }
    setValues({
      ...values,
      CARACTERISTICAS: {
        ...values.CARACTERISTICAS,
        CODIGOS: {
          ...values.CARACTERISTICAS.CODIGOS,
          [e.target.name]: e.target.value,
        },
      },
    });
  }

  const handleChangeFile = (e) => {
    console.log(e);
    normalChange(e.target.name, e.target.files[0], "CARACTERISTICAS");
  }

  const handleChangePuntajes = (e) => {
    console.log(e);
    let Subtotal = values.PUNTAJES_VALORACION.CALIDAD.SUBTOTAL;
    let SignificadoPuntaje = Significado[e.target.value - 1]["PUNTAJE"];
    Subtotal = isNaN(parseInt(Subtotal)) ? 0 : parseInt(Subtotal);
    SignificadoPuntaje = isNaN(parseInt(SignificadoPuntaje))
      ? 0
      : parseInt(SignificadoPuntaje);
    setValues({
      ...values,
      PUNTAJES_VALORACION: {
        ...values.PUNTAJES_VALORACION,
        [e.target.name]: e.target.value,
        TOTAL: SignificadoPuntaje + Subtotal,
      },
    });
  }

  const handleChangeCalidadMaterial = (e) => {
    console.log(e.target.value);
    let ESTADO_CONSERVACION =
      e.target.name === "ESTADO_CONSERVACION"
        ? e.target.value
        : values.PUNTAJES_VALORACION.CALIDAD.ESTADO_CONSERVACION;
    let CONSTITUCION =
      e.target.name === "CONSTITUCION"
        ? e.target.value
        : values.PUNTAJES_VALORACION.CALIDAD.CONSTITUCION;
    let REPRESENTATIVIDAD =
      e.target.name === "REPRESENTATIVIDAD"
        ? e.target.value
        : values.PUNTAJES_VALORACION.CALIDAD.REPRESENTATIVIDAD;
    let ID_SIGNIFICADO = values.PUNTAJES_VALORACION.ID_SIGNIFICADO;
    let SignificadoPuntaje = ID_SIGNIFICADO
      ? Significado[ID_SIGNIFICADO-1]["PUNTAJE"]
      : "";
    ESTADO_CONSERVACION = isNaN(parseInt(ESTADO_CONSERVACION))
      ? 0
      : parseInt(ESTADO_CONSERVACION);
    CONSTITUCION = isNaN(parseInt(CONSTITUCION)) ? 0 : parseInt(CONSTITUCION);
    REPRESENTATIVIDAD = isNaN(parseInt(REPRESENTATIVIDAD))
      ? 0
      : parseInt(REPRESENTATIVIDAD);
    SignificadoPuntaje = isNaN(parseInt(SignificadoPuntaje))
      ? 0
      : parseInt(SignificadoPuntaje);
    setValues({
      ...values,
      PUNTAJES_VALORACION: {
        ...values.PUNTAJES_VALORACION,
        CALIDAD: {
          ...values.PUNTAJES_VALORACION.CALIDAD,
          [e.target.name]: e.target.value,
          SUBTOTAL: ESTADO_CONSERVACION + CONSTITUCION + REPRESENTATIVIDAD,
        },
        TOTAL:
          SignificadoPuntaje +
          ESTADO_CONSERVACION +
          CONSTITUCION +
          REPRESENTATIVIDAD,
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
          [e.target.value]:
            values.CARACTERISTICAS_RELEVANTES[e.target.name][e.target.value] ? false : true,
        },
      },
    });
  };

  const handleChangeTarifas = (e) => {
    setValues({
      ...values,
      CARACTERISTICAS_RELEVANTES: {
        ...values.CARACTERISTICAS_RELEVANTES,
        TARIFAS: {
          ...values.CARACTERISTICAS_RELEVANTES.TARIFAS,
          [e.target.name]: e.target.value,
        },
      },
    });
  }

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
  };
};