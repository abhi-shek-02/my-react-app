// RefundPolicy
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
import getLPTheme from "../getLPTheme";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

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

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

const RefundPolicy = () => {
  const [mode, setMode] = useState("dark");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "dark" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? defaultTheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 20, mb: 10 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Refund Policy
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          For any reason, You are not completely satisfied with your booking or
          have multiple itineraries for the same trip, we invite you to review
          our Refund Policy. LiftDedoo believes in helping its customers as much
          as possible and has, therefore, a reliable cancellation and refund
          policy.
        </Typography>
        <Typography>
          Please check our rules and restrictions for refund details prior to
          initiating a change or cancellation.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ mt: 5, mb: 2 }}
        >
          Cancellation & Refunds Policy
        </Typography>
        <Typography variant="body1" align="center" paragraph component="div">
          At any stage, you may be able to cancel your booking online but these
          rules will be applied:
          <ListItem>
            The amendments can be done by Cancel Booking link and mention the
            booking confirmation number (Booking ID).If the user cancel before 1
            hour of schedule deputure full refund will be process ( Advance
            amount paid by the customer) If the user Cancel after the schedule
            deputure, will be treated as a no show and no payment or
            compensatation will be provided. In case no show of cab driver full
            refund will be processed ( Within the schedule depature time)
          </ListItem>
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          How does it work?
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          The cancellation can be made over the official website "Cancel
          Booking". Here you must know that no cancellations are entertained in
          any case for those services that the Lift De Doo marketing team has
          obtained on special occasions like Pongal, Dussehra, New year, Diwali,
          etc. These are the limited-time offers, that’s why cancellations are
          not possible.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          LiftDedoo will not be responsible for any delay of service in case of
          any natural calamity, Strike, Road Jam, agitation, etc. Moreover, we
          have the rights to cancel/change the booking of vehicle at any point
          of time.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Vehicle Breakdown
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          In a situation where the driver’s vehicle breaks down on the trip, you
          may ask the driver to find an alternative hire service for you.
          Liftdedoo holds no responsibility in such situations for making any
          special arrangements whatsoever. If the driver fails to arrange any
          alternative hire service for you, you may be liable to pay an
          appropriate fare for the part of the trip covered by the driver, as
          may be mutually agreeable between you and the driver.
        </Typography>
        <Typography
          variant="h3"
          align="center"
          paragraph
          component="div"
          sx={{ mt: 4, mb: 2 }}
        >
          Contact Us
        </Typography>
        <ListItem>
          If you have any questions about our Cancellation & Refunds Policy,
          please contact us:
        </ListItem>
        <ListItem>
          By visiting this page on our website:
          http://www.liftdedoo.com/contact-us
        </ListItem>
      </Container>

      <Divider />
      <Footer />
    </ThemeProvider>
  );
};

export default RefundPolicy;
