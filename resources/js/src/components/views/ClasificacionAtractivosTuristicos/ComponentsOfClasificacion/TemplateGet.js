import React from 'react'
import { NavLink } from 'react-router-dom'
import TableClasificacionAtractivosTuristicos from './TableClasificacionAtractivosTuristicos'

const TemplateGet = ({children}) => {
  return (
    <div className="TemplateGet">
      <h2>Clasificacion de recursos y atractivos</h2>
      <div className="ContainerMainTemplateGet">
        <div className="ContainerOptionsTemplateGet">
          <NavLink
            to="/clasificacion-recursos-atractivos/sin-clasificar"
            className={({ isActive }) =>
              isActive ? "activeOptionTemplateGet" : undefined
            }
          >
            Sin clasificar
          </NavLink>
          <NavLink
            to="/clasificacion-recursos-atractivos/clasificado"
            className={({ isActive }) =>
              isActive ? "activeOptionTemplateGet" : undefined
            }
          >
            Clasificado
          </NavLink>
        </div>
        <TableClasificacionAtractivosTuristicos>
          {children}  
        </TableClasificacionAtractivosTuristicos>
      </div>
    </div>
  )
}

export default TemplateGet