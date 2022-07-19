import React from 'react';
import { useSelector } from 'react-redux';
import { Route,Routes } from "react-router-dom";
import LeadingLayout from '../components/layout/MainLayout/LeadingLayout';
import MainHome from '../components/views/Home/MainHome';
import ListadoPreliminar from './ListadoPreliminar';

const Home = () => {
  const { msg } = useSelector((state) => state.updateRecordSlice.prueba);

  return (
    <Routes>
      <Route path="/" element={<LeadingLayout />}>
        <Route index element={<MainHome />} />
        <Route path="listado-preliminar/*" element={<ListadoPreliminar/>} />
        <Route
          path="clasificacion-recursos-atractivos"
          element={<div>{msg}</div>}
        />
      </Route>
    </Routes>
  );
}

export default Home;