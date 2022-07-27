import React from 'react';
import TemplateGet from './TemplateGet';

const GetSinClasificar = () => {
  return (
    <TemplateGet>
      <tr className='NoData'>
        <td colSpan={4}>No hay datos para clasificar</td>
      </tr>
    </TemplateGet>
  );
};

export default GetSinClasificar;