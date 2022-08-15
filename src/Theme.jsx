import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outine:none;
    border:none;
    text-decoration:none;
    list-style:none;
}

html{
    scroll-behavior: smooth;
}

body{
    font-family: 'Inter', sans-serif;
    background-color: white;
}
`;
