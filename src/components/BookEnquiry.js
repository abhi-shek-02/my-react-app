import React, { useState, useCallback } from "react";
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
import { uniqueLocation } from "../utils/constant";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import debounce from "lodash.debounce";

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

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

const BookEnquiry = () => {
  const [mode, setMode] = useState("dark");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
    journeyDate: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [showPickupLocationList, setShowPickupLocationList] = useState(false);
  const [showDropLocationList, setShowDropLocationList] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [dropFilteredLocations, setDropFilteredLocations] = useState([]);
  const [bookingId, setBookingId] = useState("");

  const defaultTheme = futuristicTheme;

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "dark" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const debouncedFilter = useCallback(
    debounce((value) => {
      const filtered = uniqueLocation.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowPickupLocationList(true);
    }, 300),
    []
  );

  const handlePickupLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      pickupLocation: value,
    }));
    debouncedFilter(value);
  };

  const debouncedDropFilter = useCallback(
    debounce((value) => {
      const filtered = uniqueLocation.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setDropFilteredLocations(filtered);
      setShowDropLocationList(true);
    }, 300),
    []
  );

  const handleDropLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dropLocation: value,
    }));
    debouncedDropFilter(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    setBookingId("");

    const validationErrors = {};
    if (!formData.pickupLocation.trim()) {
      validationErrors.pickupLocation = "Pickup Location is required";
    }
    if (!formData.dropLocation.trim()) {
      validationErrors.dropLocation = "Drop Location is required";
    }
    if (!formData.journeyDate.trim()) {
      validationErrors.journeyDate = "Journey Date is required";
    }
    if (!formData.phoneNumber.trim()) {
      validationErrors.phoneNumber = "Phone Number is required";
    }

    if (formData.pickupLocation === formData.dropLocation) {
      validationErrors.dropLocation =
        "Pickup and Drop locations cannot be the same";
    }

    if (formData.phoneNumber.trim().length !== 10) {
      validationErrors.phoneNumber = "Phone Number must be 10 digits";
    }

    setFormData((prevData) => ({
      ...prevData,
      message: "",
    }));

    setErrorMessage(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pickup_location: formData.pickupLocation,
          drop_location: formData.dropLocation,
          phone: formData.phoneNumber,
          date: formData.journeyDate,
        }),
      };

      try {
        const response = await fetch(
          "https://bookings-uhs1.onrender.com/api/v1/booking/create",
          requestOptions
        );

        const data = await response.json();
        console.log("data", data);

        if (data?.success) {
          setBookingId(data?.data?._id);
          setSuccessMessage("Booking Successful");
          handleOpen();
        } else {
          setErrorMessage(data.message);
          handleOpen();
        }
      } catch (error) {
        setErrorMessage(error.message);
        handleOpen();
      }
    }
    setLoading(false);
  };

  const handlePickupLocationSelect = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      pickupLocation: location,
    }));
    setShowPickupLocationList(false);
  };

  const handleDropLocationSelect = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      dropLocation: location,
    }));
    setShowDropLocationList(false);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? defaultTheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ mt: 20 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Please fill up below details to confirm your Enquiry Booking
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          We will inform you if any cab is available as per your criteria.
        </Typography>
        <Divider />
        <Box sx={{ mt: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic-pickupLocation"
                  label="Pickup Location"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Pickup Location"
                  placeholder="Pickup Location"
                  fullWidth
                  required
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handlePickupLocationChange}
                  error={!!errorMessage.pickupLocation}
                  helperText={errorMessage.pickupLocation}
                  onFocus={() => setShowPickupLocationList(true)}
                  onBlur={() =>
                    setTimeout(() => setShowPickupLocationList(false), 200)
                  }
                />
                {showPickupLocationList && (
                  <Box
                    sx={{
                      position: "absolute",
                      width: {
                        xs: "90%", // 90% width for mobile view
                        sm: "38%", // 38% width for larger screens
                      },
                      marginTop: "1rem",
                      maxHeight: "10rem",
                      overflow: "auto",
                      bgcolor: "background.paper",
                      zIndex: 1000,
                      borderRadius: "4px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location, index) => (
                        <div
                          key={index}
                          onClick={() => handlePickupLocationSelect(location)}
                          style={{
                            padding: "8px",
                            cursor: "pointer",
                          }}
                        >
                          <Typography
                            component="span"
                            variant="body1"
                            dangerouslySetInnerHTML={{
                              __html: location.replace(
                                new RegExp(
                                  `(${formData.pickupLocation})`,
                                  "gi"
                                ),
                                "<strong>$1</strong>"
                              ),
                            }}
                          />
                        </div>
                      ))
                    ) : (
                      <div
                        style={{
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        <Typography variant="body2" color="textSecondary">
                          No results found
                        </Typography>
                      </div>
                    )}
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic-dropLocation"
                  label="Drop Location"
                  size="small"
                  hiddenLabel
                  variant="outlined"
                  aria-label="Drop Location"
                  placeholder="Drop Location"
                  fullWidth
                  required
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleDropLocationChange}
                  error={!!errorMessage.dropLocation}
                  helperText={errorMessage.dropLocation}
                  onFocus={() => setShowDropLocationList(true)}
                  onBlur={() =>
                    setTimeout(() => setShowDropLocationList(false), 200)
                  }
                />
                {showDropLocationList && (
                  <Box
                    sx={{
                      position: "absolute",
                      width: {
                        xs: "90%", // 90% width for mobile view
                        sm: "38%", // 38% width for larger screens
                      },
                      marginTop: "1rem",
                      maxHeight: "10rem",
                      overflow: "auto",
                      bgcolor: "background.paper",
                      zIndex: 1000,
                      borderRadius: "4px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    {dropFilteredLocations.length > 0 ? (
                      dropFilteredLocations.map((location, index) => (
                        <div
                          key={index}
                          onClick={() => handleDropLocationSelect(location)}
                          style={{
                            padding: "8px",
                            cursor: "pointer",
                          }}
                        >
                          <Typography
                            component="span"
                            variant="body1"
                            dangerouslySetInnerHTML={{
                              __html: location.replace(
                                new RegExp(`(${formData.dropLocation})`, "gi"),
                                "<strong>$1</strong>"
                              ),
                            }}
                          />
                        </div>
                      ))
                    ) : (
                      <div
                        style={{
                          padding: "8px",
                          textAlign: "center",
                        }}
                      >
                        <Typography variant="body2" color="textSecondary">
                          No results found
                        </Typography>
                      </div>
                    )}
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic-journeyDate"
                  label="Journey Date"
                  size="small"
                  hiddenLabel
                  variant="outlined"
                  aria-label="Journey Date"
                  placeholder="Journey Date"
                  fullWidth
                  required
                  name="journeyDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.journeyDate}
                  onChange={handleChange}
                  error={!!errorMessage.journeyDate}
                  helperText={errorMessage.journeyDate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic-phoneNumber"
                  label="Phone Number"
                  size="small"
                  hiddenLabel
                  variant="outlined"
                  aria-label="Phone Number"
                  placeholder="Phone Number"
                  fullWidth
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errorMessage.phoneNumber}
                  helperText={errorMessage.phoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic-message"
                  label="Message"
                  size="small"
                  hiddenLabel
                  variant="outlined"
                  aria-label="Message"
                  placeholder="Message"
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{ width: "200px" }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <Footer />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {errorMessage && (
            <Typography variant="h6" color="error">
              {errorMessage}
            </Typography>
          )}
          {successMessage && (
            <Typography variant="h6" color="primary">
              {successMessage}
            </Typography>
          )}
        </Box>
      </Modal>
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
};

export default BookEnquiry;
