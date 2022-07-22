import styled from "styled-components";

const StyleTableListadoPreliminar = styled.table`
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
`;

const ContainerTableListadoPreliminar = styled.div`
  padding-bottom: 15px;
  width: 100%;
  overflow-x: auto;
`;

export { StyleTableListadoPreliminar, ContainerTableListadoPreliminar };