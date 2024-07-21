import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./themeOptions.jsx";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home.jsx";
import DigitalMenu from "./pages/DigitalMenu.jsx";

import { CssBaseline } from "@mui/material";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/Healthy-Food" element={<Home />} />
          <Route path="/Healthy-Food/DigitalMenu" element={<DigitalMenu />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
