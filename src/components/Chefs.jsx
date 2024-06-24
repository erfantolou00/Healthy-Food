import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { dataCardChefs } from "../Data/dataCardChefs";

function Chefs() {
  const theme = useTheme();
  return (
    <Box id="target-section-Chefs">
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
          CHEFS
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.text.primary}
          letterSpacing={5}
          fontWeight={400}
          zIndex={2}
        >
          This month&apos;s chefs
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
        display={"flex"}
        gap={3}
        justifyContent={"center"}
        mt={9}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {dataCardChefs.map((item) => (
          <Grid key={item.id} item xs={2} sm={4} md={3}>
            <Grid display={"flex"} gap={3} alignItems={"center"}>
              <Avatar
                alt="Chef"
                src={item.avatarImg}
                sx={{ width: 65, height: 65 }}
              />
              <Stack>
                <Typography>{item.name}</Typography>
                <Typography
                  fontSize={theme.typography.caption}
                  fontWeight={400}
                  color={theme.palette.text.disabled}
                >
                  {item.sub}
                </Typography>
              </Stack>
            </Grid>
            <ImageList>
              <ImageListItem sx={{ flexDirection: "row", gap: 1 }}>
                <img src={item.bigImg} />
                <img src={item.imgs} />
                <img src={item.imgs2} />
              </ImageListItem>
            </ImageList>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Chefs;
