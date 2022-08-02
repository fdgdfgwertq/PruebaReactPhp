import React from 'react';
import GetSinClasificar from './ComponentsOfClasificacion/GetSinClasificar';
import GetRecordClasificacionAtractivosTuristicos from './ComponentsOfClasificacion/GetRecordClasificacionAtractivosTuristicos';
import { StyleMainClasificacionAtractivosTuristicos } from './StyleMainClasificacionAtractivosTuristicos';
import GetClasificado from './ComponentsOfClasificacion/GetClasificado';
import GetRecordClasificado from './ComponentsOfClasificacion/GetRecordClasificado';

const MainClasificacionAtractivosTuristicos = ({who}) => {
  return (
    <StyleMainClasificacionAtractivosTuristicos>
      {who === 1 && <GetSinClasificar />}
      {who === 2 && <GetClasificado />}
      {who === 3 && <GetRecordClasificacionAtractivosTuristicos url="sinclas" />}
      {who === 4 && <GetRecordClasificado />}
      {who === 5 && (
        <GetRecordClasificacionAtractivosTuristicos
          actualizando={true}
          url="clas"
        />
      )}
    </StyleMainClasificacionAtractivosTuristicos>
  );
}

export default MainClasificacionAtractivosTuristicos;