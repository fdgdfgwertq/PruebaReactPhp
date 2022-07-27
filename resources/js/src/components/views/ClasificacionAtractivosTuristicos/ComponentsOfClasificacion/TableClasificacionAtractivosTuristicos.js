import React from 'react';

const TableClasificacionAtractivosTuristicos = ({children}) => {
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
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default TableClasificacionAtractivosTuristicos;