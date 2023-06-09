import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    background: #766A92;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;