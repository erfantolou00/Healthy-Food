import { Grid, Stack, Typography, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AppLogo from "./AppLogo";
import { useEffect, useState } from "react";

const AppNavbar = ( {value}) => {
  const theme = useTheme();
  
  const [groupFood, setGroupFood] = useState('')
useEffect(()=>{
   switch (value) {
    case '1': setGroupFood('Salad')
      
      break;
    case '2': setGroupFood('Pizza')
      
      break;
    case '3': setGroupFood('Pasta')
      
      break;
  
    default:
      break;
  }
},[value])
 

  
  
  const breadcrumbs = [
    <Link
      sx={{ textDecoration: "none", color: theme.palette.primary.light }}
      key="1"
      href="/Healthy-Food"
    >
      Home
    </Link>,
    <Link
      sx={{ textDecoration: "none", color: theme.palette.primary.light }}
      key="2"
      href="/Healthy-Food/DigitalMenu"
    >
      Digital Menu
    </Link>,
    <Typography color={theme.palette.primary.dark} key="3">
      {groupFood}
    </Typography>,
  ];
  return (
    <Grid
      container
      display={"flex"}
      py={10}
      gap={"50%"}
      justifyContent={"center"}
      alignItems={"flex-start"}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ color: theme.palette.primary.hint }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Stack direction={"row"} alignItems={"flex-end"}>
        <AppLogo />
      </Stack>
    </Grid>
  );
};

export default AppNavbar;
