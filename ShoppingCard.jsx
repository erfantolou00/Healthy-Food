import {
  Alert,
  Button,
  Divider,
  Fade,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import AppLogo from "./AppLogo";
import {
  AddCircleRounded,
  Close,
  RemoveCircleRounded,
} from "@mui/icons-material";
import EmptyCard from "./EmptyCard";

function ShoppingCard({
  foodData,
  setFoodData,
  hasFood,
  setHasFood,
  displayMd,
  showShop,
  displayXsSm,
  setCountItem
}) {
  const theme = useTheme();
  const [closeItem, setCloseItem] = useState(false);
  const [open, setOpen] = useState(false);

  // Update Price & Tax
  const tax = foodData.reduce(
    (sum, food) => sum + food.price * food.count * 0.1,
    0
  );
  const totalPrice = foodData.reduce(
    (sum, food) => sum + food.price * food.count,
    0
  );

   // Update add & remove items
  const handleDecremented = (foodId) => {
    const updatedFoods = foodData.map((food) => {
      if (food.id === foodId && food.count > 0) {
        return { ...food, count: food.count - 1 };
      }
      return food;
    }).filter(food => food.count > 0);

    setFoodData(updatedFoods);
    setHasFood(updatedFoods.length > 0);
    setCountItem((prevCount) => prevCount - 1); // update countItem
  };

  const handleIncremented = (foodId) => {
    const updatedFoods = foodData.map((food) => {
      if (food.id === foodId) {
        return { ...food, count: food.count + 1 };
      }
      return food;
    });

    setFoodData(updatedFoods);
    setCountItem((prevCount) => prevCount + 1); // update countItem
  };

  // Controlling the mouse event on items
  function handleCloseEnter() {
    setCloseItem(true);
  }
  function handleCloseLeave() {
    setCloseItem(false);
  }

  // Control click on the order button
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container display={showShop ? displayXsSm : displayMd} direction={"column"}>
      {hasFood ? (
        <Stack>
          <Stack mb={3} p={3}>
            <Stack direction={"row"} alignItems={"flex-end"}>
              <AppLogo />
            </Stack>
            <Button sx={{ justifyContent: "flex-start" }}>see menu</Button>
          </Stack>
          <Divider />

          {foodData.map((data) => (
            <React.Fragment key={data.id}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                onMouseEnter={handleCloseEnter}
                onMouseLeave={handleCloseLeave}
                p={2}
              >
                <Stack>
                  <Typography color={theme.palette.primary.light}>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      sx={{ display: closeItem ? "inline-block" : "none" }}
                      onClick={() => handleDecremented(data.id)}
                    >
                      <Close fontSize="inherit" />
                    </IconButton>
                    {data.food}
                  </Typography>
                  <Typography color={theme.palette.primary.light}>
                    {data.price * data.count}$
                  </Typography>
                </Stack>

                <Stack direction={"row"} alignItems={"center"}>
                  <IconButton onClick={() => handleDecremented(data.id)}>
                    <RemoveCircleRounded fontSize="small" />
                  </IconButton>

                  <Typography>{data.count}</Typography>

                  <IconButton onClick={() => handleIncremented(data.id)}>
                    <AddCircleRounded fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
              <Divider />
            </React.Fragment>
          ))}

          <Stack direction={"row"} justifyContent={"space-between"} p={2}>
            <Typography color={theme.palette.primary.light}>Tax</Typography>
            <Typography color={theme.palette.primary.light}>{tax}$</Typography>
          </Stack>
          <Divider />
          <Stack direction={"row"} justifyContent={"space-between"} p={2}>
            <Typography color={theme.palette.primary.light}>
              Total Price
            </Typography>
            <Typography color={theme.palette.primary.light}>
              {totalPrice + tax}$
            </Typography>
          </Stack>
          <Divider />
          <Stack p={1} mt={4}>
            <Button onClick={handleClick}>ordered</Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              transitionDuration={1000}
              TransitionComponent={Fade}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                The order was placed. Enjoy your meal
              </Alert>
            </Snackbar>
          </Stack>
        </Stack>
      ) : (
        <EmptyCard />
      )}
    </Grid>
  );
}

export default ShoppingCard;
