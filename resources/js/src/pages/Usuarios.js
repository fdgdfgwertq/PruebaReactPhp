import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainUsuarios from '../components/views/Usuarios/MainUsuarios';
import useTittle from '../hooks/useTittle';
import Error404 from './Error404';

const Usuarios = () => {
  useTittle("Usuarios");
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={<MainUsuarios who={1}/>}
        />
        <Route path='registrar' element={<MainUsuarios who={2}/>}/>
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Usuarios;