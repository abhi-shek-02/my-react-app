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
        <Typography variant="h2" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Introducing ZingCab, your go-to choice for affordable intercity cab
          services in West Bengal. With expertise, we've emerged as a leading
          player in the industry, driven by our belief that "Return Fare is Not
          Fair."
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Our journey began with a simple yet profound realization during a trip
          from Kolkata to Durgapur. Faced with the challenge of finding a
          reliable and cost-effective travel option, our co-founder Rishi
          experienced firsthand the inefficiencies of existing transportation
          services. It was this experience that inspired us to revolutionize the
          way people travel between cities.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          At ZingCab, we offer a solution that's both convenient and economical.
          By connecting travelers with empty-seated cars making one-sided
          journeys, we ensure that you pay for only the distance you travel. No
          more overcrowded carpools or inflated return fares—just comfortable
          rides at the most competitive rates.
        </Typography>
        <Typography variant="body2" align="center">
          Driven by our passion for enhancing the travel experience, we've
          fine-tuned our processes over the years to provide our customers with
          the best possible service. Whether you're a resident or a visitor,
          ZingCab promises to deliver unmatched affordability without
          compromising on quality or comfort.
        </Typography>
        <Typography variant="body2" align="center">
          With ZingCab, you'll not only save money but also precious time. Say
          goodbye to the hassle of finding transportation and hello to seamless,
          stress-free travel. Whether you're exploring new destinations or
          commuting for work, ZingCab is here to make your journey memorable for
          all the right reasons.
        </Typography>
      </Container>
      <Divider />
      <Footer />
    </ThemeProvider>
  );
};

export default About;
