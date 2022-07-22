import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { helpCapitalize } from '../../../../helpers/helpCapitalize';

const Row = styled.tr`
  cursor: pointer;
  height: 50px;
  font-size: 1rem;
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
  &:hover {
    background-color: #f5f5f5;
  }
  td {
    padding-left: 8px;
    color: #15012e;
  }
  td:first-child {
    font-weight: 900;
    padding-left: 15px;
  }
  td:last-child {
    padding-right: 15px;
  }
`;

const RowTableListadoPreliminar = ({
  ID_LISTADO,
  FUENTE,
  DEPARTAMENTO,
  MUNICIPIO,
  NOMBRE,
  UBICACION,
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`./${ID_LISTADO}`, { replace: true });
  }

  return (
    <Row onClick={handleClick}>
      <td>
        <span>{ID_LISTADO}</span>
      </td>
      <td>
        <span title={NOMBRE}>{helpCapitalize(NOMBRE)}</span>
      </td>
      <td>
        <span title={DEPARTAMENTO}>{helpCapitalize(DEPARTAMENTO)}</span>
      </td>
      <td>
        <span title={MUNICIPIO}>{helpCapitalize(MUNICIPIO)}</span>
      </td>
      <td>
        <span title={UBICACION}>{helpCapitalize(UBICACION)}</span>
      </td>
      <td>
        <span title={FUENTE}>{helpCapitalize(FUENTE)}</span>
      </td>
    </Row>
  );
};

export default RowTableListadoPreliminar