import React, { useState } from "react";
import AppNavbar from "../components/AppNavBar";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tab,
  Typography,
  useTheme,
} from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  AddBox,
  DinnerDining,
  LocalPizza,
  RemoveCircleRounded,
  Restaurant,
  RestaurantMenu,
} from "@mui/icons-material";
import TabPanel1 from "../components/TabPanel1";
import ShoppingCard from "../components/ShoppingCard";
import DrawerShoppingCard from "../components/DrawerShoppingCard";

function DigitalMenu() {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  //state toggle shopping card in xs, sm size
  const [showShop, setShowShop] = useState(false);

  //Handle Count of item in the shopping card
  const [countItem, setCountItem] = useState(0);

  //Handle Pass data between Child component
  const [foodData, setFoodData] = useState([]);
  const [hasFood, setHasFood] = useState(false);

  const displayMd = {xs:'none' , sm: 'none' , md: 'flex'}
  const displayXsSm = {xs:'flex' , sm: 'flex' , md: 'none'}


  function handleFoodData(newFood) {
    setFoodData((foods) => [...foods, { ...newFood, count: 1 , showCountCard: false}]);
    setHasFood(true);
  }

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  //Handle function for toggle Drawer in xs, sm size
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
        <Grid display={"flex"} container columns={{ xs: 4, sm: 8, md: 12 }} >
          <ShoppingCard
            foodData={foodData}
            setFoodData={setFoodData}
            hasFood={hasFood}
            setHasFood={setHasFood}
            showShop={showShop}
            displayMd={displayMd}
            displayXsSm={displayXsSm}
          />

          <DrawerShoppingCard
            showShop={showShop}
            handleCloseDrawer={handleCloseDrawer}
            foodData={foodData}
            setFoodData={setFoodData}
            hasFood={hasFood}
            setHasFood={setHasFood}
          />

          <Grid item xs={4} sm={8} md={8}>
            <TabPanel1
              addFoodToCard={handleFoodData}
              value={value}
              countItem={countItem}
              setCountItem={setCountItem}
              setFoodData={setFoodData}
              foodData={foodData}
              
            />
          </Grid>
        </Grid>
      </TabContext>
    </Container>
  );
}

export default DigitalMenu;
