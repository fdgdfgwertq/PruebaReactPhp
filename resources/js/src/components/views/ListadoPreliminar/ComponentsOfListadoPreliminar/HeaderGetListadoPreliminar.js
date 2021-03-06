import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyleHeaderGetListadoPreliminar = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 15px;
  .ButtonNew{
    padding: 8px 10px;
    border-radius: 8px;
    background-color: blue;
    color: white;
    cursor: pointer;
  }
`;

const HeaderGetListadoPreliminar = () => {
  return (
    <StyleHeaderGetListadoPreliminar>
      <Link to="./crear" className='ButtonNew'>Nuevo</Link>
    </StyleHeaderGetListadoPreliminar>
  );
}

export default HeaderGetListadoPreliminar