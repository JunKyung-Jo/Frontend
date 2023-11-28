import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  input {
    outline: none;
  }

  button {
    outline: none;
  }
`;

export default GlobalStyle;
