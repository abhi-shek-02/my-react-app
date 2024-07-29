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

const TermsAndCondition = () => {
  const [mode, setMode] = useState("dark");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [bookingId, setBookingId] = useState(""); // State variable to store booking ID
  const [isLoading, setIsLoading] = useState(false); // State variable to manage loader visibility
  const [showModal, setShowModal] = useState(false); // State variable to manage modal visibility
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

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
          <Typography variant="h4" gutterBottom>
            Terms of Use
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Effective Date: 19th August, 2022
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to Ride4You! Ride4You is owned by Ride4You OPC Private
            Limited and any reference herein to Ride4You, its application,
            website or services shall be deemed to have a reference to Ride4You
            OPC Private Limited (“Ride4You”, “we”, “us”, or “our”).
          </Typography>
          <Typography variant="body1" gutterBottom>
            We facilitate low cost intercity cab hires through our
            technology-based service that allows commuters to travel with our
            registered cab drivers and agencies at half the rates and save their
            pockets from paying for empty return journeys (“Services”) by means
            of Ride4You’s website and the mobile application (“Platform”).
          </Typography>
          <Typography variant="body1" gutterBottom>
            These Terms of Use are the terms of agreement between the cab
            drivers and cab hire service agencies (“driver”,“you”, or “your”)
            and Ride4You for registering with, using or accessing our Services
            (“Terms of Use”).
          </Typography>
          <Typography variant="body1" gutterBottom>
            You must read, agree with and accept these Terms of Use as it
            explains the terms and conditions guiding your usage of our
            Services. By engaging with the Services provided by Ride4You, you
            agree and confirm to be bound by these Terms of Use. If you do not
            agree with anything provided herein, please do not use or access
            Ride4You’s Platform.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We reserve the unilateral right to change the particulars contained
            in these Terms of Use from time to time, without notice to you and
            in our sole discretion. If we make any such revision in the Terms of
            Use, we will update the effective date above and the revised Terms
            of Use shall be effective from such date. You are required to
            frequently check these Terms of Use and its effective date to
            understand the terms and conditions that apply to your use of the
            Services. Your continued use of the Services following such
            modification constitutes your acceptance of the modified Terms of
            Use, whether or not you have read them.
          </Typography>
          {/* Continue adding the rest of the terms and conditions */}
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

export default TermsAndCondition;
