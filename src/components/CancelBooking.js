import React, { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AppAppBar from "./AppAppBar";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import CustomModal from "./CustomModal"; // Import your custom modal component

// Custom futuristic theme
const futuristicTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff", // Teal
    },
    secondary: {
      main: "#00bcd4", // Pink
    },
    background: {
      default: "#090E10",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            backgroundColor: "#fff",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "& fieldset": {
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#00bcd4",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
          },
        },
      },
    },
  },
});

// Motion variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Toggle custom theme component
function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Button onClick={toggleCustomTheme} variant="contained" color="secondary">
        Toggle Custom Theme
      </Button>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

const CancelBooking = () => {
  const [mode, setMode] = useState("dark");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [bookingId, setBookingId] = useState(""); // State variable to store booking ID
  const [isLoading, setIsLoading] = useState(false); // State variable to manage loader visibility
  const [showModal, setShowModal] = useState(false); // State variable to manage modal visibility
  const defaultTheme = futuristicTheme;

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "dark" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const handleSubmit = async () => {
    // Show loader
    setIsLoading(true);

    try {
      // Make API call to cancel booking
      const response = await fetch(
        "https://bookings-uhs1.onrender.com/api/v1/booking/cancel",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: bookingId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }

      // Hide loader
      setIsLoading(false);

      // Show modal
      setShowModal(true);

      // Reset booking ID after successful submission
      setBookingId("");
    } catch (error) {
      console.error("Error:", error);
      // Hide loader
      setIsLoading(false);
      // Handle error (e.g., display error message to user)
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? defaultTheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 20 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" gutterBottom>
            Cancel Booking
          </Typography>
          <Divider sx={{ mb: 2 }} />
        </motion.div>
        <Box sx={{ mt: 4 }}>
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ duration: 0.8 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.8 }}
                >
                  <TextField
                    id="outlined-basic-name"
                    label="Booking ID"
                    size="small"
                    variant="outlined"
                    width="100%"
                    name="name"
                    value={bookingId}
                    onChange={(e) => setBookingId(e.target.value)}
                    required
                  />
                </motion.div>
              </Grid>
            </Grid>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
              transition={{ duration: 0.8 }}
              sx={{ mt: 2 }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </motion.div>
          </motion.form>
        </Box>
      </Container>
      <Footer />

      {/* Loader */}
      {isLoading && <div>Loading...</div>}

      {/* Modal */}
      <CustomModal open={showModal} onClose={closeModal} />
    </ThemeProvider>
  );
};

export default CancelBooking;
