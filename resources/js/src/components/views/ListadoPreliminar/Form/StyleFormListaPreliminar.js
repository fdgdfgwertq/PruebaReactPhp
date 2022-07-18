import styled from "styled-components";

const StyleFormListaPreliminar = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 95%;
  max-width: 740px;
  margin: 0 auto;
  .ContainerFields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  .NameField {
    font-size: 1.1rem;
    margin-bottom: 8px;
    font-weight: 600;
    color: #15012e;
  }
  select {
    background-color: #2c1742eb;
    color: white;
    padding: 8px 10px;
    border-radius: 8px;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    width: 100%;
    option {
      background-color: white;
      color: #15012e;
    }
    option:disabled {
      color: #130522b3;
    }
  }
  input {
    width: 100%;
    box-shadow: rgb(0 0 0 / 80%) 0px 1px 4px;
    border-radius: 5px;
    padding: 7px 15px;
    box-sizing: border-box;
    font-size: 1rem;
    cursor: text;
  }
  select:disabled {
    position: relative;
    opacity: 0.5;
  }
  .errorMessage {
    color: red;
    text-align: center;
  }
  button {
    align-self: center;
    width: max-content;
  }
`;

export { StyleFormListaPreliminar };
