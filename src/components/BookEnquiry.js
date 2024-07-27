// // // // import React, { useState } from "react";
// // // // import PropTypes from "prop-types";
// // // // import CssBaseline from "@mui/material/CssBaseline";
// // // // import Box from "@mui/material/Box";
// // // // import { ThemeProvider, createTheme } from "@mui/material/styles";
// // // // import Typography from "@mui/material/Typography";
// // // // import Button from "@mui/material/Button";
// // // // import Grid from "@mui/material/Grid";
// // // // import Container from "@mui/material/Container";
// // // // import AppAppBar from "./AppAppBar";
// // // // import getLPTheme from "../getLPTheme";
// // // // import Footer from "./Footer";
// // // // import Divider from "@mui/material/Divider";
// // // // import TextField from "@mui/material/TextField";
// // // // import { uniqueLocation } from "../utils/constant";

// // // // function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         display: "flex",
// // // //         justifyContent: "center",
// // // //         mt: 2,
// // // //       }}
// // // //     >
// // // //       <Button onClick={toggleCustomTheme} variant="contained" color="primary">
// // // //         Toggle Custom Theme
// // // //       </Button>
// // // //     </Box>
// // // //   );
// // // // }

// // // // ToggleCustomTheme.propTypes = {
// // // //   showCustomTheme: PropTypes.bool.isRequired,
// // // //   toggleCustomTheme: PropTypes.func.isRequired,
// // // // };

// // // // const BookEnquiry = () => {
// // // //   console.log("uniqueLocation", uniqueLocation);
// // // //   const [mode, setMode] = useState("light");
// // // //   const [showCustomTheme, setShowCustomTheme] = useState(true);
// // // //   const [formData, setFormData] = useState({
// // // //     pickupLocation: "",
// // // //     dropLocation: "",
// // // //     journeyDate: "",
// // // //     phoneNumber: "",
// // // //     message: "",
// // // //   });

// // // //   const LPtheme = createTheme(getLPTheme(mode));
// // // //   const defaultTheme = createTheme({ palette: { mode } });

// // // //   const toggleColorMode = () => {
// // // //     setMode((prev) => (prev === "dark" ? "light" : "dark"));
// // // //   };

