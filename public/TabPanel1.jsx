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
import React, { useEffect, useReducer, useState } from "react";
import { dataMenuTab1 } from "../Data/dataMenuTab1";
import { dataMenuTab2 } from "../Data/dataMenuTab2";
import { dataMenuTab3 } from "../Data/dataMenuTab3";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment_food":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: item.count + 1, showCountCard: true }
          : item
      );
    case "decrement_food":
      return state.map((item) =>
        item.id === action.payload && item.count > 0
          ? {
              ...item,
              count: item.count - 1,
              showCountCard: item.count - 1 > 0,
            }
          : item
      );
    case "reset":
      return action.payload;
    default:
      throw new Error("Unknown action: " + action.type);
  }
};

function TabPanel1({ addFoodToCard, value, setCountItem }) {
  const theme = useTheme();
  const [dataMenu, setDataMenu] = useState(dataMenuTab1);

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

  // initialState for Reducer func
  const initialState = dataMenu.map((item) => ({
    ...item,
    count: 0,
    showCountCard: false,
  }));

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Update state when dataMenu changes
    dispatch({ type: "reset", payload: initialState });
  }, [dataMenu]);

  useEffect(() => {
    addFoodToCard(state);
  }, [state, addFoodToCard]);

  // Update state when dataMenu changes
  const handleIncremented = (item) => {
    dispatch({ type: "increment_food", payload: item });
    setCountItem((prevCount) => prevCount + 1); // Update countItem
  };

  const handleDecremented = (id) => {
    dispatch({ type: "decrement_food", payload: id });
    setCountItem((prevCount) => Math.max(prevCount - 1, 0)); // Ensure countItem doesn't go below 0
  };

  return (
    <TabPanel value={value}>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        gap={{ xs: 2 }}
      >
        {state.map((data) => (
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
                    handleIncremented(data);
                  }}
                  sx={{
                    mr: 2,
                    display: data.showCountCard ? "none" : "inline-flex",
                  }}
                >
                  <AddBox
                    color={theme.palette.secondary.dark}
                    fontSize="inherit"
                  />
                </IconButton>

                {/* Add or remove Button */}
                <Stack
                  display={data.showCountCard ? "flex" : "none"}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <IconButton onClick={() => handleDecremented(data.id)}>
                    <RemoveCircleRounded fontSize="small" />
                  </IconButton>

                  <Typography>{data.count}</Typography>

                  <IconButton
                    onClick={() => {
                      handleIncremented(data);
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