import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #160f29;
    -webkit-font-smoothing: antialiased;
    color: #fcfffd;
  }
  
  body, input, button {
    font: 400 16px  'Poppins', sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  a {
      text-decoration: none;
    }
`;
