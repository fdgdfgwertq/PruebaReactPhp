import styled from "styled-components";

const StyleGeneralHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  .ContainerOptions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    height: max-content;
  }
  .buttonNormal {
    font-size: 1rem;
  }
  .buttonNormal span {
    padding: 8px 10px;
  }
  .ContainerSearch {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export { StyleGeneralHeader };