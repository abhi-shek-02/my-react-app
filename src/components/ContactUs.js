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

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

const ContactUs = () => {
  const [mode, setMode] = useState("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone is required";
    }
    if (!formData.subject.trim()) {
      validationErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://bookings-uhs1.onrender.com/api/v1/contact/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Success:", data);
        // Clear form after successful submission
        setFormData({
          name: "",
          phone: "",
          subject: "",
          message: "",
          email: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 20 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="p" align="center" gutterBottom>
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </Typography>
        <Divider />
        <Box sx={{ mt: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic-name"
                  label="Your Name"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Your Name"
                  placeholder="Your Name"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic-phone"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Phone"
                  placeholder="Phone"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic-email"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Your Email (optional)"
                  placeholder="Your Email (optional)"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic-subject"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Subject"
                  placeholder="Subject"
                  fullWidth
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={!!errors.subject}
                  helperText={errors.subject}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic-message"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Your Message"
                  placeholder="Your Message"
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default ContactUs;
