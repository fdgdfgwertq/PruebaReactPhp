import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { helpHttp } from '../../../../helpers/helpHttp';
import FormListaPreliminar from '../Form/FormListaPreliminar';
import useUpdateDataListadoPreliminar from '../hooks/useUpdateDataListadoPreliminar';
import ActionBackListaPreliminar from './ActionBackListaPreliminar';

const UpdateListadoPreliminar = () => {
  const { idListado } = useParams();
  const response = useUpdateDataListadoPreliminar(idListado);  

  useEffect(() => {
    return () => {
      if (!response) return false;
      if(!response.state) return false;
      setTimeout(async () => {
        try {
          const body = { ID_LISTADO: idListado };
          const response = await helpHttp().del("listados-preliminares/update",{body});
          console.log(response,"del");
          if (!response.state) throw response;
        } catch (error) {
          console.log(error);
        }
      }, 500);
    };
  });

  if (!response) return <div>Cargando...</div>;

  if (!response.state) return <div>{response.message}</div>;

  return (
    <>
      <ActionBackListaPreliminar/>
      <h2>Actulizar un listado preliminar</h2>
      <FormListaPreliminar
        initialValues={response.data}
        nameButton="Actualizar"
        who={4}
      />
    </>
  );
};

export default UpdateListadoPreliminar