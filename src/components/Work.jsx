import {
  Box,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { dataCardWork } from "../Data/dataCardWork";

function Work() {
  const theme = useTheme();
  const color = theme.palette;
  const [selectedId, setSelectedId] = useState(null);

  function bgcolorHandler(id) {
    setSelectedId(selectedId === id ? null : id);
  }
  return (
    <Box mx={7}>
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
          letterSpacing={2}
        >
          WORK
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.text.primary}
          letterSpacing={5}
          fontWeight={400}
          zIndex={2}
        >
          How It Works
        </Typography>
      </Grid>

      <Divider
        sx={{
          width: "60px",
          height: 2,
          position: "relative",
          left: "46.5%",
          mt: 9,
          bgcolor: theme.palette.primary.dark,
        }}
      />

      <Grid
        container
        mt={8}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={5}
        justifyContent={"center"}
        gap={1}
      >
        {dataCardWork.map((item) => (
          <Stack key={item.id}>
            <Grid item xs={2} sm={4} md={3}>
              <Card
                sx={{
                  bgcolor:
                    item.title === selectedId
                      ? color.primary.main
                      : color.secondary.contrastText,

                  height: "200px",
                  width: "250px",
                }}
                onMouseEnter={() => bgcolorHandler(item.title)}
                onMouseLeave={() => bgcolorHandler(item.title)}
              >
                <Typography
                  variant="h6"
                  p={2}
                  fontWeight={400}
                  color={
                    item.title === selectedId
                      ? theme.palette.text.black
                      : theme.palette.text.primary
                  }
                >
                  {item.title}
                </Typography>
                <Divider
                  sx={{
                    width: "60px",
                    height: 2,
                    position: "relative",
                    left: "7%",

                    bgcolor:
                      item.title === selectedId
                        ? color.primary.contrastText
                        : color.primary.main,
                  }}
                />
                <Typography
                  sx={{
                    color:
                      item.title === selectedId
                        ? theme.palette.text.black
                        : theme.palette.text.hint,
                    fontSize: theme.typography.caption,
                    p: 2,
                    letterSpacing: 0.1,
                  }}
                >
                  {item.desc}
                </Typography>
              </Card>
            </Grid>
          </Stack>
        ))}
      </Grid>
    </Box>
  );
}

export default Work;
