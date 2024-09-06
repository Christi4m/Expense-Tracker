import styled, { createGlobalStyle } from "styled-components";

export const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #ecdff2, #f0e2e9, #e5f2f4);
`;

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
}

:root{
    --primary-color: #222260;
    --primary-color2: 'color: rgba(34,34,96, .6)';
    --primary-color3: 'color: rgba(34,34,96, .4)';
    --color-green: #42ad00;
    --color-gery: #444;
    --color-accent: #f56692;
    --color-delete: #ff0000;

}

body{
    font-family: "Nunito", sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow: hidden;
    color: rgba(34,34,96, .6);
}
`;
