import { createGlobalStyle } from "styled-components";

export const theme = {
  fonts: {
    primary: `'Montserrat', sans-serif`,
    secondary: `"Rubik", sans-serif`,
  },
};

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${(props) => props.theme.fonts.primary};
  }
  button,a,input[type="submit"],input[type="text"],input[type="password"],input[type="email"],input[type="number"]{
    all: unset;
  }
  :focus-visible {
    outline: none;
  }
  main::-webkit-scrollbar {
    width: 10px;
  }
  main::-webkit-scrollbar-thumb {
    background: #15012ec7;
    border-radius: 4px;
  }
  main::-webkit-scrollbar-thumb:active {
    background-color: #15012e;
  }
  .ContainerMainGeneral{
    display: grid;
    min-height: 100%;
  }
  .GeneralGet,.TemplateGet,.GeneralContainer{
    overflow: hidden;
  }
  .GeneralGet,.TemplateGet,.GeneralContainer {
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
  .ContainerOptionsGeneralGet,.ContainerOptionsTemplateGet{
    display: flex;
    gap: 10px;
    font-weight: 800;
    padding: 10px 0;
  }
  .ContainerOptionsGeneralGet a,.ContainerOptionsTemplateGet a {
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 1.3rem;
  }
  .activeOptionGeneralGet,.activeOptionTemplateGet{
    border-bottom: 3px solid #15012e;
  }
  .ContainerTable{
    padding-bottom: 15px;
    width: 100%;
    overflow-x: auto;
  }
  .StyleTable{
    width: 1029px;
    margin: 0 auto;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    thead {
      height: 60px;
      background-color: #2c1742eb;
      color: white;
      font-family: ${(props) => props.theme.fonts.secondary};
    }
    th {
      font-weight: 100;
      font-size: 1.2rem;
      padding-left: 8px;
    }
    th:first-child {
      padding-left: 15px;
    }
    th:last-child {
      padding-right: 15px;
    }
    tbody tr{
      cursor: pointer;
      height: 50px;
      font-size: 1rem;
    }
    tbody tr:nth-child(even){
      background-color: #f5f5f5;
    }
    tbody tr:hover {
      background-color: #f5f5f5;
    }
    td {
      padding-left: 8px;
      color: #15012e;
    }
    td:first-child {
      font-weight: 900;
      padding-left: 15px;
    }
    td:last-child {
      padding-right: 15px;
    }
    .NoData {
      text-align: center;
      font-size: 1.5rem;
      cursor: default;
    }
  }
  .ContainerInformation {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 95%;
    max-width: 740px;
    margin: 0 auto;
    .MainInformation {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }
    p {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .titleInformation {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-weight: 600;
      color: #15012e;
      font-size: 1.4rem;
    }
    .information {
      font-size: 1.2rem;
    }
    .ContainerButtons {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 10px;
    }
  }
`;
