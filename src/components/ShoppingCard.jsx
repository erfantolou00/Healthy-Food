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
import React, { useState } from "react";
import AppLogo from "./AppLogo";
import {
  AddCircleRounded,
  Close,
  RemoveCircleRounded,
} from "@mui/icons-material";
import EmptyCard from "./EmptyCard";

function ShoppingCard({ foodData, setFoodData, hasFood, setHasFood ,displayMd ,showShop,displayXsSm }) {
  const theme = useTheme();
  const [closeItem, setCloseItem] = useState(false);
  const [open, setOpen] = useState(false);

  const tax = foodData.reduce(
    (sum, food) => sum + food.price * food.count * 0.1,
    0
  );

  const totalPrice = foodData.reduce(
    (sum, food) => sum + food.price * food.count,
    0
  );

  const dltOrder = (foodId) => {
    setFoodData((prevFoods) => {
      const updatedFoods = prevFoods.reduce((acc, food) => {
        if (food.id === foodId) {
          const updatedCount = food.count - 1;

          if (updatedCount > 0) {
            acc.push({ ...food, count: updatedCount });
          }
        } else {
          acc.push(food);
        }
        return acc;
      }, []);

      if (updatedFoods.length === 0) {
        setHasFood(false);
      }

      return updatedFoods;
    });
  };

  const addOrder = (foodId) => {
    setFoodData((prevFoods) => {
      const updatedFoods = prevFoods.map((food) => {
        if (food.id === foodId) {
          return { ...food, count: food.count + 1 };
        }
        return food;
      });

      return updatedFoods;
    });
  };

  function handleCloseEnter() {
    setCloseItem(true);
  }
  function handleCloseLeave() {
    setCloseItem(false);
  }

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
    <Grid
      item
      xs={4}
      sm={4}
      md={4}
      p={4}
      border={"2px solid grey"}
      borderRadius={"8px"}
      display={showShop ? displayXsSm : displayMd}
      flexDirection={'column'}
      maxWidth={{xs: '100%' , sm: '100%', md:'30%' }}
      
    >
      {/* Conditions based on the number of products in the shopping cart */}

      {hasFood ? (
        // Purchase information card
        <Stack >
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
                      onClick={() => dltOrder(data.id)}
                    >
                      <Close fontSize="inherit" />
                    </IconButton>
                    {data.food}
                  </Typography>
                  <Typography color={theme.palette.primary.light}>
                    {+data.price * data.count}$
                  </Typography>
                </Stack>

                <Stack direction={"row"} alignItems={"center"}>
                  <IconButton onClick={() => dltOrder(data.id)}>
                    <RemoveCircleRounded fontSize="small" />
                  </IconButton>

                  <Typography>{data.count}</Typography>

                  <IconButton onClick={() => addOrder(data.id)}>
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
                The order was placed. Enjoy your meal😊
              </Alert>
            </Snackbar>
          </Stack>
        </Stack>
      ) : (
        // When there is nothing in the shopping cart
        <EmptyCard />
      )}
    </Grid>
  );
}

export default ShoppingCard;
