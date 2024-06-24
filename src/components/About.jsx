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
import React, { useState } from "react";

const dataSlider = [
  { id: 0, src: "/Healthy-Food/foodImg.png" },
  { id: 1, src: "/Healthy-Food/foodImg2.png" },
  { id: 2, src: "/Healthy-Food/placeholder (1).png" },
  { id: 3, src: "/Healthy-Food/placeholder (2).png" },
];

function About() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextIndexHandler() {
    const newIndex = (currentIndex + 1) % dataSlider.length;
    setCurrentIndex(newIndex);
  }
  function prevIndexHandler() {
    const newIndex = (currentIndex - 1) % dataSlider.length;
    setCurrentIndex(newIndex);
  }
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

      <Grid
        container
        display={"flex"}
        mt={8}
        direction={"column"}
        alignItems={"center"}
      >
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
        <Grid display={"flex"} alignItems={"center"} my={8}>
          <Button
            sx={{
              height: "50px",
            }}
            onClick={prevIndexHandler}
          >
            <ArrowBack />
          </Button>
          <Grid display={"flex"} justifyContent={"center"} gap={4}>
            {dataSlider.slice(currentIndex, currentIndex + 2).map((slide) => (
              <React.Fragment key={slide.id}>
                {currentIndex + 2 <= dataSlider.length || currentIndex > 0 ? (
                  <Grid
                    component={"img"}
                    src={slide.src}
                    sx={{
                      maxWidth: "40%",
                    }}
                  />
                  
                ) : (
                  console.log('fdg')
                )}
              </React.Fragment>
            ))}
          </Grid>
          <Button
            sx={{
              height: "50px",
            }}
            onClick={nextIndexHandler}
          >
            <ArrowForward />
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default About;
