import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@mui/material";

import { DirectionsCar, Repeat, FlightTakeoff } from "@mui/icons-material";

import { styled } from "@mui/system";
import { uniqueLocation } from "../utils/constant";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: "#FAFBFF",
  flexDirection: "column",
  marginTop: "90px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const StyledForm = styled("div")(({ theme }) => ({
  backgroundColor: "#FAFBFF",
  borderRadius: 20,
  boxShadow: "0 15px 30px 0 rgba(0, 0, 0, 0.1)",

  padding: theme.spacing(3),
  marginTop: "20px",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    width: "30%",
    boxShadow: "0 15px 30px 0 rgba(0, 0, 0, 0.1)",
  },
}));

export default function Hero() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    pickupLocation: "",
    dropLocation: "",
    journeyDate: "",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = React.useState({});
  const pickUpLocationArray = [...uniqueLocation];
  const dropLocationArray = [...uniqueLocation];

  const handleContactUsClick = () => {
    navigate("/contact");
  };
  const handleDropLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dropLocation: value,
    }));
    if (value !== formData.dropLocation) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        dropLocation: "",
      }));
    }
  };
  const handlePickupLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      pickupLocation: value,
    }));
    // Clear the error when drop location changes
    if (value !== formData.pickupLocation) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        dropLocation: "",
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

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
      navigate("/quote", {
        state: {
          currentLocation: formData.pickupLocation,
          destination: formData.dropLocation,
          selectedDate: formData.journeyDate,
          mobileNumber: formData.phoneNumber,
        },
      });
    }
  };
  return (
    <Container sx={{ marginTop: -1 }}>
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          // backgroundImage:
          bgcolor: "#FAFBFF",
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <StyledContainer>
          <Box>
            <Typography variant="h3" gutterBottom sx={{ color: "#4C4B5E" }}>
              Experience{" "}
              <span
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  color: "#095ff0",
                }}
              >
                ZingCab
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  display: { xs: "none", sm: "block", color: "#4C4B5E" }, // Hides on extra-small screens (mobile view)
                }}
              >
                The gold standard of rides
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: "#4C4B5E" }}>
                We bring you unparalleled convenience with our{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#095ff0",
                  }}
                >
                  one-way cab services
                </span>
              </Typography>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContactUsClick}
              sx={{
                background: "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                borderRadius: 20,
              }}
            >
              Call us Now
            </Button>
          </Box>

          <StyledForm>
            <Box
              sx={{
                display: "flex",

                borderRadius: 1,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <DirectionsCar sx={{ color: "#095ff0", fontSize: 32 }} />
                <Typography sx={{ color: "#4c4b5e", fontSize: 13 }}>
                  One Way
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Repeat sx={{ color: "#095ff0", fontSize: 32 }} />
                <Typography sx={{ color: "#4c4b5e", fontSize: 13 }}>
                  Round Trip
                </Typography>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FlightTakeoff sx={{ color: "#095ff0", fontSize: 32 }} />
                <Typography sx={{ color: "#4c4b5e", fontSize: 13 }}>
                  Airport
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mt: 2, fontSize: 17, color: "#4C4B5E" }}
            >
              Where would you like to travel to?
            </Typography>

            <Box
              sx={{
                mt: 2,
              }}
            >
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {/* Pickup Location */}
                  <TextField
                    id="pickup-location"
                    select
                    label="Pickup Location"
                    fullWidth
                    required
                    value={formData.pickupLocation || ""} // Ensure the value is always defined
                    onChange={handlePickupLocationChange}
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
                    {pickUpLocationArray.map((location) => (
                      <MenuItem key={location} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* Drop Location */}
                  <TextField
                    id="drop-location"
                    select
                    label="Drop Location"
                    fullWidth
                    required
                    value={formData.dropLocation || ""} // Ensure the value is always defined
                    onChange={handleDropLocationChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon sx={{ color: "#095ff0" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <SwapVertIcon sx={{ color: "#095ff0" }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: { borderRadius: "15px" },
                    }}
                    SelectProps={{
                      displayEmpty: true, // Ensures placeholder-like behavior
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
                    {dropLocationArray.map((location) => (
                      <MenuItem key={location} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/* Journey Date */}
                  <TextField
                    id="outlined-basic-journeyDate"
                    type="date"
                    fullWidth
                    required
                    value={formData.journeyDate}
                    onChange={(e) =>
                      setFormData({ ...formData, journeyDate: e.target.value })
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DateRangeIcon sx={{ color: "#095ff0" }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: "15px" },
                    }}
                    inputProps={{
                      min: new Date().toISOString().split("T")[0],
                    }}
                    error={!!errorMessage.journeyDate}
                    helperText={errorMessage.journeyDate}
                  />

                  {/* Phone Number */}
                  <TextField
                    id="outlined-basic-phoneNumber"
                    placeholder="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value;

                      const phoneRegex = /^[6-9]\d{0,9}$/;

                      if (phoneRegex.test(value) || value === "") {
                        setFormData({ ...formData, phoneNumber: value });
                        setErrorMessage({ ...errorMessage, phoneNumber: "" }); // Clear error message if valid
                      } else {
                        setErrorMessage({
                          ...errorMessage,
                          phoneNumber: "Invalid phone number format",
                        });
                      }
                    }}
                    InputProps={{
                      sx: { borderRadius: "15px" },
                    }}
                    error={!!errorMessage.phoneNumber}
                    helperText={errorMessage.phoneNumber}
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      background:
                        "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                      width: "200px",
                    }}
                  >
                    Book Your Ride
                  </Button>
                </Box>
              </form>
            </Box>
          </StyledForm>
        </StyledContainer>
      </Box>
    </Container>
  );
}
