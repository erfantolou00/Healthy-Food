import { createTheme } from "@mui/material";

export const theme =createTheme ({
  palette: {
    mode: "dark",
    primary: {
      main: "#00831F",
      light: "#5fd27c",
      dark: "#00831f",
      contrastText: "rgba(10,10,10,0.87)",
    },
    secondary: {
      main: "rgba(255, 255, 255, 1)",
      light: "#ffffff",
      dark: "#b7b6b6",
      contrastText: "rgba(0,0,0,0.87)",
    },
    text: {
      secondary: "#34C759",
      primary: "rgba(217, 217, 217, 1)",
      disabled: "rgba(115, 115, 115, 1)",
      hint: "rgba(48, 48, 48, 1)",
      black:"#191919",
      
    },
    background: {
      paper: "#252525",
      default: "#191919",
      
    },
  },
  typography: {
    fontSize: 16,
    caption: {
      fontSize: 14,
    },
  },
  body: {
    padding: '0px',
    margin: '0px',
    background:"#161616"
  }
});
