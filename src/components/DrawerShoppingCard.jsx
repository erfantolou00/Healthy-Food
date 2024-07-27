import { Box, Button, Drawer, Modal, Stack, useTheme } from "@mui/material";
import React, { useState } from "react";
import ShoppingCard from "./ShoppingCard";

function DrawerShoppingCard({
  showShop,
  handleCloseDrawer,
  foodData,
  setFoodData,
  hasFood,
  setHasFood,
}) {
  const theme = useTheme()
  return (
    <Stack display={{ md: "none" }} >
      <Drawer
        open={showShop}
        onClose={handleCloseDrawer}
        
      >
        <Box width={"350px"} bgcolor={theme.palette.background.paper}>
          <ShoppingCard
            foodData={foodData} 
            setFoodData={setFoodData}
            hasFood={hasFood}
            setHasFood={setHasFood}
            showShop={showShop}
          />
        </Box>
      </Drawer>
    </Stack>
  );
}

export default DrawerShoppingCard;
