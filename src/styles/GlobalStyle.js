import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system, "Work Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: hsl(0, 0%, 100%);
        font-size: calc(10px + 2vmin);
        width: 100%;
        max-width: 1440px;
        margin: auto;
    }

    ul {
        list-style: none;
    }
`