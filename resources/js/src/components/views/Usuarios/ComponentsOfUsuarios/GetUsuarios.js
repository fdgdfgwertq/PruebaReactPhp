import React from 'react';
import GeneralLoader from '../../../common/GeneralLoader';
import PaginationSection from '../../ComponentsOfViews/Pagination/PaginationSection';
import useDataUsuario from '../hooks/useDataUsuario';
import HeaderUsuarios from './HeaderUsuarios';
import RowUsuarios from './RowUsuarios';
import TableUsuarios from './TableUsuarios';

const GetUsuarios = () => {
  const {response, data} = useDataUsuario();

  if (!response) return <GeneralLoader />;

  return (
    <div className="GeneralGet">
      <h2>Usuarios</h2>
      <div className="ContainerMainGeneralGet">
        <HeaderUsuarios />
        <TableUsuarios>
          {data.data.length ? (
            data.data.map((val, key) => {
              return (
                <RowUsuarios key={"RowUsuarios" + key} {...val} />
              );
            })
          ) : (
            <tr className="NoData">
              <td colSpan={4}>No hay datos para visualizar</td>
            </tr>
          )}
        </TableUsuarios>
        <PaginationSection others={data} />
      </div>
    </div>
  );
}

export default GetUsuarios