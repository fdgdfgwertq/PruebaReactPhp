import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useRecordListadoPreliminar from '../hooks/useRecordListadoPreliminar';
import ActionBackListaPreliminar from './ActionBackListaPreliminar';

const GetRecordListadoPreliminar = () => {
  const { idListado } = useParams();
  const response = useRecordListadoPreliminar(idListado);
  const navigate = useNavigate();

  if (!response) return <div>Cargando...</div>;
  
  if (!response.state) return <div>{response.message}</div>;

  const handleClick = () => {
    navigate(`/listado-preliminar/actualizar/${response.data.ID_LISTADO}`, {
      replace: true,
    });
  }

  return (
    <div>
      <ActionBackListaPreliminar />
      <h2>{response.data["NOMBRE"]}</h2>
      <p>
        <span>Municipio: </span>
        <span>{response.data["MUNICIPIO"]}</span>
      </p>
      <p>
        <span>Departamento: </span> <span>{response.data["DEPARTAMENTO"]}</span>
      </p>
      <p>
        <span>Ubicación: </span>
        <span>{response.data["UBICACION"]}</span>
      </p>
      <p>
        <span>Fuente: </span>
        <span>{response.data["FUENTE"]}</span>
      </p>
      <button onClick={handleClick}>Actualizar</button>
      <button>Eliminar</button>
    </div>
  );
}

export default GetRecordListadoPreliminar;