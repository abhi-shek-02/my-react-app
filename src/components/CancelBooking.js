

import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AppAppBar from "./AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import CustomModal from "./CustomModal"; // Import your custom modal component
import TextField from "@mui/material/TextField";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Button onClick={toggleCustomTheme} variant="contained" color="primary">
        Toggle Custom Theme
      </Button>
    </Box>
  );
}

const CancelBooking = () => {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [bookingId, setBookingId] = useState(""); // State variable to store booking ID
  const [isLoading, setIsLoading] = useState(false); // State variable to manage loader visibility
  const [showModal, setShowModal] = useState(false); // State variable to manage modal visibility
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
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
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // Full height of the viewport
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" gutterBottom>
            Cancel Booking
          </Typography>
          <TextField
            label="Booking ID"
            variant="outlined"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            sx={{
              mt: 2,
              mb: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              //   width: 20,
            }}
            placeholder="Enter Booking ID"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Container>
      </Box>

      <Divider />
      <Footer />

      {/* Loader */}
      {isLoading && <div>Loading...</div>}

      {/* Modal */}
      <CustomModal open={showModal} onClose={closeModal} />
    </ThemeProvider>
  );
};

export default CancelBooking;
