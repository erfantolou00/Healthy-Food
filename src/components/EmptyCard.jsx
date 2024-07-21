import { Stack, Typography } from '@mui/material';
import React from 'react'

function EmptyCard() {
    return (
      <Stack sx={{ filter: "invert(1)" }} alignItems={"center"} width={"90%"}>
        <img src="/Healthy-Food/menuImg/fig-cart-empty.png" />
        <Typography>The shopping cart is empty</Typography>
      </Stack>
    );
  }

export default EmptyCard