import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Recipes() {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={16}
         id="target-section-Recipes"
      >
        <Typography
          variant="h1"
          position={"absolute"}
          color={theme.palette.text.hint}
          fontWeight={900}
          letterSpacing={2}
        >
          RECIPES
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.text.primary}
          letterSpacing={5}
          fontWeight={400}
          zIndex={2}
        >
          Recipes From Our Chefs
        </Typography>
      </Grid>

      <Divider
        sx={{
          width: "60px",
          height: 2,
          position: "relative",
          left: "46.5%",
          my: 9,
          bgcolor: theme.palette.primary.dark,
        }}
      />
      <Grid container display={"flex"} justifyContent={'center'}  gap={2} columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid item xs={4} sm={4} md={5}
          sx={{
            backgroundImage: 'url("/Healthy-Food/recepImg/placeholder (6).png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "70%",
          }}
        >
          <Stack alignItems={'flex-end'} mr={2} >
            <ArrowBackIcon
              fontSize="large"
              sx={{
                m: 2,
                border: `2px solid ${theme.palette.primary.dark}`,
                borderRadius: "50%",
                color: theme.palette.primary.dark,
                background: `#19191982`,
              }}
            />
          </Stack>
          <Stack alignItems={"center"} gap={6} px={15}>
            <Button
              variant="outlined"
              sx={{
                bgcolor: theme.palette.background.default,
                color: "white",
                border: `1px solid ${theme.palette.primary.dark}`,
                borderRadius: 0,

                fontSize: "10px",
                letterSpacing: 1,
              }}
            >
              BREAKFAST
            </Button>
            <Typography
              fontSize={theme.typography.caption}
              color={theme.palette.text.disabled}
            >
              07 Jan 2016
            </Typography>
            <Typography textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Typography
              fontSize={theme.typography.caption}
              color={theme.palette.text.disabled}
            >
              Jason Keller
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <Chip
                icon={<VisibilityIcon />}
                label="270"
                color="default"
                variant="outlined"
              />
              <Chip
                icon={<QuestionAnswerIcon />}
                label="10"
                color="default"
                variant="outlined"
              />
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={4} sm={4} md={5}>
          <Grid
            bgcolor={theme.palette.background.paper}
            pt={4}
            px={3}
            pb={2}
            borderRadius={2}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              mt={2}
              alignItems={"center"}
              gap={3}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: theme.palette.background.default,
                    color: "white",
                    border: `1px solid ${theme.palette.primary.dark}`,
                    borderRadius: 0,

                    fontSize: "10px",
                    letterSpacing: 3,
                  }}
                >
                  LUNCH
                </Button>
                <Typography
                  fontSize={theme.typography.caption}
                  color={theme.palette.text.disabled}
                >
                  07 Jan 2016
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <Chip
                  icon={<VisibilityIcon />}
                  label="270"
                  color="success"
                  variant="outlined"
                />
                <Chip
                  icon={<QuestionAnswerIcon />}
                  label="10"
                  color="success"
                  variant="outlined"
                />
              </Stack>
            </Grid>
          </Grid>

          <Grid
            sx={{
              backgroundImage: 'url("/Healthy-Food/recepImg/placeholder (7).png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            p={4}
            borderRadius={2}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              mt={2}
              alignItems={"center"}
              gap={3}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: theme.palette.background.default,
                    color: "white",
                    border: `1px solid ${theme.palette.primary.dark}`,
                    borderRadius: 0,
                    fontSize: "10px",
                    letterSpacing: 3,
                  }}
                >
                  DINNER
                </Button>
                <Typography
                  fontSize={theme.typography.caption}
                  color={theme.palette.text.disabled}
                >
                  07 Jan 2016
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <Chip
                  icon={<VisibilityIcon />}
                  label="270"
                  color="success"
                  variant="outlined"
                />
                <Chip
                  icon={<QuestionAnswerIcon />}
                  label="10"
                  color="success"
                  variant="outlined"
                />
              </Stack>
            </Grid>
          </Grid>

          <Grid
            bgcolor={theme.palette.primary.dark}
            pt={4}
            px={3}
            pb={2}
            borderRadius={2}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </Typography>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              mt={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: theme.palette.background.default,
                    color: "white",
                    border: `1px solid ${theme.palette.primary.dark}`,
                    borderRadius: 0,

                    fontSize: "10px",
                    letterSpacing: 3,
                  }}
                >
                  SWEETS
                </Button>
                <Typography
                  fontSize={theme.typography.caption}
                  color={theme.palette.text.disabled}
                >
                  07 Jan 2016
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <Chip
                  icon={<VisibilityIcon />}
                  label="270"
                  color="success"
                  variant="outlined"
                />
                <Chip
                  icon={<QuestionAnswerIcon />}
                  label="10"
                  color="success"
                  variant="outlined"
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Recipes;
