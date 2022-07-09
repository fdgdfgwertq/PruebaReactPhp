import React from 'react';
import MenuNavbar from './Menu/MenuNavbar';
import { Nav } from './StyleNavbar';
import { useDispatch } from "react-redux";
import { closeMenu } from '../../../../features/mainLayoutSlice';

const CloseMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="ContainerCloseMenu">
      <button onClick={() => dispatch(closeMenu())}>
        <img src="/img/IconCloseMenu.svg" alt="CloseIcon" />
      </button>
    </div>
  );
}

const Navbar = ({movile,desktop}) => {
  return (
    <Nav
      resize={{ movile: movile, desktop: desktop }}
      animate={movile ? { x: [-200, 0] } : null}
      transition={movile ? { duration: 0.5 } : null}
      exit={movile ?{ x: [0, -1000] }:null}
      className="Navbar"
    >
      {movile && <CloseMenu />}
      <header className="HeaderNav">ALGO</header>
      <MenuNavbar />
    </Nav>
  );
};

export default Navbar;