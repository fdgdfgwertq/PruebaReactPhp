import React from 'react'
import GeneralLoader from '../../../common/GeneralLoader';
import useDataListadoPreliminar from '../hooks/useDataListadoPreliminar';
import TableListadoPreliminar from '../Table/TableListadoPreliminar';
import HeaderGetListadoPreliminar from './HeaderGetListadoPreliminar';

const GetListadoPreliminar = () => {
  const response = useDataListadoPreliminar();

  if (!response) return <GeneralLoader />;

  return (
    <div className="GetListadoPreliminar">
      <h2>Listado Preliminar</h2>
      <div className="ContainerMainGetListadoPreliminar">
        <HeaderGetListadoPreliminar />
        <TableListadoPreliminar />
      </div>
    </div>
  );
}

export default GetListadoPreliminar;