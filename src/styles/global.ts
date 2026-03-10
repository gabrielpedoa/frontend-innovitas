import { createGlobalStyle } from "styled-components";
import { createTheme } from "@mui/material";

export const THEME = createTheme({
  typography: {
    fontFamily: `'Inconsolata', monospace;`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const GlobalStyle = createGlobalStyle`
  * { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
  }

  html, body, #root {
    height: 100%;
  }
`;
export default GlobalStyle;
