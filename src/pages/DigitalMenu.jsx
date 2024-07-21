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
  AddCircleRounded,
  DinnerDining,
  LocalPizza,
  RemoveCircleRounded,
  Restaurant,
  RestaurantMenu,
} from "@mui/icons-material";
import TabPanel1 from "../components/TabPanel1";
import TabPanel2 from "../components/TabPanel2";
import ShoppingCard from "../components/ShoppingCard";
import TabPanel3 from "../components/TabPanel3";

function DigitalMenu() {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  //Handle Pass data between Child component
  const [foodData, setFoodData] = useState([]);
  const [hasFood, setHasFood] = useState(false);
  function handleFoodData(newFood) {
    setFoodData((foods) => [...foods, { ...newFood, count: 1 }]);
    setHasFood(true);
  }


  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

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
      <AppNavbar value={value} />

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

          <ShoppingCard
            foodData={foodData}
            setFoodData={setFoodData}
            hasFood={hasFood}
            setHasFood={setHasFood}
          />

          <Grid item xs={4} sm={4} md={8}>
            <TabPanel1 addFoodToCard={handleFoodData} />
            <TabPanel2 addFoodToCard={handleFoodData}/>
            <TabPanel3 addFoodToCard={handleFoodData} />
          </Grid>
        </Grid>
      </TabContext>
    </Container>
  );
}

export default DigitalMenu;
