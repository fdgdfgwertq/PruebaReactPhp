import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleActionBackListaPreliminar = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: flex-start;
  .ButtonBack {
    background-color: #36304a;
    padding: 10px 15px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const ActionBackListaPreliminar = ({to}) => {
  return (
    <StyleActionBackListaPreliminar>
      <Link to={to} className='ButtonBack'>Atras</Link>
    </StyleActionBackListaPreliminar>
  )
}

export default ActionBackListaPreliminar;