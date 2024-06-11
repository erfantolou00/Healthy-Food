import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  ImageList,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

function About() {
  const theme = useTheme();
  return (
    <Stack
      bgcolor={theme.palette.background.paper}
      mt={10}
      mx={9}
      height={"auto"}
      borderRadius={2}
    >
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={16}
      >
        <Typography
          variant="h1"
          position={"absolute"}
          color={theme.palette.text.hint}
          fontWeight={900}
          letterSpacing={12}
        >
          ABOUT
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.text.primary}
          letterSpacing={4}
          fontWeight={400}
          zIndex={2}
        >
          The Basics Of Healthy Food
        </Typography>
      </Grid>

      <Grid container display={"flex"} mt={8} direction={"column"} alignItems={"center"}>
        <Typography
          fontSize={"16px"}
          textAlign={"center"}
          mx={12}
          letterSpacing={0.2}
        >
          In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea
          aliquip aliquip consectetur voluptate est. Eu minim dolore laboris
          enim mollit voluptate irure esse aliquip.
        </Typography>
        <Stack direction={"row"} alignItems={"center"} my={8}>
          <Button
            sx={{
              height: "50px",
            }}
          >
            <ArrowBack />
          </Button>
          <ImageList gap={40}>
            <img src="/foodImg.png" />

            <Box
              component={"img"}
              src="/foodImg2.png"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            />
          </ImageList>
          <Button
            sx={{
              height: "50px",
            }}
          >
            <ArrowForward />
          </Button>
        </Stack>
      </Grid>
    </Stack>
  );
}

export default About;
