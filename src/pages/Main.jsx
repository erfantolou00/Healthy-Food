import { Box, Container, Divider, useTheme } from "@mui/material";
import Header from "../components/Header";
import Title from "../components/Title";
import Info from "../components/Info";
import About from "../components/About";
import Work from "../components/Work";
import Dishes from "../components/Dishes";
import Chefs from "../components/Chefs";
import Recipes from "../components/Recipes";
import Social from "../components/Social";
import Footer from "../components/Footer";

export default function Main() {
  const theme = useTheme();
  const color = theme.palette;
  return (
    <>
      <Container maxWidth="xl" bgcolor={color.background.default}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(/Healthy-Food/placeholder.png)`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          <Header />
          <Divider />
          <Title />
          <Info />
          <About />
          <Work />
          <Dishes />
          <Chefs />
          <Recipes />
          <Social />
        </Box>
      </Container>
      
      <Footer />
    </>
  );
}
