import React from 'react';
import { Formik, Field, Form } from "formik";
import styled from 'styled-components';
import SvgSearch from '../SvgComponents/SvgSearch';

const styleSearchBarResize = ({ movile, desktop }) => {
  if(movile) return `
    .FormSearchBar {
      box-shadow: rgb(108 108 254 / 32%) 0px 2px 8px 0px;
    }
    input {
      color: white;
    }
  `;
  if(desktop) return `
    .FormSearchBar {
      max-width: 450px;
      box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    }
    .ContainerInput{
      border-right: 1px solid #00000024;
    }
    button{
      path{
        fill: #000000;
      }
    }
  `;
};

const StyleSearchBar = styled.div`
  ${(props) => styleSearchBarResize(props.resize)}
  .FormSearchBar {
    width: 100%;
    display: flex;
    padding: 8px 15px;
    border-radius: 60px;
  }
  .ContainerInput {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }
  input {
    width: 100%;
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
`;

const SearchBar = ({movile,desktop}) => {
  return (
    <StyleSearchBar
      resize={{ movile: movile, desktop: desktop }}
      className="ContainerSearchBar"
    >
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="FormSearchBar">
          <div className="ContainerInput">
            <Field
              name="search"
              type="text"
              placeholder="Buscar en todo"
              autoComplete="off"
            />
          </div>
          <button type="submit">
            <SvgSearch size={25} />
          </button>
        </Form>
      </Formik>
    </StyleSearchBar>
  );
}

export default SearchBar;