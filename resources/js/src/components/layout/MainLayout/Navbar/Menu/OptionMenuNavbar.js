import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { openModalLayoutState } from '../../../../../features/modalsSlice';

const OptionMenuStyle = styled.li`
  display: block;
  width: 100%;
  ${(props) => props.who} {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    width: 100%;
  }
  ${(props) => props.who}:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
  img {
    width: 30px;
    height: 30px;
  }
  .linkName {
    color: white;
  }
`;

const ContainOption = ({ linkName, srcImg }) => {
  return (
    <>
      <span className="iconOption">
        <img src={`/img/${srcImg}.svg`} alt="icon" />
      </span>
      <span className="linkName">{linkName}</span>
    </>
  );
};

const OptionMenuNavbar = ({linkDirection,linkName,srcImg,logoutButton}) => {
  const dispatch = useDispatch();

  return (
    <OptionMenuStyle who={logoutButton ? "button" : "a"}>
      {logoutButton ? (
        <button onClick={() => dispatch(openModalLayoutState())}>
          <ContainOption linkName={linkName} srcImg={srcImg} />
        </button>
      ) : (
        <NavLink to={linkDirection}>
          <ContainOption linkName={linkName} srcImg={srcImg} />
        </NavLink>
      )}
    </OptionMenuStyle>
  );
}

export default OptionMenuNavbar;