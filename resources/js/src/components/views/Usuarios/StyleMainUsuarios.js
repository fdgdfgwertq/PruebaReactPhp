import styled from "styled-components";

const StyleMainUsuarios = styled.div`
  display: grid;
  min-height: 100%;
  .GetRecordUsuarios {
    h2 {
      width: fit-content;
      margin: 0 auto 10px;
      padding-bottom: 5px;
      border-bottom: 3px solid #2206467a;
      text-transform: uppercase;
    }
  }
  .CreateUsuarios,
  .GetRecordUsuarios,
  .UpdateUsuarios,
  .UpdatePassword {
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