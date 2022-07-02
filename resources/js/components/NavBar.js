import React from 'react';
import styled from 'styled-components';
import ButtonPage from './ButtonPage';
import { NavLink } from 'react-router-dom';

const NavStyle = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding: 20px 20px 10px;
  top: 0;
`;

const NavBar = () => {
  return (
    <NavStyle>
      <NavLink to="/login">
        <ButtonPage colorButton="white">Login</ButtonPage>
      </NavLink>
      <NavLink to="/register">
        <ButtonPage colorButton="rgb(219 112 147)">Register</ButtonPage>
      </NavLink>
    </NavStyle>
  );
};

export default NavBar;