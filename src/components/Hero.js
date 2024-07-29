import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,
} from "@mui/material";

import { styled } from "@mui/system";
import { uniqueLocation } from "../utils/constant";
import debounce from "lodash.debounce";

// Custom futuristic theme
const futuristicTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#00bcd4",
    },
    background: {
      default: "#121212",
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

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(4),
  // backgroundColor: theme.palette.background.default,
  flexDirection: "column",
  marginTop: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const StyledForm = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    width: "50%",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#0959AA",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
  marginTop: theme.spacing(2),
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
          selectedDate: formData.journeyDate?.split("-")?.reverse()?.join("-"),
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
    <ThemeProvider theme={futuristicTheme}>
      <CssBaseline />
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? `linear-gradient(#02294F, rgba(9, 14, 16, 0.0))`
              : `linear-gradient(#02294F, rgba(9, 14, 16, 0.0))`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <StyledContainer>
          <Box>
            <Typography variant="h3" gutterBottom>
              Taxi Service from Kolkata
            </Typography>
            <Typography variant="body1" gutterBottom>
              Welcome to Oneway Cabwala, where every ride is a journey
              redefined. As a leading name in the taxi business, we bring you
              unparalleled convenience with our one-way cab services.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContactUsClick}
            >
              Contact Us
            </Button>
          </Box>

          <StyledForm>
            <Typography variant="h6" gutterBottom>
              Quick Booking Here
            </Typography>
            <Box sx={{ mt: 4 }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                          sm: "22%", // 38% width for larger screens
                        },
                        marginTop: "3rem",
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
                              padding: "10px",
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
                            <Divider />
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
                          sm: "22%", // 38% width for larger screens
                        },
                        marginTop: "6rem",
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
                              padding: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <Typography
                              component="span"
                              variant="body1"
                              dangerouslySetInnerHTML={{
                                __html: location.replace(
                                  new RegExp(
                                    `(${formData.dropLocation})`,
                                    "gi"
                                  ),
                                  "<strong>$1</strong>"
                                ),
                              }}
                            />
                            <Divider />
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
                    inputProps={{
                      min: new Date().toISOString().split("T")[0],
                    }}
                  />

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
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    // disabled={loading}
                    sx={{ width: "200px" }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </StyledForm>
        </StyledContainer>
      </Box>
    </ThemeProvider>
  );
}
