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
        linkDirection="/"
        linkName="Listado preliminar"
        srcImg="iconGeneral"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Clasificacion recursos y atractivos"
        srcImg="iconGeneral"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Patrimonio material"
        srcImg="iconGeneral"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Patrimonio inmaterial"
        srcImg="iconGeneral"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Festividades y eventos"
        srcImg="iconGeneral"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Grupos especial interes"
        srcImg="iconGeneral"
      />
      <OptionMenuNavbar
        linkDirection="/"
        linkName="Sitios naturales"
        srcImg="iconGeneral"
      />
      <OptionMenuNavbar
        linkName="Cerrar sesion"
        srcImg="LogoutIcon"
        logoutButton={true}
      />
    </MenuStyle>
  );
}

export default MenuNavbar;