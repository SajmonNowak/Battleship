import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto&display=swap');;
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif ;
  }
  

  h1,h2 {
    font-family: "Abril Fatface"
  }

`;

export default GlobalStyle;
