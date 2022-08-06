import React from 'react';
import OptionMenuNavbar from './OptionMenuNavbar';
import styled from "styled-components";

const MenuStyle = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const MenuNavbar = () => {
  return (
    <MenuStyle>
      <OptionMenuNavbar
        linkDirection="/listado-preliminar"
        linkName="Listado preliminar"
        srcImg="IconListaPreliminar"
      />
      <OptionMenuNavbar
        linkDirection="/clasificacion-recursos-atractivos"
        linkName="Clasificacion recursos y atractivos"
        srcImg="IconClasificacionRecursos"
      />
      <OptionMenuNavbar
        linkDirection="/patrimonio-material"
        linkName="Patrimonio material"
        srcImg="IconPatrimonioMaterial"
      />
      <OptionMenuNavbar
        linkDirection="/patrimonio-inmaterial"
        linkName="Patrimonio inmaterial"
        srcImg="IconPatrimonioInmaterial"
      />
      <OptionMenuNavbar
        linkDirection="/festividades-eventos"
        linkName="Festividades y eventos"
        srcImg="IconFestividades"
      />
      <OptionMenuNavbar
        linkDirection="/grupos-especial-interes"
        linkName="Grupos especial interes"
        srcImg="IconGruposInteres"
      />
      <OptionMenuNavbar
        linkDirection="/sitios-naturales"
        linkName="Sitios naturales"
        srcImg="IconSitiosNaturales"
      />
      <OptionMenuNavbar
        linkDirection="/usuarios"
        linkName="Usuarios"
        srcImg="IconUsuarios"
      />
    </MenuStyle>
  );
}

export default MenuNavbar;