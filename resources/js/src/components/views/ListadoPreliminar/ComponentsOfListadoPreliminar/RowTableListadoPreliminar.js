import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Row = styled.tr`
  cursor: pointer;
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
        <span title={ID_LISTADO}>{ID_LISTADO}</span>
      </td>
      <td>
        <span title={NOMBRE}>{NOMBRE}</span>
      </td>
      <td>
        <span title={DEPARTAMENTO}>{DEPARTAMENTO}</span>
      </td>
      <td>
        <span title={MUNICIPIO}>{MUNICIPIO}</span>
      </td>
      <td>
        <span title={UBICACION}>{UBICACION}</span>
      </td>
      <td>
        <span title={FUENTE}>{FUENTE}</span>
      </td>
    </Row>
  );
};

export default RowTableListadoPreliminar