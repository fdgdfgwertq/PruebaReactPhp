import React from 'react';
import ActionBack from "../../ComponentsOfViews/ActionBack";
import ErrorComponent from "../../../common/ErrorComponent";
import FormClasificacionAtractivosTuristicos from '../Form/FormClasificacionAtractivosTuristicos';
import { useParams } from 'react-router-dom';

const GetRecordClasificacionAtractivosTuristicos = () => {
  const { idRecursoAtractivo } = useParams();

  if (idRecursoAtractivo!=1) return <ErrorComponent message="El registro no existe"/>

  return (
    <div className="GetRecordClasificacionAtractivosTuristicos">
      <ActionBack to="/clasificacion-recursos-atractivos" />
      <h2>Nombre</h2>
      <FormClasificacionAtractivosTuristicos />
    </div>
  );
}

export default GetRecordClasificacionAtractivosTuristicos;