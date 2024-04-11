import { createGlobalStyle, styled } from "styled-components";

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

export const FAQTitle = styled.h1`
    color: hsl(292, 42%, 14%);
    font-size: 48px;
    font-weight: 700;
`

export const GuideItem = styled.li`
    width: 100%;
    border-bottom: 3px solid hsl(275, 100%, 97%);
    background-color: #e6e6e6;
    min-height: 54px;
    cursor: pointer;
`

export const Topic = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: hsl(292, 42%, 14%);
`

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: hsl(292, 16%, 49%);
    margin-top: 20px;
`