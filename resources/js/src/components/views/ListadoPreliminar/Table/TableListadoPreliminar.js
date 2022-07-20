import React from 'react'
import { useSelector } from 'react-redux';
import RowTableListadoPreliminar from '../ComponentsOfListadoPreliminar/RowTableListadoPreliminar';
import {
  StyleTableListadoPreliminar,
  ContainerTableListadoPreliminar,
} from "./StyleTableListadoPreliminar";

const TableListadoPreliminar = () => {
  const data = useSelector(
    (state) => state.dataListaPreliminarSlice.dataLista
  );

  return (
    <ContainerTableListadoPreliminar>
      <StyleTableListadoPreliminar>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Municipio</th>
            <th>Ubicación</th>
            <th>Fuente</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).reverse().map((val,key) =>{
            return <RowTableListadoPreliminar key={'RowListadoPreliminar'+key} {...val}/>;
          })}
        </tbody>
      </StyleTableListadoPreliminar>
    </ContainerTableListadoPreliminar>
  );
}

export default TableListadoPreliminar