import { theme } from "./themeOptions.jsx";
import {  ThemeProvider } from "@mui/material/styles";
import Main from "./pages/Main.jsx";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Main />
    </ThemeProvider>
  );
}

export default App;
