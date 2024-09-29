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
// import getLPTheme from "./getLPTheme";
import { PriceList } from "./utils/constant";
import { Container } from "@mui/material";

const LandingPage = () => {
  const [bookings, setBookings] = React.useState(PriceList);
  const [start_location_List, setStart_location_List] = React.useState([]);
  const [end_location_List, setEnd_location_List] = React.useState([]);

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

    // fetchData();
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
    console.log("uniqueLocations", uniqueLocations);
    setStart_location_List(uniqueLocations);
    setEnd_location_List(uniqueLocations);
  }, [bookings]);

  return (
    <Box sx={{ bgcolor: "#FAFBFF" }}>
      <AppAppBar />
      <Hero start_location_List={start_location_List} />
      <Box sx={{ bgcolor: "background.default" }}>
        {/* <LogoCollection /> */}
        {/* <Features /> */}
        <Divider />
        {/* <Testimonials /> */}
        {/* <Divider /> */}
        <Highlights />
        {/* <Divider /> */}
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
};

export default LandingPage;
