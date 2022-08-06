import styled from "styled-components";

const StyleMainUsuarios = styled.div`
  display: grid;
  min-height: 100%;
  .CreateUsuarios {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 10px;
    h2 {
      text-align: center;
      font-size: 2.3rem;
      font-family: ${(props) => props.theme.fonts.secondary};
    }
  }
`;

export { StyleMainUsuarios };