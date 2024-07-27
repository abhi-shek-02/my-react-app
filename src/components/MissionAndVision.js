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

const MissionAndVision = () => {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 20, mb: 10 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Mission And Vision
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Providing fair prices and winning our customer trust is our main
          Mission & Vision. We believe Return Fare is Not Fair!"
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Our journey started 2 years ago with the vision to provide the
          Cheapest intercity cab service in West Bengal. We started our journey
          from West Bengal with the vision "To be Best, Not the Biggest" Then,
          we strived for a civilized market and see our task to make the
          high-quality cab service an affordable, convenient, and simple
          procedure with minimal risks.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We worked really hard and found our own formula for success and
          successfully implemented it. Now we have a large number of registered
          drivers and agencies that are providing prompt and high-quality
          services to those who are looking for a cab.
        </Typography>
        <Typography variant="body2" align="center">
          With us, you no longer have to look where a taxi in West Bengal is
          cheap - we are ready to offer each passenger a really low cost per
          trip while maintaining the maximum level of comfort. And these are not
          just words - make sure that our rates are available for yourself by
          simply ordering a cab online.
        </Typography>
      </Container>
      <Divider />
      <Footer />
    </ThemeProvider>
  );
};

export default MissionAndVision;
