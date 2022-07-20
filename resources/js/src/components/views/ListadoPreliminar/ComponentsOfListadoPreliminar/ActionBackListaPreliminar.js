import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleActionBackListaPreliminar = styled.div`
  display: flex;
  padding: 5px 15px;
  justify-content: flex-start;
  .ButtonBack {
    background-color: blue;
    padding: 10px 15px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const ActionBackListaPreliminar = () => {
  return (
    <StyleActionBackListaPreliminar>
      <Link to="/listado-preliminar" className='ButtonBack'>Atras</Link>
    </StyleActionBackListaPreliminar>
  )
}

export default ActionBackListaPreliminar;