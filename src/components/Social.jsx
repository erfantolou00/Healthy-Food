import {
  Box,
  Chip,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { itemData } from "../Data/itemData";

function Social() {
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
          SOCIAL
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.text.primary}
          letterSpacing={5}
          fontWeight={400}
          zIndex={2}
        >
          We in Social
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

      <Grid  display={'flex'} container justifyContent={'center'} gap={2} columns={{ xs: 4, sm: 8, md: 13 }}>
        <Grid item xs={4} sm={8} md={4}
          bgcolor={theme.palette.background.paper}
          borderRadius={2}
          p={2}
          maxWidth={"380px"}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={3}
          >
            <Stack direction={"row"} gap={3} alignItems={"center"}>
              <TwitterIcon
                sx={{
                  border: `1px solid #616161`,
                  borderRadius: 50,
                  p: "4px",
                  fontSize: "36px",
                  color: theme.palette.primary.light,
                }}
              />
              <Typography fontSize={theme.typography.caption}>
                Twitter
              </Typography>
            </Stack>
            <Chip
              label="Follow Us"
              variant="outlined"
              sx={{ fontSize: "10px", letterSpacing: 2,  }}
              clickable
              href="/"
              color="success"
            />
          </Stack>

          <Divider />

          <Stack mt={3} gap={3}>
            <Typography fontSize={14} color={theme.palette.text.disabled}>
              24 Jun at 16:20 pm
            </Typography>
            <Typography color={theme.palette.text.primary}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
              consectetur adipiscing
            </Typography>
            <Typography color={theme.palette.text.secondary}>
              @DennisFerguson
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={4} sm={8} md={4}
          bgcolor={theme.palette.background.paper}
          borderRadius={2}
          p={2}
          maxWidth={"380px"}
          maxHeight={"350px"}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={3}
          >
            <Stack direction={"row"} gap={3} alignItems={"center"}>
              <InstagramIcon
                sx={{
                  border: `1px solid #616161`,
                  borderRadius: 50,
                  p: "4px",
                  fontSize: "36px",
                  color: theme.palette.primary.light,
                }}
              />
              <Typography fontSize={theme.typography.caption}>
                Instagram
              </Typography>
            </Stack>
            <Chip
              label="Follow Us"
              variant="outlined"
              sx={{ fontSize: "10px", letterSpacing: 2 }}
              clickable
              href="/"
              color="success"
            />
          </Stack>

          <Divider />

          <Stack>
            <ImageList
              sx={{ width: "100%", height: "220px" }}
              cols={3}
              rowHeight={100}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </Grid>

        <Grid item xs={4} sm={8} md={4}
          bgcolor={theme.palette.background.paper}
          borderRadius={2}
          p={2}
          maxWidth={"380px"}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={3}
          >
            <Stack direction={"row"} gap={3} alignItems={"center"}>
              <FacebookOutlinedIcon
                sx={{
                  border: `1px solid #616161`,
                  borderRadius: 50,
                  p: "4px",
                  fontSize: "36px",
                  color: theme.palette.primary.light,
                }}
              />
              <Typography fontSize={theme.typography.caption}>
                Facebook
              </Typography>
            </Stack>
            <Chip
              label="Follow Us"
              variant="outlined"
              sx={{ fontSize: "10px", letterSpacing: 2 }}
              clickable
              href="/"
              color="success"
            />
          </Stack>

          <Divider />

          <Stack mt={3} gap={3}>
            <Typography fontSize={14} color={theme.palette.text.disabled}>
              24 Jun at 16:20 pm
            </Typography>
            <Typography color={theme.palette.text.primary}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
              consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Social;
