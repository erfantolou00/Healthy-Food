import { Button, styled } from "@mui/material";


export const OrderButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  
  borderRadius: "30px",
  fontWeight: 700,
  letterSpacing: 3,
  backgroundColor: "#34C759",
  color: "#191919",

  fontFamily: [
    '"Helvetica Neue"',
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",

    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: '#028c2a',

  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "rgb(76 252 121)",
    
  },
  
});

