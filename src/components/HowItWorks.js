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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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

const HowItWorks = () => {
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

      <Container sx={{ mt: 20 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: "rgb(0, 188, 212)" }}
        >
          How It Works
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Many people today often have to move between cities and regions in
          various situations - trips from the region to the airport, to a
          business meeting in another city, etc. The only correct solution in
          such cases is to book a taxi. But is it safe to book a random cab,
          especially when you are traveling with family? Obviously No! Every
          person is looking for a reliable experience that prioritizes their
          needs and concerns. Therefore, LiftDedoo offers an unparalleled
          experience to customers when they are making cab bookings online.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Whenever a customer makes a booking with us, they put a lot of trust
          in us. Our well-behaved, Professional in nature and registered cab
          drivers save you from all unpleasant incidents. We invite you to book
          the fastest, most comfortable, cheapest intercity cab service in West
          Bengal.
        </Typography>

        <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
          How Do We Work?
        </Typography>
        <List sx={{ mb: 4 }}>
          <ListItem>
            <ListItemText primary="After booking your cab, we transfer the vehicle to a location convenient for customers, at the address indicated in the application." />
          </ListItem>
          <ListItem>
            <ListItemText primary="We do not change the conditions and delivery rates depending on the season or weather." />
          </ListItem>
          <ListItem>
            <ListItemText primary="On our website, the client immediately sees the final and detailed calculation of the cost of car rental. No hidden fees or charges." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Speed - This applies not only to the route but also includes an instant response to an order, fast cab delivery, and the choice of the optimal route." />
          </ListItem>
          <ListItem>
            <ListItemText primary="After dropping you at your pre-set location, your ride will be marked as finished. You don't need to pay the return fare." />
          </ListItem>
          <ListItem>
            <ListItemText primary="If you want to return after a few hours or the next day, you have to book your cab again with us." />
          </ListItem>
        </List>

        <Typography variant="h4" align="center" gutterBottom>
          Our Online Cab Booking Method
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Set your current & drop-off location, date, and the number of
          passengers. Search for the available lifts near you. You can look at
          all the available options and select the one that suits your travel
          needs. Your phone will automatically adapt to the resolution of our
          site so that you can comfortably read the information.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ mb: 4 }}>
          We will deliver you to any address and quickly, comfortably, and
          inexpensively. In addition,
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          most of our customers cooperate with us on a regular basis, while
          receiving individual bonuses and discounts.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          If our pricing policy for long-distance travel still somehow competes
          with other companies, then the service provided for this money is
          definitely out of competition. Therefore,
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ mb: 4 }}>
          Order, we work day and night.
        </Typography>
      </Container>
      <Divider />
      <Footer />
    </ThemeProvider>
  );
};

export default HowItWorks;
