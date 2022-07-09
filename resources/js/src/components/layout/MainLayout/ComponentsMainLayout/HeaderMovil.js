import React from 'react';
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { openMenu } from '../../../../features/mainLayoutSlice';
import { openModalLayoutState } from '../../../../features/modalsSlice';

const StyleHeaderMovil = styled.header`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #80808059;
  .MainHeaderMovil {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  img {
    width: 50px;
    height: 50px;
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
          <img src="/img/HamburgerMenuIcon.svg" alt="HamburgerMenuIcon" />
        </button>
      </div>
      <div className="MainHeaderMovil">Nose</div>
      <div className="ContainerButtonSesion">
        <button onClick={() => dispatch(openModalLayoutState())}>
          <img src="/img/LogoutIcon.svg" alt="LogoutIcon" />
        </button>
      </div>
    </StyleHeaderMovil>
  );
};

export default HeaderMovil;