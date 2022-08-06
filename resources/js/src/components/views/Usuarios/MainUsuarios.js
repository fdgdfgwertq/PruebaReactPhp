import React from 'react'
import CreateUsuarios from './ComponentsOfUsuarios/CreateUsuarios';
import GetUsuarios from './ComponentsOfUsuarios/GetUsuarios';
import { StyleMainUsuarios } from './StyleMainUsuarios';

const MainUsuarios = ({who}) => {
  return (
    <StyleMainUsuarios>
      {who === 1 && <GetUsuarios />}
      {who === 2 && <CreateUsuarios />}
    </StyleMainUsuarios>
  );
}

export default MainUsuarios