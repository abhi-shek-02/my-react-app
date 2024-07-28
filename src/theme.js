// // src/theme.js
// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2", // Example color
//     },
//     secondary: {
//       main: "#dc004e", // Example color
//     },
//   },
//   typography: {
//     fontFamily: "Lato, sans-serif",
//   },
//   shape: {
//     borderRadius: 8, // Adjust according to your design
//   },
//   shadows: Array(25).fill("none"), // Default shadows if you want to customize
// });

// export default theme;

// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Define a theme with a professional and clean look suitable for a cab-booking service
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // A strong blue for primary actions
      light: "#63a4ff", // Light blue for hover states
      dark: "#004ba0", // Darker blue for active states
      contrastText: "#fff", // White text for readability on blue
    },
    secondary: {
      main: "#4caf50", // A fresh green for secondary actions
      light: "#80e27e", // Light green for hover states
      dark: "#087f23", // Darker green for active states
      contrastText: "#fff", // White text for readability on green
    },
    background: {
      default: "#f5f5f5", // Light grey background for the app
      paper: "#fff", // White background for paper components
    },
    text: {
      primary: "#333", // Dark grey for primary text
      secondary: "#666", // Medium grey for secondary text
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "0.75rem",
      color: "#666",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: Array(25).fill("none"), // Default shadows if needed
});

export default theme;
