import { Stack, Typography, useTheme } from "@mui/material";
import { OrderButton } from "./OrderButton";

export default function Title() {
  const theme = useTheme();
  return (
    <Stack alignItems={"center"} mt={10}>
      <Typography
        variant="h3"
        letterSpacing={4}
        fontWeight={300}
        textAlign={"center"}
      >
        Your <b> Favourite Food</b> <br /> Delivered <b>Hot & Fresh</b>
      </Typography>
      <Typography
        fontSize={theme.typography.caption}
        mx={40}
        fontWeight={300}
        letterSpacing={0.1}
      >
        HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping &
        <br />
        marinating, so you can cook a fresh homemade dinner in just 15 minutes.
      </Typography>
      <OrderButton
        sx={{
          mt: 6,
          p: "16px 36px",
        }}
      >
        Order Now
      </OrderButton>
    </Stack>
  );
}
