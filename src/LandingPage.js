import * as React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import getLPTheme from "./getLPTheme";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    ></Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

const LandingPage = () => {
  const [mode, setMode] = React.useState("dark");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const [bookings, setBookings] = React.useState([]);
  const [start_location_List, setStart_location_List] = React.useState([]);
  const [end_location_List, setEnd_location_List] = React.useState([]);

  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "dark"));
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bookings-uhs1.onrender.com/api/v1/booking/list"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBookings(data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  React.useEffect(() => {
    const uniqueStartLocations = Array.from(
      new Set(bookings?.map((item) => item.start_location))
    );
    const uniqueEndLocations = Array.from(
      new Set(bookings?.map((item) => item.end_location))
    );
    const uniqueLocations = Array.from(
      new Set([...uniqueStartLocations, ...uniqueEndLocations])
    );
      console.log("uniqueLocations",uniqueLocations)
    setStart_location_List(uniqueLocations);
    setEnd_location_List(uniqueLocations);
  }, [bookings]);

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };
  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero start_location_List={start_location_List} />
      <Box sx={{ bgcolor: "background.default" }}>
        {/* <LogoCollection /> */}
        {/* <Features /> */}
        {/* <Divider /> */}
        {/* <Testimonials /> */}
        <Divider />
        <Highlights />
        <Divider />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
};

export default LandingPage;

