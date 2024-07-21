import { AddBox } from "@mui/icons-material";
import { TabPanel } from "@mui/lab";
import {
  Avatar,
  Fade,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { dataMenuTab1 } from "../Data/dataMenuTab1";

function TabPanel1({ addFoodToCard }) {
  const theme = useTheme();

  function sendFoodData(dataFood) {
    addFoodToCard(dataFood);
  }
  return (
    <TabPanel value="1">
      <Grid
        container
        display={"flex"}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent={"center"}
        gap={5}
      >
        {dataMenuTab1.map((data) => (
          <Grid
            key={data.id}
            container
            display={"flex"}
            item
            xs={4}
            sm={4}
            md={5}
            bgcolor={theme.palette.background.paper}
            columns={{ xs: 4, sm: 8, md: 12 }}
            borderRadius={2}
          >
            <Grid item xs={4} sm={4} md={4}>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title={data.desc}
              >
                <Avatar
                  alt={data.food}
                  src={data.src}
                  sx={{ width: 120, height: 120 }}
                  variant="rounded"
                />
              </Tooltip>
            </Grid>

            <Grid
              item
              display={"flex"}
              container
              direction={"column"}
              justifyContent={"center"}
              gap={"30%"}
              xs={4}
              sm={4}
              md={4}
            >
              <Typography color={theme.palette.primary.light}>
                {data.food}
              </Typography>

              <Typography color={theme.palette.primary.light}>
                {data.price}$
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              display={"flex"}
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
            >
              <IconButton
                aria-label="Add"
                size="large"
                onClick={() => sendFoodData(data)}
              >
                <AddBox
                  color={theme.palette.secondary.dark}
                  fontSize="inherit"
                />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </TabPanel>
  );
}

export default TabPanel1;
