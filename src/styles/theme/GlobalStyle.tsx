import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    outline: none;
  }

  button {
    outline: none;
  }
`;

export default GlobalStyle;
