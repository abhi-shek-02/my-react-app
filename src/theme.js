// // // import { createTheme } from "@mui/material/styles";

// // // // Define the existing professional and clean theme suitable for a cab-booking service
// // // const theme = createTheme({
// // //   palette: {
// // //     primary: {
// // //       main: "#1976d2", // A strong blue for primary actions
// // //       light: "#63a4ff", // Light blue for hover states
// // //       dark: "#004ba0", // Darker blue for active states
// // //       contrastText: "#fff", // White text for readability on blue
// // //     },
// // //     secondary: {
// // //       main: "#4caf50", // A fresh green for secondary actions
// // //       light: "#80e27e", // Light green for hover states
// // //       dark: "#087f23", // Darker green for active states
// // //       contrastText: "#fff", // White text for readability on green
// // //     },
// // //     background: {
// // //       default: "#f5f5f5", // Light grey background for the app
// // //       paper: "#fff", // White background for paper components
// // //     },
// // //     text: {
// // //       primary: "#333", // Dark grey for primary text
// // //       secondary: "#666", // Medium grey for secondary text
// // //     },
// // //   },
// // //   typography: {
// // //     fontFamily: "Lato, sans-serif",
// // //     h1: {
// // //       fontSize: "2.5rem",
// // //       fontWeight: 700,
// // //     },
// // //     h2: {
// // //       fontSize: "2rem",
// // //       fontWeight: 700,
// // //     },
// // //     h3: {
// // //       fontSize: "1.75rem",
// // //       fontWeight: 700,
// // //     },
// // //     h4: {
// // //       fontSize: "1.5rem",
// // //       fontWeight: 700,
// // //     },
// // //     h5: {
// // //       fontSize: "1.25rem",
// // //       fontWeight: 600,
// // //     },
// // //     h6: {
// // //       fontSize: "1rem",
// // //       fontWeight: 600,
// // //     },
// // //     body1: {
// // //       fontSize: "1rem",
// // //       fontWeight: 400,
// // //     },
// // //     body2: {
// // //       fontSize: "0.875rem",
// // //       fontWeight: 400,
// // //     },
// // //     caption: {
// // //       fontSize: "0.75rem",
// // //       color: "#666",
// // //     },
// // //   },
// // //   shape: {
// // //     borderRadius: 8,
// // //   },
// // //   shadows: Array(25).fill("none"), // Default shadows if needed
// // // });

// // // // Extend the theme with futuristic customizations
// // // const extendedTheme = createTheme(theme, {
// // //   components: {
// // //     MuiButton: {
// // //       styleOverrides: {
// // //         root: {
// // //           borderRadius: "20px",
// // //           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
// // //           "&:hover": {
// // //             backgroundColor: "#fff",
// // //             boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
// // //           },
// // //         },
// // //       },
// // //     },
// // //     MuiTextField: {
// // //       styleOverrides: {
// // //         root: {
// // //           borderRadius: "10px",
// // //           "& .MuiOutlinedInput-root": {
// // //             borderRadius: "10px",
// // //             "& fieldset": {
// // //               borderColor: "#fff",
// // //             },
// // //             "&:hover fieldset": {
// // //               borderColor: "#00bcd4",
// // //             },
// // //           },
// // //           "& .MuiInputLabel-root": {
// // //             color: "#fff",
// // //           },
// // //         },
// // //       },
// // //     },
// // //   },
// // // });

// // // export default extendedTheme;

// // // // Export the animations separately
// // // export const fadeIn = {
// // //   hidden: { opacity: 0 },
// // //   visible: { opacity: 1 },
// // // };

// // // export const slideUp = {
// // //   hidden: { opacity: 0, y: 20 },
// // //   visible: { opacity: 1, y: 0 },
// // // };

// // import { createTheme } from "@mui/material/styles";

