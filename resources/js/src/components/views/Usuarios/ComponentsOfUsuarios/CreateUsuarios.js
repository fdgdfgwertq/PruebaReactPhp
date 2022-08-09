import React from 'react'
import ActionBack from '../../ComponentsOfViews/ActionBack'
import RegistrationForm from '../Form/RegistrationForm';

const CreateUsuarios = () => {
  return (
    <div className="CreateUsuarios">
      <ActionBack to="/usuarios" />
      <h2>Registrar un usuario</h2>
      <RegistrationForm who={1}/>
    </div>
  );
}

export default CreateUsuarios