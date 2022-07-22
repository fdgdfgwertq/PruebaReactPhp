import React from 'react';
import { Route,Routes } from "react-router-dom";
import LeadingLayout from '../components/layout/MainLayout/LeadingLayout';
import MainHome from '../components/views/Home/MainHome';
import useTittle from '../hooks/useTittle';
import ListadoPreliminar from './ListadoPreliminar';

const Home = () => {
  useTittle('Inicio');

  return (
    <Routes>
      <Route path="/" element={<LeadingLayout />}>
        <Route index element={<MainHome />} />
        <Route path="listado-preliminar/*" element={<ListadoPreliminar />} />
        <Route
          path="clasificacion-recursos-atractivos"
          element={<div>clasificacion recursos y actractivos</div>}
        />
        <Route
          path="patrimonio-material"
          element={<div>patrimonio material</div>}
        />
        <Route
          path="patrimonio-inmaterial"
          element={<div>patrimonio inmaterial</div>}
        />
        <Route
          path="festividades-eventos"
          element={<div>festividades y eventos</div>}
        />
        <Route
          path="grupos-especial-interes"
          element={<div>grupos especial interes</div>}
        />
        <Route
          path="sitios-naturales"
          element={<div>sitios naturales</div>}
        />
      </Route>
    </Routes>
  );
}

export default Home;