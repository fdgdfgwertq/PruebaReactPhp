import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorComponent from '../../common/ErrorComponent';
import { initialValuesGeneralForm } from '../ComponentsOfViews/GeneralForm/initialValuesGeneralForm';
import MainGeneralForm from '../ComponentsOfViews/GeneralForm/MainGeneralForm';
import GeneralGet from '../ComponentsOfViews/GeneralGet';

const GetSinCompletarPatrimonioMaterial = () => {
  return (
    <>
      <GeneralGet
        h2Text="Patrimonio material"
        toFirst="/patrimonio-material/sin-completar"
        toLast="/patrimonio-material/completado"
      >
        <tr className="NoData">
          <td colSpan={6}>No hay datos para completar</td>
        </tr>
      </GeneralGet>
    </>
  );
};

const GetCompletadoPatrimonioMaterial = () => {
  return (
    <>
      <GeneralGet
        h2Text="Patrimonio material"
        toFirst="/patrimonio-material/sin-completar"
        toLast="/patrimonio-material/completado"
      >
        <tr className="NoData">
          <td colSpan={6}>No hay datos para visualizar</td>
        </tr>
      </GeneralGet>
    </>
  );
}

const CreateMainPatrimonioMaterial = () => {
  const {idSinCompletar} = useParams();
  
  if(idSinCompletar!=1) return <ErrorComponent message="El registro no existe"/>

  return (
    <>
      <div>
        <MainGeneralForm
          initialErrors={{}}
          initialValues={initialValuesGeneralForm({
            ESTADO_CONSERVACION: "",
            CONSTITUCION: "",
            REPRESENTATIVIDAD: "",
          })}
          who={1}
        />
      </div>
    </>
  );
}

const MainPatrimonioMaterial = ({who}) => {
  return (
    <div className="ContainerMainGeneral">
      {who === 1 && <GetSinCompletarPatrimonioMaterial />}
      {who === 2 && <GetCompletadoPatrimonioMaterial />}
      {who === 3 && <CreateMainPatrimonioMaterial />}
    </div>
  );
}

export default MainPatrimonioMaterial;