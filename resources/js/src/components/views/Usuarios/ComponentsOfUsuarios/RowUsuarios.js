import React from 'react'
import { helpCapitalize } from '../../../../helpers/helpCapitalize';

const RowUsuarios = ({
  ID_USUARIO,
  PRIMER_NOMBRE,
  PRIMER_APELLIDO,
  USUARIO,
}) => {
  const handleClick = () => console.log("Click");

  return (
    <tr onClick={handleClick}>
      <td>
        <span>{ID_USUARIO}</span>
      </td>
      <td>
        <span title={PRIMER_NOMBRE}>{helpCapitalize(PRIMER_NOMBRE)}</span>
      </td>
      <td>
        <span title={PRIMER_APELLIDO}>{helpCapitalize(PRIMER_APELLIDO)}</span>
      </td>
      <td>
        <span>{helpCapitalize(USUARIO)}</span>
      </td>
    </tr>
  );
};

export default RowUsuarios;