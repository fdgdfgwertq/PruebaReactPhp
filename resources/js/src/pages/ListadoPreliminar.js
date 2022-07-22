import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainListadoPreliminar from "../components/views/ListadoPreliminar/MainListadoPreliminar";
import useTittle from '../hooks/useTittle';

const ListadoPreliminar = () => {
  useTittle('Listado preliminar');
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainListadoPreliminar who={1} />} />
        <Route
          path=":idListado"
          element={<MainListadoPreliminar who={2} />}
        />
        <Route path="crear" element={<MainListadoPreliminar who={3} />} />
        <Route path="actualizar/:idListado" element={<MainListadoPreliminar who={4} />} />
      </Route>
    </Routes>
  );
}

export default ListadoPreliminar;