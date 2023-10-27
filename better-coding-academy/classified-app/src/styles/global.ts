import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
  }
`;