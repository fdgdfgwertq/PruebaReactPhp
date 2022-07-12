import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const StyleHeaderDesktop = styled.header`
  display: flex;
  justify-content: center;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  .ContainerSearchBar {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
`;

const HeaderDesktop = () => {
  return (
    <StyleHeaderDesktop className='HeaderDesktop'>
      <SearchBar desktop={true}/>
    </StyleHeaderDesktop>
  )
}

export default HeaderDesktop;