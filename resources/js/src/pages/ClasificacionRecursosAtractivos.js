import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainClasificacionAtractivosTuristicos from '../components/views/ClasificacionAtractivosTuristicos/MainClasificacionAtractivosTuristicos';
import useTittle from '../hooks/useTittle';
import Error404 from './Error404';

const ClasificacionRecursosAtractivos = () => {
  useTittle("Clasificacion de recursos y atractivos");
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={<MainClasificacionAtractivosTuristicos who={1} />}
        />
        <Route
          path="/:idRecursoAtractivo"
          element={<MainClasificacionAtractivosTuristicos who={2} />}
        />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default ClasificacionRecursosAtractivos