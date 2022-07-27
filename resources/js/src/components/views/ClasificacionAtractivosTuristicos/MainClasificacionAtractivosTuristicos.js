import React from 'react';
import GetSinClasificar from './ComponentsOfClasificacion/GetSinClasificar';
import GetRecordClasificacionAtractivosTuristicos from './ComponentsOfClasificacion/GetRecordClasificacionAtractivosTuristicos';
import { StyleMainClasificacionAtractivosTuristicos } from './StyleMainClasificacionAtractivosTuristicos';
import GetClasificado from './ComponentsOfClasificacion/GetClasificado';

const MainClasificacionAtractivosTuristicos = ({who}) => {
  return (
    <StyleMainClasificacionAtractivosTuristicos>
      {who === 1 && <GetSinClasificar />}
      {who === 2 && <GetClasificado />}
      {who === 3 && <GetRecordClasificacionAtractivosTuristicos />}
    </StyleMainClasificacionAtractivosTuristicos>
  );
}

export default MainClasificacionAtractivosTuristicos;