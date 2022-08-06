import React from 'react';
import HeaderUsuarios from './HeaderUsuarios';
import TableUsuarios from './TableUsuarios';

const GetUsuarios = () => {
  return (
    <div className="GeneralGet">
      <h2>Usuarios</h2>
      <div className="ContainerMainGeneralGet">
        <HeaderUsuarios />
        <TableUsuarios>
          <tr className="NoData">
            <td colSpan={4}>No hay datos que puedas visualizar</td>
          </tr>
        </TableUsuarios>
      </div>
    </div>
  );
}

export default GetUsuarios