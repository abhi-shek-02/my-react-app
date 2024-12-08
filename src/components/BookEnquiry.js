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
import { InputAdornment } from "@mui/material";

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
  const [showPickupLocationList, setShowPickupLocationList] = useState(false);
  const [showDropLocationList, setShowDropLocationList] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [dropFilteredLocations, setDropFilteredLocations] = useState([]);
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <PersonIcon sx={{ color: "#095ff0" }} />{" "} */}
                        {/* Optional: Person Icon */}
                      </InputAdornment>
                    ),
                    sx: { borderRadius: "15px" }, // Apply the same rounded border
                  }}
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
    </Container>
  );
};

export default BookEnquiry;
