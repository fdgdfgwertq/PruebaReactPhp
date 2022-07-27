import React from 'react';
import TemplateGet from './TemplateGet';

const GetClasificado = () => {
  return (
    <TemplateGet>
      <tr className='NoData'>
        <td colSpan={4}>No hay datos que puedas modificar</td>
      </tr>
    </TemplateGet>
  )
}

export default GetClasificado;