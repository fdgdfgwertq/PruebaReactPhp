import styled from "styled-components";

const StyleMainListadoPreliminar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 10px;
  h1 {
    text-align: center;
    font-size: 2.3rem;
    font-family: ${(props) => props.theme.fonts.secondary};
  }
`;

export {StyleMainListadoPreliminar};