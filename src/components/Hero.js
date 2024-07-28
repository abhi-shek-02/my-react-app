import * as React from "react";
// import { useHistory } from "react-router-dom";
import { alpha } from "@mui/material";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Outstation rides at your fare&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            ></Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Explore hundreds of intercity routes and choose one of our verified
            drivers
          </Typography>
          <Stack
            direction="column"
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Box position="relative">
              <TextField
                id="current-location"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter Current Location"
                placeholder="Enter Current Location"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter Current Location",
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
                  bgcolor="#ffffff"
                  borderRadius={2}
                  mt={1}
                  border="1px solid #cccccc"
                  overflow="hidden"
                >
                  <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                    {filteredCurrentLocations.map((location, index) => (
                      <React.Fragment key={index}>
                        <li
                          onClick={() => handleCurrentLocationSelect(location)}
                          sx={{
                            cursor: "pointer",
                            padding: "12px 16px",
                            textAlign: "center",
                            transition: "background-color 0.3s",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          {location}
                        </li>
                        {index !== filteredCurrentLocations.length - 1 && (
                          <Box
                            sx={{
                              width: "100%",
                              height: 1,
                              bgcolor: "#f0f0f0",
                            }}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
            <Box position="relative">
              <TextField
                id="destination"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter Destination"
                placeholder="Enter Destination"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter Destination",
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
                  bgcolor="#ffffff"
                  borderRadius={2}
                  mt={1}
                  border="1px solid #cccccc"
                  overflow="hidden"
                >
                  <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                    {filteredDestinationLocations.map((location, index) => (
                      <React.Fragment key={index}>
                        <li
                          onClick={() => handleDestinationSelect(location)}
                          sx={{
                            cursor: "pointer",
                            padding: "12px 16px",
                            textAlign: "center",
                            transition: "background-color 0.3s",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          {location}
                        </li>
                        {index !== filteredDestinationLocations.length - 1 && (
                          <Box
                            sx={{
                              width: "100%",
                              height: 1,
                              bgcolor: "#f0f0f0",
                            }}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                inputFormat="DD/MM/YYYY"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{ ...params.inputProps, readOnly: true }}
                    helperText="DD/MM/YYYY"
                  />
                )}
              />
            </LocalizationProvider>
            <TextField
              id="mobile-number"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter Mobile Number"
              placeholder="Enter Mobile Number"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter Mobile Number",
              }}
              value={mobileNumber}
              onChange={handleMobileNumberChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearchNowClick}
            >
              Search now
            </Button>
            {validationError && (
              <Typography color="error" sx={{ mt: 1 }}>
                {validationError}
              </Typography>
            )}
          </Stack>
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: { xs: 200, sm: 700 },
            width: "100%",
            backgroundImage:
              theme.palette.mode === "light"
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