// // // //   const toggleCustomTheme = () => {
// // // //     setShowCustomTheme((prev) => !prev);
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prevData) => ({
// // // //       ...prevData,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   return (
// // // //     <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
// // // //       <CssBaseline />
// // // //       <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
// // // //       <Container sx={{ mt: 20 }}>
// // // //         <Typography variant="h2" align="center" gutterBottom>
// // // //           Please fill up below details to confirm your Enquiry Booking
// // // //         </Typography>
// // // //         <Typography variant="body1" align="center" gutterBottom>
// // // //           {/* We will inform you if any cab is available as per your criteria. */}
// // // //         </Typography>
// // // //         <Divider />
// // // //         <Box sx={{ mt: 4 }}>
// // // //           <form>
// // // //             <Grid container spacing={2}>
// // // //               <Grid item xs={12} sm={6}>
// // // //                 <TextField
// // // //                   id="outlined-basic-pickupLocation"
// // // //                   label="Pickup Location"
// // // //                   hiddenLabel
// // // //                   size="small"
// // // //                   variant="outlined"
// // // //                   aria-label="Pickup Location"
// // // //                   placeholder="Pickup Location"
// // // //                   fullWidth
// // // //                   required
// // // //                   name="pickupLocation"
// // // //                   value={formData.pickupLocation}
// // // //                   onChange={handleChange}
// // // //                 />
// // // //               </Grid>
// // // //               <Grid item xs={12} sm={6}>
// // // //                 <TextField
// // // //                   id="outlined-basic-dropLocation"
// // // //                   label="Drop Location"
// // // //                   hiddenLabel
// // // //                   size="small"
// // // //                   variant="outlined"
// // // //                   aria-label="Drop Location"
// // // //                   placeholder="Drop Location"
// // // //                   fullWidth
// // // //                   required
// // // //                   name="dropLocation"
// // // //                   value={formData.dropLocation}
// // // //                   onChange={handleChange}
// // // //                 />
// // // //               </Grid>
// // // //               <Grid item xs={12} sm={6}>
// // // //                 <TextField
// // // //                   id="outlined-basic-journeyDate"
// // // //                   label="Journey Date"
// // // //                   type="date"
// // // //                   hiddenLabel
// // // //                   size="small"
// // // //                   variant="outlined"
// // // //                   aria-label="Journey Date"
// // // //                   fullWidth
// // // //                   required
// // // //                   name="journeyDate"
// // // //                   value={formData.journeyDate}
// // // //                   onChange={handleChange}
// // // //                 />
// // // //               </Grid>
// // // //               <Grid item xs={12} sm={6}>
// // // //                 <TextField
// // // //                   id="outlined-basic-phoneNumber"
// // // //                   label="Phone Number"
// // // //                   hiddenLabel
// // // //                   size="small"
// // // //                   variant="outlined"
// // // //                   aria-label="Phone Number"
// // // //                   placeholder="Phone Number"
// // // //                   fullWidth
// // // //                   required
// // // //                   name="phoneNumber"
// // // //                   value={formData.phoneNumber}
// // // //                   onChange={handleChange}
// // // //                 />
// // // //               </Grid>
// // // //               <Grid item xs={12}>
// // // //                 <TextField
// // // //                   id="outlined-basic-message"
// // // //                   label="Message"
// // // //                   hiddenLabel
// // // //                   size="small"
// // // //                   variant="outlined"
// // // //                   aria-label="Message"
// // // //                   placeholder="Message"
// // // //                   fullWidth
// // // //                   multiline
// // // //                   rows={4}
// // // //                   required
// // // //                   name="message"
// // // //                   value={formData.message}
// // // //                   onChange={handleChange}
// // // //                 />
// // // //               </Grid>
// // // //             </Grid>
// // // //             <Button
// // // //               type="submit"
// // // //               variant="contained"
// // // //               color="primary"
// // // //               sx={{ mt: 2 }}
// // // //             >
// // // //               Submit
// // // //             </Button>
// // // //           </form>
// // // //         </Box>
// // // //       </Container>
// // // //       <Footer />
// // // //     </ThemeProvider>
// // // //   );
// // // // };

// // // // export default BookEnquiry;

// // // import React, { useState } from "react";
// // // import PropTypes from "prop-types";
// // // import CssBaseline from "@mui/material/CssBaseline";
// // // import Box from "@mui/material/Box";
// // // import { ThemeProvider, createTheme } from "@mui/material/styles";
// // // import Typography from "@mui/material/Typography";
// // // import Button from "@mui/material/Button";
// // // import Grid from "@mui/material/Grid";
// // // import Container from "@mui/material/Container";
// // // import AppAppBar from "./AppAppBar";
// // // import getLPTheme from "../getLPTheme";
// // // import Footer from "./Footer";
// // // import Divider from "@mui/material/Divider";
// // // import TextField from "@mui/material/TextField";
// // // import { uniqueLocation } from "../utils/constant";
// // // import CircularProgress from "@mui/material/CircularProgress";
// // // import Modal from "@mui/material/Modal";

// // // function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
// // //   return (
// // //     <Box
// // //       sx={{
// // //         display: "flex",
// // //         justifyContent: "center",
// // //         mt: 2,
// // //       }}
// // //     >
// // //       <Button onClick={toggleCustomTheme} variant="contained" color="primary">
// // //         Toggle Custom Theme
// // //       </Button>
// // //     </Box>
// // //   );
// // // }

// // // ToggleCustomTheme.propTypes = {
// // //   showCustomTheme: PropTypes.bool.isRequired,
// // //   toggleCustomTheme: PropTypes.func.isRequired,
// // // };

// // // const BookEnquiry = () => {
// // //   console.log("uniqueLocation", uniqueLocation);
// // //   const [mode, setMode] = useState("light");
// // //   const [showCustomTheme, setShowCustomTheme] = useState(true);
// // //   const [formData, setFormData] = useState({
// // //     pickupLocation: "",
// // //     dropLocation: "",
// // //     journeyDate: "",
// // //     phoneNumber: "",
// // //     message: "",
// // //   });
// // //   const [loading, setLoading] = useState(false);
// // //   const [open, setOpen] = useState(false);
// // //   const [successMessage, setSuccessMessage] = useState("");
// // //   const [errorMessage, setErrorMessage] = useState("");

// // //   const LPtheme = createTheme(getLPTheme(mode));
// // //   const defaultTheme = createTheme({ palette: { mode } });

// // //   const toggleColorMode = () => {
// // //     setMode((prev) => (prev === "dark" ? "light" : "dark"));
// // //   };

// // //   const toggleCustomTheme = () => {
// // //     setShowCustomTheme((prev) => !prev);
// // //   };

// // //   const handleOpen = () => setOpen(true);
// // //   const handleClose = () => setOpen(false);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setErrorMessage("");
// // //     setSuccessMessage("");

// // //     const validationErrors = {};
// // //     if (!formData.pickupLocation.trim()) {
// // //       validationErrors.pickupLocation = "Pickup Location is required";
// // //     }
// // //     if (!formData.dropLocation.trim()) {
// // //       validationErrors.dropLocation = "Drop Location is required";
// // //     }
// // //     if (!formData.journeyDate.trim()) {
// // //       validationErrors.journeyDate = "Journey Date is required";
// // //     }
// // //     if (!formData.phoneNumber.trim()) {
// // //       validationErrors.phoneNumber = "Phone Number is required";
// // //     }

// // //     if (formData.pickupLocation === formData.dropLocation) {
// // //       validationErrors.dropLocation =
// // //         "Pickup and Drop locations cannot be the same";
// // //     }

// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       message: "",
// // //     }));

// // //     setErrorMessage(validationErrors);

// // //     if (Object.keys(validationErrors).length === 0) {
// // //       const requestOptions = {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           pickup_location: formData.pickupLocation,
// // //           drop_location: formData.dropLocation,
// // //           phone: formData.phoneNumber,
// // //           date: formData.journeyDate,
// // //         }),
// // //       };

// // //       try {
// // //         const response = await fetch(
// // //           "https://bookings-uhs1.onrender.com/api/v1/booking/create",
// // //           requestOptions
// // //         );

// // //         const data = await response.json();

// // //         if (response.ok) {
// // //           setSuccessMessage(data.message);
// // //           handleOpen();
// // //         } else {
// // //           setErrorMessage(data.message);
// // //           handleOpen();
// // //         }
// // //       } catch (error) {
// // //         setErrorMessage(error.message);
// // //         handleOpen();
// // //       }
// // //     }
// // //     setLoading(false);
// // //   };

// // //   const handlePickupLocationChange = (e) => {
// // //     const { value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       pickupLocation: value,
// // //     }));
// // //   };

// // //   const handleDropLocationChange = (e) => {
// // //     const { value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       dropLocation: value,
// // //     }));
// // //   };

// // //   return (
// // //     <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
// // //       <CssBaseline />
// // //       <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
// // //       <Container sx={{ mt: 20 }}>
// // //         <Typography variant="h2" align="center" gutterBottom>
// // //           Please fill up below details to confirm your Enquiry Booking
// // //         </Typography>
// // //         <Typography variant="body1" align="center" gutterBottom>
// // //           We will inform you if any cab is available as per your criteria.
// // //         </Typography>
// // //         <Divider />
// // //         <Box sx={{ mt: 4 }}>
// // //           <form onSubmit={handleSubmit}>
// // //             <Grid container spacing={2}>
// // //               <Grid item xs={12} sm={6}>
// // //                 <TextField
// // //                   id="outlined-basic-pickupLocation"
// // //                   label="Pickup Location"
// // //                   hiddenLabel
// // //                   size="small"
// // //                   variant="outlined"
// // //                   aria-label="Pickup Location"
// // //                   placeholder="Pickup Location"
// // //                   fullWidth
// // //                   required
// // //                   name="pickupLocation"
// // //                   value={formData.pickupLocation}
// // //                   onChange={handlePickupLocationChange}
// // //                   error={!!errorMessage.pickupLocation}
// // //                   helperText={errorMessage.pickupLocation}
// // //                 />
// // //                 <Box
// // //                   sx={{
// // //                     position: "absolute",
// // //                     width: "100%",
// // //                     marginTop: "1rem",
// // //                     maxHeight: "10rem",
// // //                     overflow: "auto",
// // //                     bgcolor: "background.paper",
// // //                     zIndex: 1000,
// // //                     borderRadius: "4px",
// // //                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// // //                     display: formData.pickupLocation ? "block" : "none",
// // //                   }}
// // //                 >
// // //                   {uniqueLocation
// // //                     .filter((location) =>
// // //                       location
// // //                         .toLowerCase()
// // //                         .includes(formData.pickupLocation.toLowerCase())
// // //                     )
// // //                     .map((location, index) => (
// // //                       <div
// // //                         key={index}
// // //                         onClick={() =>
// // //                           handlePickupLocationChange({
// // //                             target: { value: location },
// // //                           })
// // //                         }
// // //                       >
// // //                         <Typography
// // //                           sx={{
// // //                             padding: "0.5rem",
// // //                             cursor: "pointer",
// // //                           }}
// // //                         >
// // //                           {location}
// // //                         </Typography>
// // //                       </div>
// // //                     ))}
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={12} sm={6}>
// // //                 <TextField
// // //                   id="outlined-basic-dropLocation"
// // //                   label="Drop Location"
// // //                   hiddenLabel
// // //                   size="small"
// // //                   variant="outlined"
// // //                   aria-label="Drop Location"
// // //                   placeholder="Drop Location"
// // //                   fullWidth
// // //                   required
// // //                   name="dropLocation"
// // //                   value={formData.dropLocation}
// // //                   onChange={handleDropLocationChange}
// // //                   error={!!errorMessage.dropLocation}
// // //                   helperText={errorMessage.dropLocation}
// // //                 />
// // //                 <Box
// // //                   sx={{
// // //                     position: "absolute",
// // //                     width: "100%",
// // //                     marginTop: "1rem",
// // //                     maxHeight: "10rem",
// // //                     overflow: "auto",
// // //                     bgcolor: "background.paper",
// // //                     zIndex: 1000,
// // //                     borderRadius: "4px",
// // //                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// // //                     display: formData.dropLocation ? "block" : "none",
// // //                   }}
// // //                 >
// // //                   {uniqueLocation
// // //                     .filter((location) =>
// // //                       location
// // //                         .toLowerCase()
// // //                         .includes(formData.dropLocation.toLowerCase())
// // //                     )
// // //                     .map((location, index) => (
// // //                       <div
// // //                         key={index}
// // //                         onClick={() =>
// // //                           handleDropLocationChange({
// // //                             target: { value: location },
// // //                           })
// // //                         }
// // //                       >
// // //                         <Typography
// // //                           sx={{
// // //                             padding: "0.5rem",
// // //                             cursor: "pointer",
// // //                           }}
// // //                         >
// // //                           {location}
// // //                         </Typography>
// // //                       </div>
// // //                     ))}
// // //                 </Box>
// // //               </Grid>
// // //               <Grid item xs={12} sm={6}>
// // //                 <TextField
// // //                   id="outlined-basic-journeyDate"
// // //                   label="Journey Date"
// // //                   type="date"
// // //                   hiddenLabel
// // //                   size="small"
// // //                   variant="outlined"
// // //                   aria-label="Journey Date"
// // //                   fullWidth
// // //                   required
// // //                   name="journeyDate"
// // //                   value={formData.journeyDate}
// // //                   onChange={handleChange}
// // //                   error={!!errorMessage.journeyDate}
// // //                   helperText={errorMessage.journeyDate}
// // //                 />
// // //               </Grid>
// // //               <Grid item xs={12} sm={6}>
// // //                 <TextField
// // //                   id="outlined-basic-phoneNumber"
// // //                   label="Phone Number"
// // //                   hiddenLabel
// // //                   size="small"
// // //                   variant="outlined"
// // //                   aria-label="Phone Number"
// // //                   placeholder="Phone Number"
// // //                   fullWidth
// // //                   required
// // //                   name="phoneNumber"
// // //                   value={formData.phoneNumber}
// // //                   onChange={handleChange}
// // //                   error={!!errorMessage.phoneNumber}
// // //                   helperText={errorMessage.phoneNumber}
// // //                 />
// // //               </Grid>
// // //               <Grid item xs={12}>
// // //                 <TextField
// // //                   id="outlined-basic-message"
// // //                   label="Message"
// // //                   hiddenLabel
// // //                   size="small"
// // //                   variant="outlined"
// // //                   aria-label="Message"
// // //                   placeholder="Message"
// // //                   fullWidth
// // //                   multiline
// // //                   rows={4}
// // //                   required
// // //                   name="message"
// // //                   value={formData.message}
// // //                   onChange={handleChange}
// // //                 />
// // //               </Grid>
// // //             </Grid>
// // //             <Button
// // //               type="submit"
// // //               variant="contained"
// // //               color="primary"
// // //               sx={{ mt: 2 }}
// // //             >
// // //               {loading ? (
// // //                 <CircularProgress color="inherit" size={24} />
// // //               ) : (
// // //                 "Submit"
// // //               )}
// // //             </Button>
// // //           </form>
// // //           <Modal
// // //             open={open}
// // //             onClose={handleClose}
// // //             aria-labelledby="modal-modal-title"
// // //             aria-describedby="modal-modal-description"
// // //           >
// // //             <Box
// // //               sx={{
// // //                 position: "absolute",
// // //                 width: 400,
// // //                 bgcolor: "background.paper",
// // //                 border: "2px solid #000",
// // //                 boxShadow: 24,
// // //                 p: 4,
// // //                 top: "50%",
// // //                 left: "50%",
// // //                 transform: "translate(-50%, -50%)",
// // //               }}
// // //             >
// // //               <Typography
// // //                 id="modal-modal-title"
// // //                 variant="h6"
// // //                 component="h2"
// // //                 gutterBottom
// // //               >
// // //                 {successMessage || errorMessage}
// // //               </Typography>
// // //               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
// // //                 {successMessage ? "Booking Successful" : "Booking Failed"}
// // //               </Typography>
// // //             </Box>
// // //           </Modal>
// // //         </Box>
// // //       </Container>
// // //       <Footer />
// // //     </ThemeProvider>
// // //   );
// // // };

// // // export default BookEnquiry;

// // import React, { useState } from "react";
// // import PropTypes from "prop-types";
// // import CssBaseline from "@mui/material/CssBaseline";
// // import Box from "@mui/material/Box";
// // import { ThemeProvider, createTheme } from "@mui/material/styles";
// // import Typography from "@mui/material/Typography";
// // import Button from "@mui/material/Button";
// // import Grid from "@mui/material/Grid";
// // import Container from "@mui/material/Container";
// // import AppAppBar from "./AppAppBar";
// // import getLPTheme from "../getLPTheme";
// // import Footer from "./Footer";
// // import Divider from "@mui/material/Divider";
// // import TextField from "@mui/material/TextField";
// // import { uniqueLocation } from "../utils/constant";
// // import CircularProgress from "@mui/material/CircularProgress";
// // import Modal from "@mui/material/Modal";

// // function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
// //   return (
// //     <Box
// //       sx={{
// //         display: "flex",
// //         justifyContent: "center",
// //         mt: 2,
// //       }}
// //     >
// //       <Button onClick={toggleCustomTheme} variant="contained" color="primary">
// //         Toggle Custom Theme
// //       </Button>
// //     </Box>
// //   );
// // }

// // ToggleCustomTheme.propTypes = {
// //   showCustomTheme: PropTypes.bool.isRequired,
// //   toggleCustomTheme: PropTypes.func.isRequired,
// // };

// // const BookEnquiry = () => {
// //   console.log("uniqueLocation", uniqueLocation);
// //   const [mode, setMode] = useState("light");
// //   const [showCustomTheme, setShowCustomTheme] = useState(true);
// //   const [formData, setFormData] = useState({
// //     pickupLocation: "",
// //     dropLocation: "",
// //     journeyDate: "",
// //     phoneNumber: "",
// //     message: "",
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [open, setOpen] = useState(false);
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const [showPickupLocationList, setShowPickupLocationList] = useState(false);
// //   const [showDropLocationList, setShowDropLocationList] = useState(false);

// //   const LPtheme = createTheme(getLPTheme(mode));
// //   const defaultTheme = createTheme({ palette: { mode } });

// //   const toggleColorMode = () => {
// //     setMode((prev) => (prev === "dark" ? "light" : "dark"));
// //   };

// //   const toggleCustomTheme = () => {
// //     setShowCustomTheme((prev) => !prev);
// //   };

// //   const handleOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setErrorMessage("");
// //     setSuccessMessage("");

// //     const validationErrors = {};
// //     if (!formData.pickupLocation.trim()) {
// //       validationErrors.pickupLocation = "Pickup Location is required";
// //     }
// //     if (!formData.dropLocation.trim()) {
// //       validationErrors.dropLocation = "Drop Location is required";
// //     }
// //     if (!formData.journeyDate.trim()) {
// //       validationErrors.journeyDate = "Journey Date is required";
// //     }
// //     if (!formData.phoneNumber.trim()) {
// //       validationErrors.phoneNumber = "Phone Number is required";
// //     }

// //     if (formData.pickupLocation === formData.dropLocation) {
// //       validationErrors.dropLocation =
// //         "Pickup and Drop locations cannot be the same";
// //     }

// //     setFormData((prevData) => ({
// //       ...prevData,
// //       message: "",
// //     }));

// //     setErrorMessage(validationErrors);

// //     if (Object.keys(validationErrors).length === 0) {
// //       const requestOptions = {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           pickup_location: formData.pickupLocation,
// //           drop_location: formData.dropLocation,
// //           phone: formData.phoneNumber,
// //           date: formData.journeyDate,
// //         }),
// //       };

// //       try {
// //         const response = await fetch(
// //           "https://bookings-uhs1.onrender.com/api/v1/booking/create",
// //           requestOptions
// //         );

// //         const data = await response.json();

// //         if (response.ok) {
// //           setSuccessMessage(data.message);
// //           handleOpen();
// //         } else {
// //           setErrorMessage(data.message);
// //           handleOpen();
// //         }
// //       } catch (error) {
// //         setErrorMessage(error.message);
// //         handleOpen();
// //       }
// //     }
// //     setLoading(false);
// //   };

// //   const handlePickupLocationChange = (e) => {
// //     const { value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       pickupLocation: value,
// //     }));
// //     setShowPickupLocationList(false);
// //   };

// //   const handleDropLocationChange = (e) => {
// //     const { value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       dropLocation: value,
// //     }));
// //     setShowDropLocationList(false);
// //   };

// //   return (
// //     <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
// //       <CssBaseline />
// //       <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
// //       <Container sx={{ mt: 20 }}>
// //         <Typography variant="h2" align="center" gutterBottom>
// //           Please fill up below details to confirm your Enquiry Booking
// //         </Typography>
// //         <Typography variant="body1" align="center" gutterBottom>
// //           We will inform you if any cab is available as per your criteria.
// //         </Typography>
// //         <Divider />
// //         <Box sx={{ mt: 4 }}>
// //           <form onSubmit={handleSubmit}>
// //             <Grid container spacing={2}>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   id="outlined-basic-pickupLocation"
// //                   label="Pickup Location"
// //                   hiddenLabel
// //                   size="small"
// //                   variant="outlined"
// //                   aria-label="Pickup Location"
// //                   placeholder="Pickup Location"
// //                   fullWidth
// //                   required
// //                   name="pickupLocation"
// //                   value={formData.pickupLocation}
// //                   onChange={handlePickupLocationChange}
// //                   error={!!errorMessage.pickupLocation}
// //                   helperText={errorMessage.pickupLocation}
// //                   onFocus={() => setShowPickupLocationList(true)}
// //                   onBlur={() =>
// //                     setTimeout(() => setShowPickupLocationList(false), 200)
// //                   }
// //                 />
// //                 <Box
// //                   sx={{
// //                     position: "absolute",
// //                     width: "100%",
// //                     marginTop: "1rem",
// //                     maxHeight: "10rem",
// //                     overflow: "auto",
// //                     bgcolor: "background.paper",
// //                     zIndex: 1000,
// //                     borderRadius: "4px",
// //                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// //                     display: showPickupLocationList ? "block" : "none",
// //                   }}
// //                 >
// //                   {uniqueLocation
// //                     .filter((location) =>
// //                       location
// //                         .toLowerCase()
// //                         .includes(formData.pickupLocation.toLowerCase())
// //                     )
// //                     .map((location, index) => (
// //                       <div
// //                         key={index}
// //                         onClick={() =>
// //                           handlePickupLocationChange({
// //                             target: { value: location },
// //                           })
// //                         }
// //                       >
// //                         <Typography
// //                           sx={{
// //                             padding: "0.5rem",
// //                             cursor: "pointer",
// //                           }}
// //                         >
// //                           {location}
// //                         </Typography>
// //                       </div>
// //                     ))}
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   id="outlined-basic-dropLocation"
// //                   label="Drop Location"
// //                   hiddenLabel
// //                   size="small"
// //                   variant="outlined"
// //                   aria-label="Drop Location"
// //                   placeholder="Drop Location"
// //                   fullWidth
// //                   required
// //                   name="dropLocation"
// //                   value={formData.dropLocation}
// //                   onChange={handleDropLocationChange}
// //                   error={!!errorMessage.dropLocation}
// //                   helperText={errorMessage.dropLocation}
// //                   onFocus={() => setShowDropLocationList(true)}
// //                   onBlur={() =>
// //                     setTimeout(() => setShowDropLocationList(false), 200)
// //                   }
// //                 />
// //                 <Box
// //                   sx={{
// //                     position: "absolute",
// //                     width: "100%",
// //                     marginTop: "1rem",
// //                     maxHeight: "10rem",
// //                     overflow: "auto",
// //                     bgcolor: "background.paper",
// //                     zIndex: 1000,
// //                     borderRadius: "4px",
// //                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// //                     display: showDropLocationList ? "block" : "none",
// //                   }}
// //                 >
// //                   {uniqueLocation
// //                     .filter((location) =>
// //                       location
// //                         .toLowerCase()
// //                         .includes(formData.dropLocation.toLowerCase())
// //                     )
// //                     .map((location, index) => (
// //                       <div
// //                         key={index}
// //                         onClick={() =>
// //                           handleDropLocationChange({
// //                             target: { value: location },
// //                           })
// //                         }
// //                       >
// //                         <Typography
// //                           sx={{
// //                             padding: "0.5rem",
// //                             cursor: "pointer",
// //                           }}
// //                         >
// //                           {location}
// //                         </Typography>
// //                       </div>
// //                     ))}
// //                 </Box>
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   id="outlined-basic-journeyDate"
// //                   label="Journey Date"
// //                   type="date"
// //                   hiddenLabel
// //                   size="small"
// //                   variant="outlined"
// //                   aria-label="Journey Date"
// //                   fullWidth
// //                   required
// //                   name="journeyDate"
// //                   value={formData.journeyDate}
// //                   onChange={handleChange}
// //                   error={!!errorMessage.journeyDate}
// //                   helperText={errorMessage.journeyDate}
// //                 />
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   id="outlined-basic-phoneNumber"
// //                   label="Phone Number"
// //                   hiddenLabel
// //                   size="small"
// //                   variant="outlined"
// //                   aria-label="Phone Number"
// //                   placeholder="Phone Number"
// //                   fullWidth
// //                   required
// //                   name="phoneNumber"
// //                   value={formData.phoneNumber}
// //                   onChange={handleChange}
// //                   error={!!errorMessage.phoneNumber}
// //                   helperText={errorMessage.phoneNumber}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   id="outlined-basic-message"
// //                   label="Message"
// //                   hiddenLabel
// //                   size="small"
// //                   variant="outlined"
// //                   aria-label="Message"
// //                   placeholder="Message"
// //                   fullWidth
// //                   multiline
// //                   rows={4}
// //                   required
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                 />
// //               </Grid>
// //             </Grid>
// //             <Button
// //               type="submit"
// //               variant="contained"
// //               color="primary"
// //               sx={{ mt: 2 }}
// //             >
// //               {loading ? (
// //                 <CircularProgress color="inherit" size={24} />
// //               ) : (
// //                 "Submit"
// //               )}
// //             </Button>
// //           </form>
// //           <Modal
// //             open={open}
// //             onClose={handleClose}
// //             aria-labelledby="modal-modal-title"
// //             aria-describedby="modal-modal-description"
// //           >
// //             <Box
// //               sx={{
// //                 position: "absolute",
// //                 width: 400,
// //                 bgcolor: "background.paper",
// //                 border: "2px solid #000",
// //                 boxShadow: 24,
// //                 p: 4,
// //                 top: "50%",
// //                 left: "50%",
// //                 transform: "translate(-50%, -50%)",
// //               }}
// //             >
// //               <Typography
// //                 id="modal-modal-title"
// //                 variant="h6"
// //                 component="h2"
// //                 gutterBottom
// //               >
// //                 {successMessage || errorMessage}
// //               </Typography>
// //               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
// //                 {successMessage ? "Booking Successful" : "Booking Failed"}
// //               </Typography>
// //             </Box>
// //           </Modal>
// //         </Box>
// //       </Container>
// //       <Footer />
// //     </ThemeProvider>
// //   );
// // };

// // export default BookEnquiry;

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import AppAppBar from "./AppAppBar";
// import getLPTheme from "../getLPTheme";
// import Footer from "./Footer";
// import Divider from "@mui/material/Divider";
// import TextField from "@mui/material/TextField";
// import { uniqueLocation } from "../utils/constant";
// import CircularProgress from "@mui/material/CircularProgress";
// import Modal from "@mui/material/Modal";

// function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         mt: 2,
//       }}
//     >
//       <Button onClick={toggleCustomTheme} variant="contained" color="primary">
//         Toggle Custom Theme
//       </Button>
//     </Box>
//   );
// }

// ToggleCustomTheme.propTypes = {
//   showCustomTheme: PropTypes.bool.isRequired,
//   toggleCustomTheme: PropTypes.func.isRequired,
// };

// const BookEnquiry = () => {
//   console.log("uniqueLocation", uniqueLocation);
//   const [mode, setMode] = useState("light");
//   const [showCustomTheme, setShowCustomTheme] = useState(true);
//   const [formData, setFormData] = useState({
//     pickupLocation: "",
//     dropLocation: "",
//     journeyDate: "",
//     phoneNumber: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showPickupLocationList, setShowPickupLocationList] = useState(false);
//   const [showDropLocationList, setShowDropLocationList] = useState(false);
//   const [bookingId, setBookingId] = useState("");

//   const LPtheme = createTheme(getLPTheme(mode));
//   const defaultTheme = createTheme({ palette: { mode } });

//   const toggleColorMode = () => {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   const toggleCustomTheme = () => {
//     setShowCustomTheme((prev) => !prev);
//   };

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");
//     setBookingId("");

//     const validationErrors = {};
//     if (!formData.pickupLocation.trim()) {
//       validationErrors.pickupLocation = "Pickup Location is required";
//     }
//     if (!formData.dropLocation.trim()) {
//       validationErrors.dropLocation = "Drop Location is required";
//     }
//     if (!formData.journeyDate.trim()) {
//       validationErrors.journeyDate = "Journey Date is required";
//     }
//     if (!formData.phoneNumber.trim()) {
//       validationErrors.phoneNumber = "Phone Number is required";
//     }

//     if (formData.pickupLocation === formData.dropLocation) {
//       validationErrors.dropLocation =
//         "Pickup and Drop locations cannot be the same";
//     }

//     if (formData.phoneNumber.trim().length !== 10) {
//       validationErrors.phoneNumber = "Phone Number must be 10 digits";
//     }

//     setFormData((prevData) => ({
//       ...prevData,
//       message: "",
//     }));

//     setErrorMessage(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           pickup_location: formData.pickupLocation,
//           drop_location: formData.dropLocation,
//           phone: formData.phoneNumber,
//           date: formData.journeyDate,
//         }),
//       };

//       try {
//         const response = await fetch(
//           "https://bookings-uhs1.onrender.com/api/v1/booking/create",
//           requestOptions
//         );

//         const data = await response.json();

//         if (response.ok) {
//           setBookingId(data.data._id);
//           setSuccessMessage("Booking Successful");
//           handleOpen();
//         } else {
//           setErrorMessage(data.message);
//           handleOpen();
//         }
//       } catch (error) {
//         setErrorMessage(error.message);
//         handleOpen();
//       }
//     }
//     setLoading(false);
//   };

//   const handlePickupLocationChange = (e) => {
//     const { value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       pickupLocation: value,
//     }));
//     setShowPickupLocationList(false);
//   };

//   const handleDropLocationChange = (e) => {
//     const { value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       dropLocation: value,
//     }));
//     setShowDropLocationList(false);
//   };

//   return (
//     <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
//       <CssBaseline />
//       <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
//       <Container sx={{ mt: 20 }}>
//         <Typography variant="h2" align="center" gutterBottom>
//           Please fill up below details to confirm your Enquiry Booking
//         </Typography>
//         <Typography variant="body1" align="center" gutterBottom>
//           We will inform you if any cab is available as per your criteria.
//         </Typography>
//         <Divider />
//         <Box sx={{ mt: 4 }}>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="outlined-basic-pickupLocation"
//                   label="Pickup Location"
//                   hiddenLabel
//                   size="small"
//                   variant="outlined"
//                   aria-label="Pickup Location"
//                   placeholder="Pickup Location"
//                   fullWidth
//                   required
//                   name="pickupLocation"
//                   value={formData.pickupLocation}
//                   onChange={handlePickupLocationChange}
//                   error={!!errorMessage.pickupLocation}
//                   helperText={errorMessage.pickupLocation}
//                   onFocus={() => setShowPickupLocationList(true)}
//                   onBlur={() =>
//                     setTimeout(() => setShowPickupLocationList(false), 200)
//                   }
//                 />
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     width: "100%",
//                     marginTop: "1rem",
//                     maxHeight: "10rem",
//                     overflow: "auto",
//                     bgcolor: "background.paper",
//                     zIndex: 1000,
//                     borderRadius: "4px",
//                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                     display: showPickupLocationList ? "block" : "none",
//                   }}
//                 >
//                   {uniqueLocation
//                     .filter((location) =>
//                       location
//                         .toLowerCase()
//                         .includes(formData.pickupLocation.toLowerCase())
//                     )
//                     .map((location, index) => (
//                       <div
//                         key={index}
//                         onClick={() =>
//                           handlePickupLocationChange({
//                             target: { value: location },
//                           })
//                         }
//                       >
//                         <Typography
//                           sx={{
//                             padding: "0.5rem",
//                             cursor: "pointer",
//                           }}
//                         >
//                           {location}
//                         </Typography>
//                       </div>
//                     ))}
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="outlined-basic-dropLocation"
//                   label="Drop Location"
//                   hiddenLabel
//                   size="small"
//                   variant="outlined"
//                   aria-label="Drop Location"
//                   placeholder="Drop Location"
//                   fullWidth
//                   required
//                   name="dropLocation"
//                   value={formData.dropLocation}
//                   onChange={handleDropLocationChange}
//                   error={!!errorMessage.dropLocation}
//                   helperText={errorMessage.dropLocation}
//                   onFocus={() => setShowDropLocationList(true)}
//                   onBlur={() =>
//                     setTimeout(() => setShowDropLocationList(false), 200)
//                   }
//                 />
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     width: "100%",
//                     marginTop: "1rem",
//                     maxHeight: "10rem",
//                     overflow: "auto",
//                     bgcolor: "background.paper",
//                     zIndex: 1000,
//                     borderRadius: "4px",
//                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//                     display: showDropLocationList ? "block" : "none",
//                   }}
//                 >
//                   {uniqueLocation
//                     .filter((location) =>
//                       location
//                         .toLowerCase()
//                         .includes(formData.dropLocation.toLowerCase())
//                     )
//                     .map((location, index) => (
//                       <div
//                         key={index}
//                         onClick={() =>
//                           handleDropLocationChange({
//                             target: { value: location },
//                           })
//                         }
//                       >
//                         <Typography
//                           sx={{
//                             padding: "0.5rem",
//                             cursor: "pointer",
//                           }}
//                         >
//                           {location}
//                         </Typography>
//                       </div>
//                     ))}
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="outlined-basic-journeyDate"
//                   label="Journey Date"
//                   type="date"
//                   hiddenLabel
//                   size="small"
//                   variant="outlined"
//                   aria-label="Journey Date"
//                   fullWidth
//                   required
//                   name="journeyDate"
//                   value={formData.journeyDate}
//                   onChange={handleChange}
//                   error={!!errorMessage.journeyDate}
//                   helperText={errorMessage.journeyDate}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   id="outlined-basic-phoneNumber"
//                   label="Phone Number"
//                   hiddenLabel
//                   size="small"
//                   variant="outlined"
//                   aria-label="Phone Number"
//                   placeholder="Phone Number"
//                   fullWidth
//                   required
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   error={!!errorMessage.phoneNumber}
//                   helperText={errorMessage.phoneNumber}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   id="outlined-basic-message"
//                   label="Message"
//                   hiddenLabel
//                   size="small"
//                   variant="outlined"
//                   aria-label="Message"
//                   placeholder="Message"
//                   fullWidth
//                   multiline
//                   rows={4}
//                   required
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{ mt: 2 }}
//             >
//               {loading ? (
//                 <CircularProgress color="inherit" size={24} />
//               ) : (
//                 "Submit"
//               )}
//             </Button>
//           </form>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box
//               sx={{
//                 position: "absolute",
//                 width: 400,
//                 bgcolor: "background.paper",
//                 border: "2px solid #000",
//                 boxShadow: 24,
//                 p: 4,
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               <Typography
//                 id="modal-modal-title"
//                 variant="h6"
//                 component="h2"
//                 gutterBottom
//               >
//                 {successMessage && (
//                   <>
//                     Booking Successful
//                     <br />
//                     Booking Id: {bookingId}
//                     <br />
//                     We will get back to you soon.
//                   </>
//                 )}
//                 {errorMessage && (
//                   <>
//                     Booking Failed
//                     <br />
//                     {errorMessage}
//                   </>
//                 )}
//               </Typography>
//             </Box>
//           </Modal>
//         </Box>
//       </Container>
//       <Footer />
//     </ThemeProvider>
//   );
// };

// export default BookEnquiry;

import React, { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AppAppBar from "./AppAppBar";
import getLPTheme from "../getLPTheme";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { uniqueLocation } from "../utils/constant";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Button onClick={toggleCustomTheme} variant="contained" color="primary">
        Toggle Custom Theme
      </Button>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

const BookEnquiry = () => {
  // console.log("uniqueLocation", uniqueLocation);
  const [mode, setMode] = useState("light");
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
  const [errorMessage, setErrorMessage] = useState("");
  const [showPickupLocationList, setShowPickupLocationList] = useState(false);
  const [showDropLocationList, setShowDropLocationList] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
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
        console.log("data",data)

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

  const handlePickupLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      pickupLocation: value,
    }));
    setShowPickupLocationList(false);
  };

  const handleDropLocationChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dropLocation: value,
    }));
    setShowDropLocationList(false);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
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
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    marginTop: "1rem",
                    maxHeight: "10rem",
                    overflow: "auto",
                    bgcolor: "background.paper",
                    zIndex: 1000,
                    borderRadius: "4px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    display: showPickupLocationList ? "block" : "none",
                  }}
                >
                  {uniqueLocation
                    .filter((location) =>
                      location
                        .toLowerCase()
                        .includes(formData.pickupLocation.toLowerCase())
                    )
                    .map((location, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          handlePickupLocationChange({
                            target: { value: location },
                          })
                        }
                      >
                        <Typography
                          sx={{
                            padding: "0.5rem",
                            cursor: "pointer",
                          }}
                        >
                          {location}
                        </Typography>
                      </div>
                    ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic-dropLocation"
                  label="Drop Location"
                  hiddenLabel
                  size="small"
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
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    marginTop: "1rem",
                    maxHeight: "10rem",
                    overflow: "auto",
                    bgcolor: "background.paper",
                    zIndex: 1000,
                    borderRadius: "4px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    display: showDropLocationList ? "block" : "none",
                  }}
                >
                  {uniqueLocation
                    .filter((location) =>
                      location
                        .toLowerCase()
                        .includes(formData.dropLocation.toLowerCase())
                    )
                    .map((location, index) => (
                      <div
                        key={index}
                        onClick={() =>
                          handleDropLocationChange({
                            target: { value: location },
                          })
                        }
                      >
                        <Typography
                          sx={{
                            padding: "0.5rem",
                            cursor: "pointer",
                          }}
                        >
                          {location}
                        </Typography>
                      </div>
                    ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic-journeyDate"
                  label="Journey Date"
                  type="date"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Journey Date"
                  fullWidth
                  required
                  name="journeyDate"
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
                  hiddenLabel
                  size="small"
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
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  aria-label="Message"
                  placeholder="Message"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              {loading ? (
                <CircularProgress color="inherit" size={24} />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                gutterBottom
              >
                {successMessage && (
                  <>
                    Booking Successful
                    <br />
                    Booking Id: {bookingId}
                    <br />
                    We will get back to you soon.
                  </>
                )}
                {/* {errorMessage && (
                  <>
                    Booking Failed
                    <br />
                    {errorMessage}
                  </>
                )} */}
              </Typography>
            </Box>
          </Modal>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default BookEnquiry;