// // // Define the existing professional and clean theme suitable for a cab-booking service
// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: "#1976d2", // A strong blue for primary actions
// //       light: "#63a4ff", // Light blue for hover states
// //       dark: "#004ba0", // Darker blue for active states
// //       contrastText: "#fff", // White text for readability on blue
// //     },
// //     secondary: {
// //       main: "#4caf50", // A fresh green for secondary actions
// //       light: "#80e27e", // Light green for hover states
// //       dark: "#087f23", // Darker green for active states
// //       contrastText: "#fff", // White text for readability on green
// //     },
// //     background: {
// //       default: "#f5f5f5", // Light grey background for the app
// //       paper: "#fff", // White background for paper components
// //     },
// //     text: {
// //       primary: "#333", // Dark grey for primary text
// //       secondary: "#666", // Medium grey for secondary text
// //     },
// //   },
// //   typography: {
// //     fontFamily: "Lato, sans-serif",
// //     h1: {
// //       fontSize: "2.5rem",
// //       fontWeight: 700,
// //     },
// //     h2: {
// //       fontSize: "2rem",
// //       fontWeight: 700,
// //     },
// //     h3: {
// //       fontSize: "1.75rem",
// //       fontWeight: 700,
// //     },
// //     h4: {
// //       fontSize: "1.5rem",
// //       fontWeight: 700,
// //     },
// //     h5: {
// //       fontSize: "1.25rem",
// //       fontWeight: 600,
// //     },
// //     h6: {
// //       fontSize: "1rem",
// //       fontWeight: 600,
// //     },
// //     body1: {
// //       fontSize: "1rem",
// //       fontWeight: 400,
// //     },
// //     body2: {
// //       fontSize: "0.875rem",
// //       fontWeight: 400,
// //     },
// //     caption: {
// //       fontSize: "0.75rem",
// //       color: "#666",
// //     },
// //   },
// //   shape: {
// //     borderRadius: 8,
// //   },
// //   shadows: Array(25).fill("none"), // Default shadows if needed
// // });

// // // Define the futuristic theme
// // const futuristicTheme = createTheme({
// //   palette: {
// //     mode: "dark",
// //     primary: {
// //       main: "#fff", // White for primary actions
// //     },
// //     secondary: {
// //       main: "#00bcd4", // Teal for secondary actions
// //     },
// //     background: {
// //       default: "#121212",
// //       paper: "#1e1e1e",
// //     },
// //   },
// //   typography: {
// //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
// //   },
// //   components: {
// //     MuiButton: {
// //       styleOverrides: {
// //         root: {
// //           borderRadius: "20px",
// //           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
// //           "&:hover": {
// //             backgroundColor: "#fff",
// //             boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
// //           },
// //         },
// //       },
// //     },
// //     MuiTextField: {
// //       styleOverrides: {
// //         root: {
// //           borderRadius: "10px",
// //           "& .MuiOutlinedInput-root": {
// //             borderRadius: "10px",
// //             "& fieldset": {
// //               borderColor: "#fff",
// //             },
// //             "&:hover fieldset": {
// //               borderColor: "#00bcd4",
// //             },
// //           },
// //           "& .MuiInputLabel-root": {
// //             color: "#fff",
// //           },
// //         },
// //       },
// //     },
// //   },
// // });

// // export { theme, futuristicTheme };

// // // Export the animations separately
// // export const fadeIn = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1 },
// // };

// // export const slideUp = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0 },
// // };

// import { createTheme } from "@mui/material/styles";

// // Define the futuristic theme
// const futuristicTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#fff", // White for primary actions
//     },
//     secondary: {
//       main: "#00bcd4", // Teal for secondary actions
//     },
//     background: {
//       default: "#121212",
//       paper: "#1e1e1e",
//     },
//   },
  // typography: {
  //   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  // },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: "20px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
//           "&:hover": {
//             backgroundColor: "#fff",
//             boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           borderRadius: "10px",
//           "& .MuiOutlinedInput-root": {
//             borderRadius: "10px",
//             "& fieldset": {
//               borderColor: "#fff",
//             },
//             "&:hover fieldset": {
//               borderColor: "#00bcd4",
//             },
//           },
//           "& .MuiInputLabel-root": {
//             color: "#fff",
//           },
//         },
//       },
//     },
//   },
// });

// export { futuristicTheme };

// theme.js
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

// Default theme
export const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  // Add other customizations here
});

// Futuristic theme
export const futuristicTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  // Add other customizations here
});

// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
