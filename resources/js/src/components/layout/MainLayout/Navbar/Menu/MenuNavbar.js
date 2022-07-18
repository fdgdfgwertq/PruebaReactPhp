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
        linkDirection="/"
        linkName="Clasificacion recursos y atractivos"
        srcImg="IconClasificacionRecursos"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Patrimonio material"
        srcImg="IconPatrimonioMaterial"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Patrimonio inmaterial"
        srcImg="IconPatrimonioInmaterial"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Festividades y eventos"
        srcImg="IconFestividades"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Grupos especial interes"
        srcImg="IconGruposInteres"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Sitios naturales"
        srcImg="IconSitiosNaturales"
      />
    </MenuStyle>
  );
}

export default MenuNavbar;