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
import { PriceList } from "../utils/constant";

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

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(2),
}));

const FiltersSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRight: `1px solid ${theme.palette.divider}`,
  height: "100%",
}));

const ResultSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CarCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

const IconSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditMode(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, journeyDate: date });
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
  function extractPrice(priceStr) {
    // Check if the string starts with '₹' and has a space following it
    if (priceStr.startsWith("₹ ")) {
      // Remove the '₹ ' and return the remaining part
      console.log("priceStr.substring(2).trim()", priceStr.substring(2).trim());
      return priceStr.substring(2).trim(); // Remove '₹ ' which is 2 characters and trim any extra spaces
    }
    // If it does not start with '₹ ', return the original string or handle accordingly
    return priceStr;
  }
  function addRandomAmount(getPrice, car_type, start_location, end_location) {
    // Get the price from the getPrice function
    const price = getPrice(car_type, start_location, end_location);
    console.log("price", price);
    // Check if the price is a valid number
    if (isNaN(extractPrice(price))) {
      console.log("----");
      return "";
    }

    // Generate a random amount between 1500 and 2000
    // const randomAmount = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1543;
    const randomAmount = 1543;

    // Add the random amount to the price
    const totalAmount = parseFloat(extractPrice(price)) + randomAmount;

    // Return the total amount
    return `₹ ${totalAmount}`;
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

  return (
    <ThemeProvider theme={futuristicTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        {/* Header */}
        <Header>
          {editMode ? (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Pickup Location"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!errorMessage.pickupLocation}
                  helperText={errorMessage.pickupLocation}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Drop Location"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!errorMessage.dropLocation}
                  helperText={errorMessage.dropLocation}
                />
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
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
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
            </Grid>
          )}
        </Header>

        <Divider />

        {/* Main Content */}
        <Grid container>
          {/* Filters Section */}
          <Grid item xs={12} sm={3}>
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
              <Typography variant="h6">Search Result</Typography>
              <Typography variant="h6">
                Your Safety Is Our Main Priority
              </Typography>
              <IconSection>
                <Box sx={{ textAlign: "center", padding: 2 }}>
                  <LocationOnIcon
                    fontSize="large"
                    sx={{ color: "#00bcd4", marginBottom: 1 }}
                  />
                  <Typography variant="body1" color="textPrimary">
                    Safe Arrival
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center", padding: 2 }}>
                  <LocalHospitalIcon
                    fontSize="large"
                    sx={{ color: "#00bcd4", marginBottom: 1 }}
                  />
                  <Typography variant="body1" color="textPrimary">
                    Sanitized Cabs
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center", padding: 2 }}>
                  <HygieneIcon
                    fontSize="large"
                    sx={{ color: "#00bcd4", marginBottom: 1 }}
                  />
                  <Typography variant="body1" color="textPrimary">
                    Clean & Safe
                  </Typography>
                </Box>
              </IconSection>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CarCard sx={{ padding: 3, margin: 2 }}>
                    <img
                      src={Dzire}
                      alt="Dzire or Similar"
                      style={{
                        width: "100%",
                        maxWidth: "270px",
                        height: "170px",
                        objectFit: "cover",
                        marginBottom: "16px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      sx={{
                        textDecoration: "line-through",
                        marginBottom: "8px",
                      }}
                    >
                      {addRandomAmount(
                        getPrice,
                        "booking_total_price_dzire",
                        formData?.pickupLocation,
                        formData?.dropLocation
                      )}
                    </Typography>
                    <Typography
                      variant="h4"
                      color="#00ff00"
                      sx={{ marginBottom: "16px" }}
                    >
                      {getPrice(
                        "booking_total_price_dzire",
                        formData?.pickupLocation,
                        formData?.dropLocation
                      ).length > 10 ? (
                        <Typography
                          variant="h6"
                          color="#ff8989"
                          sx={{ marginBottom: "10px" }}
                        >
                          {getPrice(
                            "booking_total_price_dzire",
                            formData?.pickupLocation,
                            formData?.dropLocation
                          )}
                        </Typography>
                      ) : (
                        <Typography
                          variant="h4"
                          color="#00ff00"
                          sx={{ marginBottom: "16px" }}
                        >
                          {getPrice(
                            "booking_total_price_dzire",
                            formData?.pickupLocation,
                            formData?.dropLocation
                          )}
                        </Typography>
                      )}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      Dzire Or Similar
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                      Note: Rs 125/- Night charge will apply before 6AM morning
                      and after 11PM night
                    </Typography>
                    <Typography
                      variant="body2"
                      color="success"
                      sx={{ marginBottom: "8px" }}
                    >
                      Toll Tax: Required
                    </Typography>
                    <Typography
                      color="#00dfff"
                      variant="body2"
                      sx={{ marginBottom: "16px" }}
                    >
                      Hidden Charge: N/A
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleOpen}
                      sx={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
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
                  <CarCard sx={{ padding: 3, margin: 2 }}>
                    <img
                      src={Ertiga}
                      alt="Innova, Ertiga or Similar"
                      style={{
                        width: "100%",
                        maxWidth: "350px",
                        height: "200px",
                        objectFit: "cover",
                        marginBottom: "16px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      sx={{
                        textDecoration: "line-through",
                        marginBottom: "8px",
                      }}
                    >
                      {addRandomAmount(
                        getPrice,
                        "booking_total_price_innova",
                        formData?.pickupLocation,
                        formData?.dropLocation
                      )}
                    </Typography>

                    {getPrice(
                      "booking_total_price_innova",
                      formData?.pickupLocation,
                      formData?.dropLocation
                    ).length > 10 ? (
                      <Typography
                        variant="h6"
                        color="#ff8989"
                        sx={{ marginBottom: "10px" }}
                      >
                        {getPrice(
                          "booking_total_price_innova",
                          formData?.pickupLocation,
                          formData?.dropLocation
                        )}
                      </Typography>
                    ) : (
                      <Typography
                        variant="h4"
                        color="#00ff00"
                        sx={{ marginBottom: "16px" }}
                      >
                        {getPrice(
                          "booking_total_price_innova",
                          formData?.pickupLocation,
                          formData?.dropLocation
                        )}
                      </Typography>
                    )}

                    <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                      Innova, Ertiga Or Similar
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                      Note: Rs 125/- Night charge will apply before 6AM morning
                      and after 11PM night
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
                      sx={{ marginBottom: "16px" }}
                      color="#00dfff"
                    >
                      Hidden Charge: N/A
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleOpen}
                      sx={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
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
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
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
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Submit"}
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
    </ThemeProvider>
  );
}
