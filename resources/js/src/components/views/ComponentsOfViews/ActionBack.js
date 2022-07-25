import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleActionBack = styled.div`
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

const ActionBack = ({to}) => {
  return (
    <StyleActionBack>
      <Link to={to} className='ButtonBack'>Atras</Link>
    </StyleActionBack>
  )
}

export default ActionBack;