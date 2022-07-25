import React from 'react';
import GetClasificacionAtractivosTuristicos from './ComponentsOfClasificacion/GetClasificacionAtractivosTuristicos';
import GetRecordClasificacionAtractivosTuristicos from './ComponentsOfClasificacion/GetRecordClasificacionAtractivosTuristicos';
import { StyleMainClasificacionAtractivosTuristicos } from './StyleMainClasificacionAtractivosTuristicos';

const MainClasificacionAtractivosTuristicos = ({who}) => {
  return (
    <StyleMainClasificacionAtractivosTuristicos>
      {who === 1 && <GetClasificacionAtractivosTuristicos />}
      {who === 2 && <GetRecordClasificacionAtractivosTuristicos />}
    </StyleMainClasificacionAtractivosTuristicos>
  );
}

export default MainClasificacionAtractivosTuristicos;