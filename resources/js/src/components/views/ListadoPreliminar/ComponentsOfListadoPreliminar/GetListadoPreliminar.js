import React from 'react'
import useDataListadoPreliminar from '../hooks/useDataListadoPreliminar';
import TableListadoPreliminar from '../Table/TableListadoPreliminar';
import HeaderGetListadoPreliminar from './HeaderGetListadoPreliminar';

const GetListadoPreliminar = () => {
  const response = useDataListadoPreliminar();
  console.log(response);

  if (!response) return <div>Cargando...</div>;

  return (
    <>
      <h2>Listado Preliminar</h2>
      <div className="ContainerMainGetListadoPreliminar">
        <HeaderGetListadoPreliminar />
        <TableListadoPreliminar />
      </div>
    </>
  );
}

export default GetListadoPreliminar;