import React from 'react';
import styled from 'styled-components';

const ContainerLoader = styled.div`
  border: 2px solid;
  color: ${(props) => props["colorLoad"]};
  background-color: transparent;
  border-radius: 10px;
  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 40px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    width: 8px;
    background: ${(props) => props["colorLoad"]};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 22px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 36px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 2px;
      height: 32px;
    }
    50%,
    100% {
      top: 18px;
      height: 12px;
    }
  }
`;

const LoaderForm = ({colorLoad}) => {
  return (
    <ContainerLoader colorLoad={colorLoad} className='LoaderForm'>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ContainerLoader>
  );
}

export default LoaderForm