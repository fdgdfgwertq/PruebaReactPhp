import React from 'react';
import { Route,Routes } from "react-router-dom";
import LeadingLayout from '../components/layout/MainLayout/LeadingLayout';
import MainHome from '../components/views/Home/MainHome';

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<LeadingLayout />}>
        <Route index element={<MainHome/>} />
      </Route>
    </Routes>
  );
}

export default Home;