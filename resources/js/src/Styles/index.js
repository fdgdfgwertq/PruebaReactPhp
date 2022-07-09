import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#7286A0",
    accent: "#BE6E46",
    dark: "#CDE7B0",
    background: "#59594A",
  },
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
  button,a,input[type="submit"],input[type="text"],input[type="password"],input[type="email"]{
    all: unset;
  }
`;
