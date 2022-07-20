import styled from "styled-components";

const StyleOption = ({who}) => {
  if(who===3 || who===4){
    return `
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 30px 10px;
      h2 {
        text-align: center;
        font-size: 2.3rem;
        font-family: ${(props) => props.theme.fonts.secondary};
      }
    `;
  }
}


const StyleMainListadoPreliminar = styled.div`
  ${(props)=>StyleOption(props)}
`;

export {StyleMainListadoPreliminar};