import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { styled } from "@mui/system";

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

  const [filteredCurrentLocations, setFilteredCurrentLocations] =
    React.useState([]);
  const [filteredDestinationLocations, setFilteredDestinationLocations] =
    React.useState([]);
  const [currentLocation, setCurrentLocation] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [validationError, setValidationError] = React.useState("");

  const handleCurrentLocationInputChange = (event) => {
    const inputValue = event.target.value;
    setCurrentLocation(inputValue);

    const filtered = start_location_List.filter((location) =>
      location.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCurrentLocations(filtered);
  };

  const handleDestinationInputChange = (event) => {
    const inputValue = event.target.value;
    setDestination(inputValue);

    const filtered = start_location_List.filter((location) =>
      location.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredDestinationLocations(
      filtered.filter((loc) => loc !== currentLocation)
    );
  };

  const handleCurrentLocationSelect = (selectedLocation) => {
    setCurrentLocation(selectedLocation);
    setFilteredCurrentLocations([]);
  };

  const handleDestinationSelect = (selectedLocation) => {
    setDestination(selectedLocation);
    setFilteredDestinationLocations([]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMobileNumberChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 10) {
      setMobileNumber(inputValue);
    }
  };

  const handleSearchNowClick = () => {
    if (!currentLocation || !destination || !selectedDate || !mobileNumber) {
      setValidationError("Please fill in all fields.");
    } else if (currentLocation === destination) {
      setValidationError(
        "Current and destination locations cannot be the same."
      );
    } else if (!/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/i.test(mobileNumber)) {
      setValidationError("Please enter a valid Indian mobile number.");
    } else if (selectedDate < new Date()) {
      setValidationError(
        "Date of Journey should not be less than the current date."
      );
    } else {
      setValidationError("");
      navigate("/quote");
    }
  };

  const handleContactUsClick = () => {
    navigate("/contact");
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
            <Stack spacing={2}>
              <Box position="relative">
                <TextField
                  fullWidth
                  placeholder="Enter Current Location"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={currentLocation}
                  onChange={handleCurrentLocationInputChange}
                />
                {filteredCurrentLocations.length > 0 && (
                  <Box
                    position="absolute"
                    zIndex={1}
                    top="calc(100% + 4px)"
                    left={0}
                    right={0}
                    boxShadow={3}
                    bgcolor="#000"
                    borderRadius={2}
                    mt={1}
                    border="1px solid #cccccc"
                    overflow="hidden"
                  >
                    <ul
                      style={{ listStyleType: "none", padding: 0, margin: 0 }}
                    >
                      {filteredCurrentLocations.map((location, index) => (
                        <li
                          key={index}
                          onClick={() => handleCurrentLocationSelect(location)}
                          style={{ padding: "8px", cursor: "pointer" }}
                        >
                          <Typography
                            component="span"
                            variant="body1"
                            dangerouslySetInnerHTML={{
                              __html: location.replace(
                                new RegExp(`(${currentLocation})`, "gi"),
                                "<strong>$1</strong>"
                              ),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
              </Box>

              <Box position="relative">
                <TextField
                  fullWidth
                  placeholder="Enter Destination"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={destination}
                  onChange={handleDestinationInputChange}
                />
                {filteredDestinationLocations.length > 0 && (
                  <Box
                    position="absolute"
                    zIndex={1}
                    top="calc(100% + 4px)"
                    left={0}
                    right={0}
                    boxShadow={3}
                    bgcolor="#000"
                    borderRadius={2}
                    mt={1}
                    border="1px solid #cccccc"
                    overflow="hidden"
                  >
                    <ul
                      style={{ listStyleType: "none", padding: 0, margin: 0 }}
                    >
                      {filteredDestinationLocations.map((location, index) => (
                        <li
                          key={index}
                          onClick={() => handleDestinationSelect(location)}
                          style={{ padding: "8px", cursor: "pointer" }}
                        >
                          <Typography
                            component="span"
                            variant="body1"
                            dangerouslySetInnerHTML={{
                              __html: location.replace(
                                new RegExp(`(${destination})`, "gi"),
                                "<strong>$1</strong>"
                              ),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
              </Box>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                  disablePast
                  inputFormat="DD/MM/YYYY"
                />
              </LocalizationProvider>

              <TextField
                fullWidth
                placeholder="Enter Mobile Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              />

              <StyledButton
                fullWidth
                variant="contained"
                onClick={handleSearchNowClick}
              >
                Search Now
              </StyledButton>
              {validationError && (
                <Typography color="error" variant="body2">
                  {validationError}
                </Typography>
              )}
            </Stack>
          </StyledForm>
        </StyledContainer>
      </Box>
    </ThemeProvider>
  );
}
