import React from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { openMenu } from '../../../../features/mainLayoutSlice';
import { openModalLayoutState } from '../../../../features/modalsSlice';
import SvgHamburgerMenu from '../SvgComponents/SvgHamburgerMenu';
import SvgLogout from '../SvgComponents/SvgLogout';
import SearchBar from "./SearchBar";

const StyleHeaderMovil = styled.header`
  display: flex;
  padding: 15px;
  background-color: #220646;
  .ContainerSearchBar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    flex-grow: 1;
  }
  .FormSearchBar {
    max-width: 320px;
  }
  .ContainerButtonMenu,
  .ContainerButtonSesion {
    display: grid;
    place-items: center center;
  }
  button {
    cursor: pointer;
  }
`;

const HeaderMovil = () => {
  const dispatch = useDispatch();

  return (
    <StyleHeaderMovil>
      <div className="ContainerButtonMenu">
        <button onClick={() => dispatch(openMenu())}>
          <SvgHamburgerMenu size={40}/>
        </button>
      </div>
      <SearchBar movile={true}/>
      <div className="ContainerButtonSesion">
        <button onClick={() => dispatch(openModalLayoutState())}>
          <SvgLogout size={40}/>
        </button>
      </div>
    </StyleHeaderMovil>
  );
};

export default HeaderMovil;