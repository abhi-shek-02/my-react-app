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
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";

// Custom futuristic theme
const futuristicTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff", // Teal
    },
    secondary: {
      main: "#00bcd4", // Pink
    },
    background: {
      default: "#090E10",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            backgroundColor: "#fff",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            "& fieldset": {
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#00bcd4",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
          },
        },
      },
    },
  },
});

// Motion variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Toggle custom theme component
function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Button onClick={toggleCustomTheme} variant="contained" color="secondary">
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
  const [mode, setMode] = useState("dark");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const defaultTheme = futuristicTheme;

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
        const response = await fetch(
          "https://bookings-uhs1.onrender.com/api/v1/contact/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
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
    <ThemeProvider theme={showCustomTheme ? defaultTheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 20 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </Typography>
          <Divider sx={{ mb: 2 }} />
        </motion.div>
        <Box sx={{ mt: 4 }}>
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ duration: 0.8 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.8 }}
                >
                  <TextField
                    id="outlined-basic-name"
                    label="Your Name"
                    size="small"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.8 }}
                >
                  <TextField
                    id="outlined-basic-phone"
                    label="Phone"
                    size="small"
                    variant="outlined"
                    fullWidth
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    required
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.8 }}
                >
                  <TextField
                    id="outlined-basic-email"
                    label="Your Email (optional)"
                    size="small"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.8 }}
                >
                  <TextField
                    id="outlined-basic-subject"
                    label="Subject"
                    size="small"
                    variant="outlined"
                    fullWidth
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    required
                  />
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.8 }}
                >
                  <TextField
                    id="outlined-basic-message"
                    label="Your Message"
                    size="small"
                    variant="outlined"
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
                </motion.div>
              </Grid>
            </Grid>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
              transition={{ duration: 0.8 }}
              sx={{ mt: 2 }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </motion.div>
          </motion.form>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
export default ContactUs;
