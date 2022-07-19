import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainListadoPreliminar from "../components/views/ListadoPreliminar/MainListadoPreliminar";

const ListadoPreliminar = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>Hola</div>} />
        <Route path="crear" element={<MainListadoPreliminar />} />
      </Route>
    </Routes>
  );
}

export default ListadoPreliminar;