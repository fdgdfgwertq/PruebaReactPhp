import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { helpCapitalize } from '../../../../helpers/helpCapitalize';
import ErrorComponent from '../../../common/ErrorComponent';
import GeneralLoader from '../../../common/GeneralLoader';
import ActionBack from '../../ComponentsOfViews/ActionBack';
import useRecordListadoPreliminar from '../hooks/useRecordListadoPreliminar';

const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 95%;
  max-width: 740px;
  margin: 0 auto;
  .MainInformation {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  p {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .titleInformation {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: 600;
    color: #15012e;
    font-size: 1.4rem;
  }
  .information {
    font-size: 1.2rem;
  }
  .ContainerButtons {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
  }
  button {
    padding: 10px 15px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
  .delete {
    background-color: red;
  }
  .update {
    background-color: blue;
  }
`;

const GetRecordListadoPreliminar = () => {
  const { idListado } = useParams();
  const response = useRecordListadoPreliminar(idListado);
  const navigate = useNavigate();

  if (!response) return <GeneralLoader />;
  
  if (!response.state) return <ErrorComponent message={response.message} />;

  const handleClick = () => {
    navigate(`/listado-preliminar/actualizar/${response.data.ID_LISTADO}`, {
      replace: true,
    });
  }

  return (
    <div className="GetRecordListadoPreliminar">
      <ActionBack to="/listado-preliminar" />
      <h2>{response.data["NOMBRE"]}</h2>
      <ContainerInformation>
        <div className='MainInformation'>
          <p>
            <span className="titleInformation">Departamento: </span>{" "}
            <span className="information">
              {helpCapitalize(response.data["DEPARTAMENTO"])}
            </span>
          </p>
          <p>
            <span className="titleInformation">Municipio: </span>
            <span className="information">
              {helpCapitalize(response.data["MUNICIPIO"])}
            </span>
          </p>
          <p>
            <span className="titleInformation">Ubicación: </span>
            <span className="information">
              {helpCapitalize(response.data["UBICACION"])}
            </span>
          </p>
          <p>
            <span className="titleInformation">Fuente: </span>
            <span className="information">
              {helpCapitalize(response.data["FUENTE"])}
            </span>
          </p>
        </div>
        <div className="ContainerButtons">
          <button onClick={handleClick} className='update'>Actualizar</button>
          <button className='delete'>Eliminar</button>
        </div>
      </ContainerInformation>
    </div>
  );
}

export default GetRecordListadoPreliminar;