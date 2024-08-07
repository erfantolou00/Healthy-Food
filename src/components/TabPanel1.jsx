import {
  AddBox,
  AddCircleRounded,
  RemoveCircleRounded,
} from "@mui/icons-material";
import { TabPanel } from "@mui/lab";
import {
  Avatar,
  Fade,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { dataMenuTab1 } from "../Data/dataMenuTab1";
import { dataMenuTab2 } from "../Data/dataMenuTab2";
import { dataMenuTab3 } from "../Data/dataMenuTab3";

function TabPanel1({ value, dispatch, foodData }) {
  const theme = useTheme();
  const [dataMenu, setDataMenu] = useState(dataMenuTab1);
  const [addedItems, setAddedItems] = useState({});

  useEffect(() => {
    switch (value) {
      case "1":
        setDataMenu(dataMenuTab1);
        break;
      case "2":
        setDataMenu(dataMenuTab2);
        break;
      case "3":
        setDataMenu(dataMenuTab3);
        break;
      default:
        break;
    }
  }, [value]);

  // Update local state when dataMenu changes
  useEffect(() => {
    const initialAddedItems = {};
    dataMenu.forEach((item) => {
      initialAddedItems[item.id] = foodData.some((fd) => fd.id === item.id);
    });
    setAddedItems(initialAddedItems);
  }, [dataMenu, foodData]);

  const handleAddFood = (food) => {
    dispatch({ type: "ADD_FOOD", payload: food });
    setAddedItems((prevState) => ({
      ...prevState,
      [food.id]: true,
    }));
  };

  const handleIncrement = (foodItem) => {
    dispatch({ type: 'ADD_FOOD', payload: foodItem });
  };

  const handleDecrement = (foodItem) => {
    dispatch({ type: 'REMOVE_FOOD', payload: foodItem });
    if (foodItem.count === 1) {
      setAddedItems((prevState) => ({
        ...prevState,
        [foodItem.id]: false,
      }));
    }
  };

  return (
    <TabPanel value={value}>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        gap={{ xs: 2 }}
      >
        {dataMenu.map((data) => (
          <Grid
            key={data.id}
            container
            display={"flex"}
            item
            xs={10}
            sm={5}
            md={5}
            bgcolor={theme.palette.background.paper}
            flexWrap={"nowrap"}
            borderRadius={2}
            gap={2}
          >
            <Grid item>
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
              gap={3}
            >
              <Typography color={theme.palette.primary.light}>
                {data.food}
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography color={theme.palette.primary.light}>
                  {data.price}$
                </Typography>

                {/* Main Button */}
                <IconButton
                  aria-label="Add"
                  size="medium"
                  onClick={() => {
                    handleAddFood(data);
                  }}
                  sx={{
                    mr: 2,
                    display: addedItems[data.id] ? "none" : "inline-flex",
                  }}
                >
                  <AddBox
                    color={theme.palette.secondary.dark}
                    fontSize="inherit"
                  />
                </IconButton>

                {/* Add or remove Button */}
                <Stack
                  display={addedItems[data.id] ? "flex" : "none"}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <IconButton onClick={() => handleDecrement(data)}>
                    <RemoveCircleRounded fontSize="small" />
                  </IconButton>

                  <Typography>{foodData.find(item => item.id === data.id)?.count || 0}</Typography>

                  <IconButton
                    onClick={() => {
                      handleIncrement(data);
                    }}
                  >
                    <AddCircleRounded fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </TabPanel>
  );
}

export default TabPanel1;
