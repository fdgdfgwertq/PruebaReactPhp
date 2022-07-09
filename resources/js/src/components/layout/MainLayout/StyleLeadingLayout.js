import styled from "styled-components";

const styleLeandingLayoutResize = ({movile,desktop}) => {
  if(movile) return `
    .backgroungMenuMovile{
      position : fixed;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      background-color: #000000ba;
      z-index: 49;
    }
  `;
  if(desktop) return `
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100vh;
  `;
}

const StyleLeandingLayout = styled.div`
  ${props=> styleLeandingLayoutResize(props.resize)}
`;

export { StyleLeandingLayout };