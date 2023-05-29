import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    color: #E1E1E6;
    background-color: #1A1924;
}


/* retirando a rolagem completa da página */

html, body{
    overflow: hidden;
}
`;
