import {
  Box,
  Button,
  Grid,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import AppLogo from "./AppLogo";

const itemHeader = ["Menu", "Recipes", "Chefs", "contacts"];

export default function Header() {
  const theme = useTheme();

  const color = theme.palette;

  return (
    <Box  columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid
        display={"flex"}
        gap={'20%'}
        py={"24px"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        item
        xs={2}
        sm={4}
        md={3}
      >
        <Stack direction={"row"} alignItems={"flex-end"}>
          <AppLogo />
          
        </Stack>
        <Stack direction={"row"}>
          {itemHeader.map((item) => (
            <Button
              key={item}
              href={`#target-section-${item}`}
              sx={{
                color:
                  item === "Menu" ? color.text.secondary : color.text.primary,
                fontWeight: 700,
                fontSize: theme.typography.caption,
                letterSpacing: 0.1,
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Grid>
    </Box>
  );
}
