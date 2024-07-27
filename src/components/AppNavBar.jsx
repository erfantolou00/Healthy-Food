import {
  Badge,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AppLogo from "./AppLogo";
import { useEffect, useState } from "react";
import { ShoppingCart } from "@mui/icons-material";

const AppNavbar = ({ value, countItem ,handleOpenDrawer}) => {
  const theme = useTheme();

  const [groupFood, setGroupFood] = useState("");

  useEffect(() => {
    switch (value) {
      case "1":
        setGroupFood("Salad");

        break;
      case "2":
        setGroupFood("Pizza");

        break;
      case "3":
        setGroupFood("Pasta");

        break;

      default:
        break;
    }
  }, [value]);

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

      <Stack alignItems={"center"}>
        <Stack direction={"row"} alignItems={"flex-end"}>
          <AppLogo />
        </Stack>
        <Stack
          display={{ xs: "flex", sm: "flex", md: "none" }}
          direction={"row"}
          alignItems={"flex-end"}
          mt={4}
        >
          <IconButton aria-label="cart" onClick={handleOpenDrawer}>
            <Badge
              sx={{ color: theme.palette.primary.dark }}
              badgeContent={countItem}
            >
              <ShoppingCart
                fontSize="large"
                sx={{ color: theme.palette.primary.light }}
              />
            </Badge>
          </IconButton>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default AppNavbar;
