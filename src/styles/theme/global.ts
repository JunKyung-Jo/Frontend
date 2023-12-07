import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  input {
    outline: none;
  }

  button {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
