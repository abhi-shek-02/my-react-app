import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,
  TextField,
  Modal,
  CircularProgress,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HygieneIcon from "@mui/icons-material/CleanHands";
import Footer from "./Footer";
import Dzire from "../assets/dzire.png";
import Ertiga from "../assets/Ertiga.png";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { PriceList, uniqueLocation } from "../utils/constant";

// Custom futuristic theme

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const FiltersSection = styled(Box)(({ theme }) => ({
  // padding: theme.spacing(2),
  // borderRight: `1px solid ${theme.palette.divider}`,
  height: "100%",
  color: "black",
}));

const ResultSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CarCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",

  borderRadius: theme.shape.borderRadius,
}));

const IconSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

export default function Quote() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLocation, destination, selectedDate, mobileNumber } =
    location.state || {};

  const [open, setOpen] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState({
    pickupLocation: currentLocation || "",
    dropLocation: destination || "",
    journeyDate: selectedDate || "",
    phoneNumber: mobileNumber || "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [bookingId, setBookingId] = React.useState("");
  const [carType, setCarType] = React.useState("");
  const [amount, setAmount] = React.useState("");

  React.useEffect(() => {
    if (location.state == null) {
      window.location.href = `${window.location.origin}`;
    }
  }, [location, location.state]);
  const handleOpen = (carType, amt) => {
    setAmount(amt);
    setCarType(carType);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEditMode(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function getPrice(car_type, start_location, end_location) {
    // Find the matching entry in the PriceList
    const locationEntry = PriceList.find(
      (entry) =>
        entry.start_location === start_location &&
        entry.end_location === end_location
    );

    // If no matching entry is found, return a default price or handle it as needed
    if (!locationEntry) {
      return "Pricing details are not available for this route. Call us on [123-456-7890](tel:1234567890) to get more details.";
    }

    // Find the price for the specified car type
    const priceEntry = locationEntry.price.find((p) => p.car_type === car_type);

    // If no matching price is found, return a default price or handle it as needed
    if (!priceEntry) {
      return "Pricing details are not available for this route. Call us on [123-456-7890](tel:1234567890) to get more details.";
    }

    // Return the price
    return `₹ ${priceEntry.price}`;
  }
  const validateFormData = () => {
    const errors = {};
    const today = dayjs().startOf("day");
    const journeyDate = dayjs(formData.journeyDate);

    if (!formData.pickupLocation)
      errors.pickupLocation = "Pickup Location is required";
    if (!formData.dropLocation)
      errors.dropLocation = "Drop Location is required";
    if (formData.pickupLocation === formData.dropLocation)
      errors.dropLocation =
        "Drop Location cannot be the same as Pickup Location";
    if (!formData.journeyDate) {
      errors.journeyDate = "Journey Date is required";
    } else if (!journeyDate.isValid() || journeyDate.isBefore(today)) {
      errors.journeyDate = "Journey Date must be today or later";
    }
    if (!formData.phoneNumber) errors.phoneNumber = "Phone Number is required";
    setErrorMessage(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFormData()) return;

    setLoading(true);
    setErrorMessage({});
    setSuccessMessage("");
    const digits = amount.replace(/\D/g, ""); // Removes all non-digit characters
    console.log(digits);
    console.log("carType", carType);
    console.log("amount", digits);

    try {
      // Simulate a POST request
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: { bookingId: "12345" } }), 2000)
      );
      setBookingId(response.data.bookingId);
      setSuccessMessage("Booking successful!");
    } catch (error) {
      setErrorMessage({ message: "Failed to submit the form" });
    } finally {
      setLoading(false);
    }
  };

  const handlePickupLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      pickupLocation: value,
    }));

    if (value === formData.dropLocation) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        dropLocation: "Pickup and Drop locations cannot be the same",
      }));
    } else {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        dropLocation: "",
      }));
    }
  };

  const handleDropLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dropLocation: value,
    }));

    if (value === formData.pickupLocation) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        dropLocation: "Pickup and Drop locations cannot be the same",
      }));
    } else {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        dropLocation: "",
      }));
    }
  };
  return (
    <Container sx={{ marginTop: 10 }}>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg" sx={{ marginTop: 0 }}>
        {/* Header */}
        <Header>
          <Grid container spacing={2}>
            {editMode ? (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    label="Pickup Location"
                    name="pickupLocation"
                    value={formData.pickupLocation || ""}
                    onChange={handlePickupLocationChange}
                    fullWidth
                    margin="normal"
                    error={!!errorMessage.pickupLocation}
                    helperText={errorMessage.pickupLocation}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon sx={{ color: "#095ff0" }} />
                        </InputAdornment>
                      ),
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
                    select
                    label="Drop Location"
                    name="dropLocation"
                    value={formData.dropLocation || ""}
                    onChange={handleDropLocationChange}
                    fullWidth
                    margin="normal"
                    error={!!errorMessage.dropLocation}
                    helperText={errorMessage.dropLocation}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon sx={{ color: "#095ff0" }} />
                        </InputAdornment>
                      ),
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
                    margin="normal"
                    error={!!errorMessage.journeyDate}
                    helperText={errorMessage.journeyDate}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => {
                      if (validateFormData()) setEditMode(false);
                    }}
                    fullWidth
                    sx={{
                      background:
                        "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                    }}
                  >
                    Save
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                  >
                    {formData.journeyDate}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                  >
                    {formData.pickupLocation} ➞ {formData.dropLocation}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  sx={{ textAlign: { xs: "center", sm: "right" } }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => setEditMode(true)}
                    fullWidth
                  >
                    Edit
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Header>

        <Divider />

        {/* Main Content */}
        <Grid container>
          {/* Filters Section */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <FiltersSection>
              <Typography variant="h6">Filters</Typography>
              <Box mt={2}>
                <Typography variant="body1">CAR TYPE *</Typography>
                {/* Add car type filter options here */}
              </Box>
              <Box mt={2}>
                <Typography variant="body1">PRICE RANGE *</Typography>
                {/* Add price range filter options here */}
              </Box>
            </FiltersSection>
          </Grid>

          {/* Search Results Section */}
          <Grid item xs={12} sm={9}>
            <ResultSection>
              <Typography variant="h5">Search Result</Typography>
              <Typography
                variant="h6"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Your Safety Is Our Main Priority
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CarCard
                    sx={{
                      padding: 2,
                      margin: 1,
                      width: "100%", // Ensure it takes full width on small screens
                      maxWidth: { xs: "100%", sm: "95%", md: "90%" }, // Increase width on small screens, limit it for larger screens
                      minWidth: { xs: "100%", sm: "80%" }, // Set minimum width for better control on mobile
                      boxSizing: "border-box", // To include padding and margin in the width calculation
                    }}
                  >
                    <img
                      src={Dzire}
                      alt="Dzire or Similar"
                      style={{
                        width: "100%",
                        height: "auto", // Maintain aspect ratio
                        objectFit: "cover",
                        marginBottom: "16px",
                      }}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: "16px",
                        background:
                          "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {getPrice(
                        "booking_total_price_dzire",
                        formData?.pickupLocation,
                        formData?.dropLocation
                      )}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      Dzire Or Similar
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                      Note: Rs 125/- Night charge will apply before 6AM and
                      after 11PM
                    </Typography>
                    <Typography
                      variant="body2"
                      color="success"
                      sx={{ marginBottom: "8px" }}
                    >
                      Toll Tax: Required
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#095ff0"
                      sx={{ marginBottom: "16px" }}
                    >
                      Hidden Charge: N/A
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        handleOpen(
                          "sedan",
                          getPrice(
                            "booking_total_price_dzire",
                            formData?.pickupLocation,
                            formData?.dropLocation
                          )
                        )
                      }
                      sx={{
                        padding: { xs: "12px 24px", sm: "10px 20px" }, // Adjusted padding for mobile
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                        background:
                          "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                        "&:hover": {
                          backgroundColor: "#00bcd4",
                          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      Book Your Enquiry
                    </Button>
                  </CarCard>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <CarCard
                    sx={{
                      padding: 2,
                      margin: 1,
                      width: "100%", // Ensure it takes full width on small screens
                      maxWidth: { xs: "100%", sm: "95%", md: "90%" }, // Increase width on small screens, limit it for larger screens
                      minWidth: { xs: "100%", sm: "80%" }, // Set minimum width for better control on mobile
                      boxSizing: "border-box", // To include padding and margin in the width calculation
                    }}
                  >
                    <img
                      src={Ertiga}
                      alt="Innova, Ertiga or Similar"
                      style={{
                        width: "100%",
                        height: "auto", // Maintain aspect ratio
                        objectFit: "cover",
                        marginBottom: "16px",
                      }}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: "16px",
                        background:
                          "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {getPrice(
                        "booking_total_price_innova",
                        formData?.pickupLocation,
                        formData?.dropLocation
                      )}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      Innova, Ertiga Or Similar
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                      Note: Rs 125/- Night charge will apply before 6AM and
                      after 11PM
                    </Typography>
                    <Typography
                      variant="body2"
                      color="success"
                      sx={{ marginBottom: "8px" }}
                    >
                      Toll Tax: Required
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#095ff0"
                      sx={{ marginBottom: "16px" }}
                    >
                      Hidden Charge: N/A
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        handleOpen(
                          "suv",
                          getPrice(
                            "booking_total_price_innova",
                            formData?.pickupLocation,
                            formData?.dropLocation
                          )
                        )
                      }
                      sx={{
                        padding: { xs: "12px 24px", sm: "10px 20px" }, // Adjusted padding for mobile
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                        background:
                          "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                        "&:hover": {
                          backgroundColor: "#00bcd4",
                          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      Book Your Enquiry
                    </Button>
                  </CarCard>
                </Grid>
              </Grid>
            </ResultSection>
          </Grid>
        </Grid>
      </Container>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", sm: 400 }, // Adjust width for smaller screens
            bgcolor: "background.paper",
            boxShadow: 24,
            p: { xs: 2, sm: 4 }, // Adjust padding for smaller screens
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Booking Enquiry
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Pickup Location"
              fullWidth
              margin="normal"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              autoComplete="off"
              error={!!errorMessage.pickupLocation}
              helperText={errorMessage.pickupLocation}
              InputLabelProps={{
                shrink: true,
              }}
              disabled
            />
            <TextField
              label="Drop Location"
              fullWidth
              margin="normal"
              name="dropLocation"
              value={formData.dropLocation}
              onChange={handleChange}
              autoComplete="off"
              error={!!errorMessage.dropLocation}
              helperText={errorMessage.dropLocation}
              InputLabelProps={{
                shrink: true,
              }}
              disabled
            />
            <TextField
              label="Journey Date"
              fullWidth
              margin="normal"
              name="journeyDate"
              type="date"
              value={formData.journeyDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errorMessage.journeyDate}
              helperText={errorMessage.journeyDate}
              disabled
            />
            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errorMessage.phoneNumber}
              helperText={errorMessage.phoneNumber}
              InputLabelProps={{
                shrink: true,
              }}
              disabled
            />
            <TextField
              label="Message"
              fullWidth
              margin="normal"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={3}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Stack buttons on smaller screens
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{
                  background:
                    "linear-gradient(135deg, #1598f9 0%, #095ff0 100%)",
                }}
              >
                {loading ? <CircularProgress size={24} /> : "Submit"}
              </Button>
              <Button
                onClick={handleClose}
                color="secondary"
                sx={{ mb: { xs: 1, sm: 0 } }} // Add margin between buttons on smaller screens
              >
                Close
              </Button>
            </Box>
            {successMessage && (
              <Typography
                variant="body2"
                color="success.main"
                sx={{ mt: 2, textAlign: "center" }}
              >
                {successMessage} Booking ID: {bookingId}
              </Typography>
            )}
            {errorMessage.message && (
              <Typography
                variant="body2"
                color="error.main"
                sx={{ mt: 2, textAlign: "center" }}
              >
                {errorMessage.message}
              </Typography>
            )}
          </form>
        </Box>
      </Modal>
      <Divider />
      <Footer />
    </Container>
  );
}
