// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Example color
    },
    secondary: {
      main: "#dc004e", // Example color
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  shape: {
    borderRadius: 8, // Adjust according to your design
  },
  shadows: Array(25).fill("none"), // Default shadows if you want to customize
});

export default theme;
