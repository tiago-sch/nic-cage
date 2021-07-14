import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    color: white;
  }
  *,
  html,
  body {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a,
  button {
    cursor: pointer;
  }
`

export default GlobalStyle
