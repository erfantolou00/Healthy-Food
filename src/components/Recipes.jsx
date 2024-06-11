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
      <Grid display={"flex"} gap={2}>
        <Box
          sx={{
            backgroundImage: 'url("/recepImg/placeholder (6).png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
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
        </Box>

        <Stack gap={2.7}>
          <Box
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
          </Box>

          <Box
            sx={{
              backgroundImage: 'url("/recepImg/placeholder (7).png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
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
          </Box>

          <Box
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
          </Box>
        </Stack>
      </Grid>
    </React.Fragment>
  );
}

export default Recipes;
