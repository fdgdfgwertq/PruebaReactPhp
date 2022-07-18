import React from 'react';
import { Route,Routes } from "react-router-dom";
import LeadingLayout from '../components/layout/MainLayout/LeadingLayout';
import MainHome from '../components/views/Home/MainHome';
import MainListadoPreliminar from '../components/views/ListadoPreliminar/MainListadoPreliminar';

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<LeadingLayout />}>
        <Route index element={<MainHome/>} />
        <Route path='listado-preliminar' element={<MainListadoPreliminar/>}/>
      </Route>
    </Routes>
  );
}

export default Home;