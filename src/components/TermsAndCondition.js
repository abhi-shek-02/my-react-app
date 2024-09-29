import React, { useState } from "react";
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
import CustomModal from "./CustomModal"; // Import your custom modal component
import TextField from "@mui/material/TextField";
import { Player } from "@lottiefiles/react-lottie-player"; // Import Lottie Player
import termsAnimation from "../assets/l1.json"; // Import a Lottie animation for terms

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

const TermsAndCondition = () => {
  const [mode, setMode] = useState("dark");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [bookingId, setBookingId] = useState(""); // State variable to store booking ID
  const [isLoading, setIsLoading] = useState(false); // State variable to manage loader visibility
  const [showModal, setShowModal] = useState(false); // State variable to manage modal visibility
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "dark" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
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

      setIsLoading(false);
      setShowModal(true);
      setBookingId("");
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container
      sx={{
        mt: {
          xs: 25, // margin-top 20 for mobile devices (xs and below)
          sm: 10, // margin-top 10 for larger screens (sm and up)
        },
      }}
    >
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
          <Typography variant="h4" sx={{ color: "#095ff0", mt: 1 }}>
            Terms of Use
          </Typography>
          <Player
            autoplay
            loop
            src={termsAnimation} // Lottie animation for terms
            style={{ height: "300px", width: "100%", marginTop: "20px" }}
          />

          <Typography variant="subtitle1" gutterBottom sx={{ mt: 4 }}>
            Effective Date: 19th August, 2022
          </Typography>
          <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" gutterBottom>
                Welcome to ZingCab! ZingCab is owned by ZingCab OPC Private
                Limited and any reference herein to ZingCab, its application,
                website or services shall be deemed to have a reference to
                ZingCab OPC Private Limited (“ZingCab”, “we”, “us”, or “our”).
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" gutterBottom>
                We facilitate low cost intercity cab hires through our
                technology-based service that allows commuters to travel with
                our registered cab drivers and agencies at half the rates and
                save their pockets from paying for empty return journeys
                (“Services”).
              </Typography>
            </Grid>
          </Grid>

          {/* Add more terms and conditions here */}
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            These Terms of Use are the terms of agreement between the cab
            drivers and ZingCab for using or accessing our Services.
          </Typography>
        </Container>
      </Box>

      <Divider sx={{ mt: 15 }} />
      <Footer />
    </Container>
  );
};

export default TermsAndCondition;
