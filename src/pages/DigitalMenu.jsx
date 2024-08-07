import React, { useReducer, useState } from "react";
import AppNavbar from "../components/AppNavBar";
import { Box, Container, Grid, Tab, useTheme } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { DinnerDining, LocalPizza, Restaurant } from "@mui/icons-material";
import TabPanel1 from "../components/TabPanel1";
import ShoppingCard from "../components/ShoppingCard";
import DrawerShoppingCard from "../components/DrawerShoppingCard";
import { foodReducer, initialState } from "../components/reducers/foodReducer";

function DigitalMenu() {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  // Use reducer for foodCart state management
  const [state, dispatch] = useReducer(foodReducer, initialState);
  console.log(state)

  // Handle count of item in the shopping card
  const countItem = state.foodCart.reduce((total, item) => total + item.count, 0);

  // Handle food data
  const foodData = state.foodCart;
  const hasFood = foodData.length > 0;

  // Change TabPanel by change Tabs
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // Handle function for toggle Drawer in xs, sm size
  const [showShop, setShowShop] = useState(false);
  function handleOpenDrawer() {
    setShowShop(true);
  }
  function handleCloseDrawer() {
    setShowShop(false);
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(/Healthy-Food/placeholder-vDark.png)`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
      }}
    >
      <AppNavbar
        value={value}
        countItem={countItem}
        handleOpenDrawer={handleOpenDrawer}
      />

      <TabContext value={value}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Salad" value="1" icon={<Restaurant />} />
            <Tab label="Pizza" value="2" icon={<LocalPizza />} />
            <Tab label="Pasta" value="3" icon={<DinnerDining />} />
          </TabList>
        </Box>
        <Grid display={"flex"} container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid
            item
            display={{ xs: "none", sm: "none", md: "flex" }}
            md={4}
            p={2}
            border={"2px solid grey"}
            borderRadius={"8px"}
            flexDirection={{ md: "column" }}
            maxWidth={{ xs: "100%", sm: "100%", md: "30%" }}
          >
            <ShoppingCard
              foodData={foodData}
              dispatch={dispatch}
              hasFood={hasFood}
              showShop={showShop}
              displayMd={{ xs: "none", sm: "none", md: "flex" }}
              displayXsSm={{ xs: "flex", sm: "flex", md: "none" }}
            />
          </Grid>

          <DrawerShoppingCard
            showShop={showShop}
            handleCloseDrawer={handleCloseDrawer}
            foodData={foodData}
            dispatch={dispatch}
            hasFood={hasFood}
          />

          <Grid item xs={4} sm={8} md={8}>
            <TabPanel1
              addFoodToCard={dispatch}
              value={value}
              countItem={countItem}
              dispatch={dispatch}
              foodData={foodData}
              hasFood={hasFood}
            />
          </Grid>
        </Grid>
      </TabContext>
    </Container>
  );
}

export default DigitalMenu;
