import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { OrderButton } from "./OrderButton";

import { dataCard } from "../Data/dataCard";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

function Dishes() {
  const theme = useTheme();

  return (
    <Box mx={6} id="target-section-Menu">
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
          DISHES
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.text.primary}
          letterSpacing={5}
          fontWeight={400}
          zIndex={2}
        >
          Dish Of The Day
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
        display={"flex"}
        container
        spacing={3}
        mt={6}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent={"center"}
      >
        {dataCard.map((item) => (
          <React.Fragment key={item.id}>
            <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ width: "auto" }}>
                <CardActionArea>
                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      bgcolor: '#19191987',
                      border:`1px solid ${theme.palette.primary.light}`,
                      m:1,
                      right:0
                      
                    }}
                  >
                    <SvgIcon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={theme.palette.primary.light}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.6 8.79998V5.59998L19.2 11.2L13.6 16.8V13.52C9.60001 13.52 6.80001 14.8 4.80001 17.6C5.60001 13.6 8.00001 9.59998 13.6 8.79998Z"
                          fill="white"
                          stroke={theme.palette.primary.light}
                          strokeWidth='1'
                        />
                      </svg>
                    </SvgIcon>
                  </IconButton>
                  <CardMedia
                    component="img"
                    height="260px"
                    image={item.src}
                    alt="Food Photo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize={theme.typography.caption}
                      color={theme.palette.text.disabled}
                      mt={0}
                    >
                      {item.subtitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={theme.palette.text.disabled}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  <StarRating
                    maxRating={5}
                    size={24}
                    color={theme.palette.primary.light}
                  />
                  <Link to='/Healthy-Food/DigitalMenu'>
                  <OrderButton
                    sx={{
                      p: "12px 28px",
                      letterSpacing: 0.1,
                      bgcolor: theme.palette.background.paper,
                      color: theme.palette.text.disabled,
                      border: `2px solid #323232`,
                      fontSize: "10px",
                    }}
                  >
                    ORDER
                  </OrderButton></Link>
                </CardActions>
              </Card>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}

export default Dishes;
