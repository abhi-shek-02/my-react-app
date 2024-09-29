// src/components/AppAppBar.js
import * as React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import Logo from "../assets/ICON.png";

const logoStyle = {
  width: "115px",
  height: "auto",
  cursor: "pointer",
  margin: "5px",
};

function AppAppBar({ mode, toggleColorMode }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };
  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  const handleHowItWorksClick = () => {
    navigate("/how-it-works");
  };

  const handleBookEnquiryClick = () => {
    navigate("/book-enquiry");
  };

  const handleFAQClick = () => {
    navigate("/faq");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleCancelBooking = () => {
    navigate("/cancel-booking");
  };
  const handleTermsConditions = () => {
    navigate("/terms-conditions");
  };
  const handleRefundPolicy = () => {
    navigate("/refund-policy");
  };
  const handleMissionAndVision = () => {
    navigate("/mission-and-vision");
  };

  // /terms-conditions

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "#FAFBFF",
          mt: 2,
          bgcolor: "#FAFBFF",
          backgroundColor: "#FAFBFF",
        }}
      >
        <Container maxWidth="lg" sx={{ bgcolor: "#FAFBFF" }}>
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "25px",
              bgcolor: "#FAFBFF",

              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
                backgroundColor: "#FAFBFF",
              }}
            >
              <Button onClick={handleHomeClick} style={{ padding: 0 }}>
                {/* <img src={Logo} alt="logo of sitemark" /> */}
                <img
                  src={Logo}
                  alt="logo of sitemark"
                  style={{
                    height: "50px",
                    width: "auto",
                    cursor: "pointer",
                    margin: "5px",
                  }}
                />
              </Button>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  onClick={() => handleAboutClick("features")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    About Us
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => handleContactUsClick()}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Contact Us
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => handleHowItWorksClick()}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    How It Work's
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => handleBookEnquiryClick()}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    Book Your Enquiry
                  </Typography>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => handleFAQClick()}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem> */}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              {/* <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/sign-in"
                target="_blank"
                sx={{ color: "#00bcd4" }}
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/sign-up"
                target="_blank"
                sx={{ background: "#00bcd4" }}
              >
                Sign up
              </Button> */}
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  <MenuItem onClick={() => handleAboutClick()}>
                    About Us
                  </MenuItem>
                  <MenuItem onClick={() => handleContactUsClick()}>
                    Contact Us
                  </MenuItem>
                  <MenuItem onClick={() => handleHowItWorksClick()}>
                    How It Works
                  </MenuItem>
                  <MenuItem onClick={() => handleBookEnquiryClick()}>
                    Book Your Enquiry
                  </MenuItem>
                  <MenuItem onClick={() => handleCancelBooking()}>
                    Cancel Booking
                  </MenuItem>
                  <MenuItem onClick={() => handleTermsConditions()}>
                    Terms Conditions
                  </MenuItem>
                  <MenuItem onClick={() => handleRefundPolicy()}>
                    Refund Policy
                  </MenuItem>
                  <MenuItem onClick={() => handleMissionAndVision()}>
                    Mission And Vision
                  </MenuItem>
                  {/* handleTermsConditions */}
                  {/* handleMissionAndVision */}
                  <Divider />
                  <MenuItem>
                    {/* <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/sign-up"
                      target="_blank"
                      sx={{ width: "100%", background: "#00bcd4" }}
                    >
                      Sign up
                    </Button> */}
                  </MenuItem>
                  <MenuItem>
                    {/* <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/sign-in"
                      target="_blank"
                      sx={{ width: "100%", color: "#00bcd4" }}
                    >
                      Sign in
                    </Button> */}
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
