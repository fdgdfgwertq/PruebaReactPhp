import React from 'react'
import { useSelector } from 'react-redux';
import RowTableListadoPreliminar from './RowTableListadoPreliminar';

const TableListadoPreliminar = () => {
  const data = useSelector(
    (state) => state.dataListaPreliminarSlice.dataLista
  );

  return (
    <div className="ContainerTable">
      <table className="StyleTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Municipio</th>
            <th>Ubicación</th>
            <th>Fuente</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((val, key) => {
              return (
                <RowTableListadoPreliminar
                  key={"RowListadoPreliminar" + key}
                  {...val}
                />
              );
            })
          ) : (
            <tr className="NoData">
              <td colSpan={6}>No hay datos para visualizar</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableListadoPreliminar