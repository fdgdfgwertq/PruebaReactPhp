import React from 'react';

const TableClasificacionAtractivosTuristicos = () => {
  return (
    <div className="ContainerTable">
      <table className="StyleTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Municipio</th>
          </tr>
        </thead>
        <tbody>
          <tr className='NoData'>
            <td colSpan={4}>No hay datos</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableClasificacionAtractivosTuristicos;