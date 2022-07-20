import React from 'react';
import FormListaPreliminar from './Form/FormListaPreliminar';
import { StyleMainListadoPreliminar } from './StyleMainListadoPreliminar';
import GetListadoPreliminar from "./ComponentsOfListadoPreliminar/GetListadoPreliminar";
import { initialValues } from './Form/initialValuesFormListaPreliminar';
import GetRecordListadoPreliminar from './ComponentsOfListadoPreliminar/GetRecordListadoPreliminar';
import UpdateListadoPreliminar from './ComponentsOfListadoPreliminar/UpdateListadoPreliminar';
import ActionBackListaPreliminar from "./ComponentsOfListadoPreliminar/ActionBackListaPreliminar";

const CreateListadoPreliminar = () => {
  return (
    <>
      <ActionBackListaPreliminar />
      <h2>Crear un listado preliminar</h2>
      <FormListaPreliminar
        initialValues={initialValues}
        nameButton="Enviar"
        who={3}
      />
    </>
  );
}

const MainListadoPreliminar = ({who}) => {
  return (
    <StyleMainListadoPreliminar who={who}>
      {who === 1 && <GetListadoPreliminar />}
      {who === 2 && <GetRecordListadoPreliminar />}
      {who === 3 && <CreateListadoPreliminar />}
      {who === 4 && <UpdateListadoPreliminar />}
    </StyleMainListadoPreliminar>
  );
}

export default MainListadoPreliminar;