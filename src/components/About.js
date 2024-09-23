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

const About = () => {
  const [mode, setMode] = useState("dark");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev !== "dark" ? "dark" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? defaultTheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 20, mb: 10 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: "rgb(0, 188, 212)" }}
        >
          About ZingCab
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          ZingCab elevates intercity travel, offering an unmatched level of
          comfort that makes your journey feel effortless. Our modern cabs are
          designed with premium seating, spacious interiors, and personal
          charging docks to ensure you stay connected and relaxed.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          From the moment you step into a ZingCab, you’ll notice the
          difference—smooth rides, quiet ambiance, and a space that feels both
          luxurious and practical. Whether it's a quick trip or a long haul,
          ZingCab guarantees a travel experience where comfort is never
          compromised.
        </Typography>
        {/* <Typography variant="body1" align="center" paragraph>
          At ZingCab, we offer a solution that's both convenient and economical.
          By connecting travelers with empty-seated cars making one-sided
          journeys, we ensure that you pay for only the distance you travel. No
          more overcrowded carpools or inflated return fares—just comfortable
          rides at the most competitive rates.
        </Typography> */}
        {/* <Typography variant="body2" align="center">
          Driven by our passion for enhancing the travel experience, we've
          fine-tuned our processes over the years to provide our customers with
          the best possible service. Whether you're a resident or a visitor,
          ZingCab promises to deliver unmatched affordability without
          compromising on quality or comfort.
        </Typography> */}
        {/* <Typography variant="body2" align="center">
          With ZingCab, you'll not only save money but also precious time. Say
          goodbye to the hassle of finding transportation and hello to seamless,
          stress-free travel. Whether you're exploring new destinations or
          commuting for work, ZingCab is here to make your journey memorable for
          all the right reasons.
        </Typography> */}
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Welcome to the Future of Intercity Cab Travel
        </Typography>
      </Container>
      <Divider />
      <Footer />
    </ThemeProvider>
  );
};

export default About;
