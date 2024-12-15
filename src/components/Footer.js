import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Logo from "../assets/ICON.png";

const logoStyle = {
  width: "90px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        ZingCab&nbsp;
      </a>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
        backgroundColor: "#FAFBFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: "-15px" }}>
              <Button href="/" style={{ padding: 0 }}>
                <img
                  srcSet={`${Logo}?w=200 200w, ${Logo}?w=400 400w, ${Logo}?w=800 800w`}
                  sizes="(max-width: 600px) 200px, (max-width: 1200px) 400px, 800px"
                  src={Logo}
                  style={logoStyle}
                  alt="ZingCab logo"
                />
              </Button>
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Contact Us
            </Typography>

            <Box display="flex" alignItems="center" mb={1} mt={1}>
              <EmailIcon
                fontSize="small"
                sx={{ mr: 1, color: "text.secondary", color: "#095ff0" }}
              />
              <Typography variant="body2" color="text.secondary">
                support@zingcab.in
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon
                fontSize="small"
                sx={{ mr: 1, color: "text.secondary", color: "#095ff0" }}
              />
              <Typography variant="body2" color="text.secondary">
                Bagmari Road, Kolkata - 700054
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <PhoneIcon
                fontSize="small"
                sx={{ mr: 1, color: "text.secondary", color: "#095ff0" }}
              />
              <Typography variant="body2" color="text.secondary">
                1800-0000-00
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Information
          </Typography>
          <a href="/about" style={{ color: "inherit", textDecoration: "none" }}>
            About Us
          </a>
          <a
            href="/contact"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Contact Us
          </a>
          <a
            href="/mission"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Mission & Vision
          </a>
          <a
            href="/process"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            How It Works
          </a>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Quick Links
          </Typography>
          <a href="/tnc" style={{ color: "inherit", textDecoration: "none" }}>
            Terms & Conditions
          </a>
          <a
            href="/refunds"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Refund Policy
          </a>
          <a
            href="/cancel"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Cancel Booking
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          {/* Social Media Icons */}
        </Stack>
      </Box>
    </Container>
  );
}
