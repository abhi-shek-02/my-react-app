import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
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
import { IconButton, InputAdornment, MenuItem } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CheckCircle, Error } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const BookEnquiry = () => {
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
  const [errorMsgForModal, setErrorMsgForModal] = useState("");
  const [bookingId, setBookingId] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const journeyDate = new Date(formData.journeyDate);
      if (journeyDate < today) {
        validationErrors.journeyDate =
          "Journey Date must be today or a future date";
      }
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
          message: formData.message,
        }),
      };

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/enquiry`,
          requestOptions
        );

        const data = await response.json();
        console.log("data", data);

        if (data?.success) {
          setBookingId(data?.data?._id);
          setSuccessMessage("Booking Successful");
          handleOpen();
        } else {
          setErrorMsgForModal("Something went wrong!");
          handleOpen();
        }
      } catch (error) {
        setErrorMsgForModal("Something went wrong!");
        handleOpen();
      }
    }
    setLoading(false);
  };

  return (
    <Container>
      {/* <CssBaseline /> */}
      {/* <AppAppBar mode={mode} toggleColorMode={toggleColorMode} /> */}
      <Container sx={{ mt: 12 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 12, color: "#095ff0", fontSize: 40 }}
        >
          Thank you for choosing us!
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 3, mb: 3 }}>
          Please confirm your booking details below. We’ll be in touch shortly
          to finalize everything for your journey.
        </Typography>
        <Divider />
        <Box
          sx={{
            mt: 6,
            borderRadius: "30px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            p: 5,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="pickup-location"
                  select
                  label="Pickup Location"
                  fullWidth
                  required
                  value={formData.pickupLocation || ""} // Ensure value is defined
                  onChange={(e) => {
                    const { value } = e.target;
                    setFormData((prevData) => ({
                      ...prevData,
                      pickupLocation: value,
                    }));
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#095ff0" }} />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: "15px" },
                  }}
                  SelectProps={{
                    displayEmpty: true,
                    renderValue: (selected) => {
                      if (!selected) {
                        return (
                          <span style={{ color: "#aaa" }}>
                            Select Pickup Location
                          </span>
                        );
                      }
                      return selected;
                    },
                  }}
                  error={!!errorMessage.pickupLocation}
                  helperText={errorMessage.pickupLocation}
                >
                  <MenuItem value="" disabled>
                    Select Pickup Location
                  </MenuItem>
                  {uniqueLocation.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="drop-location"
                  select
                  label="Drop Location"
                  fullWidth
                  required
                  value={formData.dropLocation || ""} // Ensure value is defined
                  onChange={(e) => {
                    const { value } = e.target;
                    setFormData((prevData) => ({
                      ...prevData,
                      dropLocation: value,
                    }));
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon sx={{ color: "#095ff0" }} />
                      </InputAdornment>
                    ),
                    sx: { borderRadius: "15px" },
                  }}
                  SelectProps={{
                    displayEmpty: true,
                    renderValue: (selected) => {
                      if (!selected) {
                        return (
                          <span style={{ color: "#aaa" }}>
                            Select Drop Location
                          </span>
                        );
                      }
                      return selected;
                    },
                  }}
                  error={!!errorMessage.dropLocation}
                  helperText={errorMessage.dropLocation}
                >
                  <MenuItem value="" disabled>
                    Select Drop Location
                  </MenuItem>
                  {uniqueLocation.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </TextField>
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px", // Consistent rounded corner design
                      padding: "7px", // Add padding to the input field
                      "& fieldset": {
                        // borderColor: "#095ff0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#095ff0",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#095ff0",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      // color: "#095ff0",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#095ff0",
                    },
                    "& .MuiInputBase-input": {
                      padding: "10px", // Adds more padding inside the text field input
                    },
                  }}
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px", // Consistent rounded corner design
                      padding: "7px", // Add padding to the input field
                      "& fieldset": {
                        // borderColor: "#095ff0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#095ff0",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#095ff0",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      // color: "#095ff0",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#095ff0",
                    },
                    "& .MuiInputBase-input": {
                      padding: "8px", // Adds more padding inside the text field input
                    },
                  }}
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px", // Consistent rounded corner design
                      "& fieldset": {
                        // borderColor: "#095ff0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#095ff0",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#095ff0",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      // color: "#095ff0",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#095ff0",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{
                  width: "200px",
                  background:
                    "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                  borderRadius: 20,
                }}
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
            p: { xs: 2, sm: 4 }, // Padding adjusts for mobile and larger screens
            borderRadius: "10px", // Rounded corners for a modern look
            width: { xs: "90%", sm: "400px" }, // Responsive width for mobile
            maxWidth: "500px", // Max width for larger screens
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "gray",
            }}
          >
            <CloseIcon />
          </IconButton>

          {errorMsgForModal && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Error sx={{ color: "red", mr: 1 }} />
              <Typography variant="h6" color="error">
                {errorMsgForModal}
              </Typography>
            </Box>
          )}

          {successMessage && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CheckCircle sx={{ color: "green", mr: 1 }} />
              <Typography variant="h6" color="primary">
                {successMessage}
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default BookEnquiry;
