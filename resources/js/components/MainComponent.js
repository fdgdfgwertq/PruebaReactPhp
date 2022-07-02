import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

const DivPrueba = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-image: url('/img/FondoBienvenidos.jpg');
  background-position: center;
  background-size: cover;
  position: relative;
  & > * {
    position: relative;
    z-index: 3;
  }
  &::before {
    content: '';
    background-color: #00000042;
    position: absolute;
    z-index: 2;
    inset: 0;
  }
  .ContainerLeft {
    display: grid;
    place-items: center center;
  }
  .ContainerRight {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    overflow-y: auto;
  }
`;

const H1Animation = styled(motion.h1)`
  font-size: 4rem;
  font-family: 'HelloMozza';
  color: white;
  .TextApiColor {
    color: #02bd04;
  }
  .TextPHPColor {
    color: #3299bd;
  }
`;

const MainComponent = () => {
  return (
    <DivPrueba>
      <div className="ContainerLeft">
        <H1Animation animate={{ scale: 2 }} transition={{ duration: 0.5 }}>
          Aplicacion de
          <br />
          prueba con <br />
          <span className="TextApiColor">Api</span> en
          <span className="TextPHPColor"> PHP</span>
        </H1Animation>
      </div>
      <div className="ContainerRight">
        <NavBar />
        <main>
          <Outlet/>
        </main>
      </div>
    </DivPrueba>
  );
};

export default MainComponent;