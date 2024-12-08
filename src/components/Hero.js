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
} from "@mui/material";

import { DirectionsCar, Repeat, FlightTakeoff } from "@mui/icons-material";

import { styled } from "@mui/system";
import { uniqueLocation } from "../utils/constant";
import debounce from "lodash.debounce";

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

export default function Hero({ start_location_List }) {
  const navigate = useNavigate();

  const [showPickupLocationList, setShowPickupLocationList] =
    React.useState(false);
  const [showDropLocationList, setShowDropLocationList] = React.useState(false);
  const [filteredLocations, setFilteredLocations] = React.useState([]);
  const [dropFilteredLocations, setDropFilteredLocations] = React.useState([]);
  const [formData, setFormData] = React.useState({
    pickupLocation: "",
    dropLocation: "",
    journeyDate: "",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = React.useState({});

  const handleContactUsClick = () => {
    navigate("/contact");
  };
  const handleDropLocationSelect = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      dropLocation: location,
    }));
    setShowDropLocationList(false);
  };
  const handlePickupLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      pickupLocation: value,
    }));
    debouncedFilter(value);
  };
  const debouncedFilter = React.useCallback(
    debounce((value) => {
      const filtered = uniqueLocation.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowPickupLocationList(true);
    }, 300),
    []
  );
  const handlePickupLocationSelect = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      pickupLocation: location,
    }));
    setShowPickupLocationList(false);
  };
  const handleDropLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dropLocation: value,
    }));
    debouncedDropFilter(value);
  };
  const debouncedDropFilter = React.useCallback(
    debounce((value) => {
      const filtered = uniqueLocation.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setDropFilteredLocations(filtered);
      setShowDropLocationList(true);
    }, 300),
    []
  );
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Container sx={{ marginTop: -1 }}>
      {/* <CssBaseline /> */}
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
                    // fontSize: "4rem",
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
                // backgroundColor: "#f5f5f5",
                // p: 2,
                borderRadius: 1,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // p: 1,
                  // backgroundColor: "#F4A261",
                  // borderRadius: 20,
                  // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
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
                  // p: 1,
                  // backgroundColor: "#f0f0f0",

                  // borderRadius: 20,
                  // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <Repeat sx={{ color: "#095ff0", fontSize: 32 }} />
                <Typography sx={{ color: "#4c4b5e", fontSize: 13 }}>
                  Round Trip
                </Typography>
              </Box>
              {/* <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // p: 2,
                  // backgroundColor: "#f0f0f0",
                  // borderRadius: 1,
                }}
              >
                <AccessTime sx={{ color: "#095ff0", fontSize: 32 }} />
                <Typography sx={{ color: "#4c4b5e", fontSize: 13 }}>
                  Rental
                </Typography>
              </Box> */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // p: 1,
                  // backgroundColor: "#f0f0f0",
                  // borderRadius: 1,
                  // borderRadius: 20,
                  // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
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
                // p: 1,
                // backgroundColor: "#fff",
                // borderRadius: "12px",
                // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {/* Pickup Location */}
                  <TextField
                    id="outlined-basic-pickupLocation"
                    placeholder="Pickup Location"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.pickupLocation}
                    onChange={handlePickupLocationChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon sx={{ color: "#095ff0" }} />
                        </InputAdornment>
                      ),
                      sx: { borderRadius: "15px" },
                    }}
                    error={!!errorMessage.pickupLocation}
                    helperText={errorMessage.pickupLocation}
                  />

                  {/* Drop Location */}
                  <TextField
                    id="outlined-basic-dropLocation"
                    placeholder="Drop Location"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.dropLocation}
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
                    error={!!errorMessage.dropLocation}
                    helperText={errorMessage.dropLocation}
                  />

                  {/* Journey Date */}
                  <TextField
                    id="outlined-basic-journeyDate"
                    type="date"
                    fullWidth
                    required
                    value={formData.journeyDate}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    InputProps={{
                      sx: { borderRadius: "15px" },
                    }}
                    error={!!errorMessage.phoneNumber}
                    helperText={errorMessage.phoneNumber}
                  />
                </Box>

                {/* Submit Button */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // disabled={loading}
                    // sx={{ width: "200px" }}
                    sx={{
                      background:
                        "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                      // borderRadius: 20,
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
