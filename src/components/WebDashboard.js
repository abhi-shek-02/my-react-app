import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Pagination,
  TablePagination,
  InputLabel,
  FormControl,
  Modal,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; // Import Edit icon
const AdminPanel = () => {
  const [section, setSection] = useState("booking");

  return (
    <div style={{ marginTop: 120 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Admin Panel</Typography>
        </Toolbar>
      </AppBar>

      <Box my={2}>
        <Select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          fullWidth
        >
          <MenuItem value="enquiry">Get Enquiry Details</MenuItem>
          <MenuItem value="booking">Get Booking Details</MenuItem>
          <MenuItem value="contact">Get Contact Details</MenuItem>
        </Select>
      </Box>

      <Box my={4}>
        {section === "enquiry" && <GetEnquiryDetails />}
        {section === "booking" && <GetBookingDetails />}
        {section === "contact" && <GetContactDetails />}
      </Box>
    </div>
  );
};

// Component for Enquiry Details
const GetEnquiryDetails = () => {
  const [data, setData] = useState([]);
  const [filterPhone, setFilterPhone] = useState(""); // For phone number filter
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 30)) // Default start date 30 days ago
      .toISOString()
      .split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // Default to today
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  const fetchEnquiryDetails = async () => {
    try {
      const response = await fetch(
        `https://api.zingcab.in/api/admin/get-enquiry-details?startDate=${startDate}&endDate=${endDate}`
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setData(result.data);
      } else {
        console.error(
          "Error fetching enquiry details:",
          result.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error fetching enquiry details:", error);
    }
  };

  useEffect(() => {
    fetchEnquiryDetails(); // Fetch data initially when the component mounts
  }, [startDate, endDate]); // Trigger fetch when dates change

  // Filter data by phone number
  const filteredData = filterPhone
    ? data.filter((item) => item.phoneNumber.includes(filterPhone))
    : data;

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when changing rows per page
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)} // Update start date
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)} // Update end date
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Filter by Phone"
          value={filterPhone}
          onChange={(e) => setFilterPhone(e.target.value)} // Update phone filter
          fullWidth
        />
      </Box>

      <Button variant="contained" onClick={fetchEnquiryDetails}>
        Refresh Data
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Created At</TableCell>
              <TableCell>Pickup</TableCell>
              <TableCell>Drop</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date of Journey</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    {new Date(row.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{row.pickupLocation}</TableCell>
                  <TableCell>{row.dropLocation}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>
                    {new Date(row.dateOfJourney).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{row.message}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination controls */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

// Component for Booking Details
const GetBookingDetails = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 30)) // Default to 30 days ago
      .toISOString()
      .split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // Default to today
  const [searchField, setSearchField] = useState("BookingID"); // Dropdown search field
  const [searchValue, setSearchValue] = useState(""); // Search input value

  // Modal and Snackbar state
  const [openModal, setOpenModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [driverName, setDriverName] = useState("");
  const [driverPhoneNumber, setDriverPhoneNumber] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [remarks, setRemarks] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const fetchBookingDetails = async () => {
    try {
      const response = await fetch(
        `https://api.zingcab.in/api/admin/get-booking-details?startDate=${startDate}&endDate=${endDate}&page=${page}&limit=${rowsPerPage}`
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setData(result.data);
        setFilteredData(result.data); // Set initial filtered data
      } else {
        console.error(
          "Error fetching booking details:",
          result.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error fetching booking details:", error);
    }
  };

  useEffect(() => {
    fetchBookingDetails();
  }, [page, startDate, endDate, rowsPerPage]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    // Filter data based on selected search field and input value
    const filtered = data.filter((item) => {
      if (searchField === "BookingID") {
        return item.bookingId.includes(value);
      } else if (searchField === "Pickup") {
        return item.pickupLocation.includes(value);
      } else if (searchField === "Drop") {
        return item.dropLocation.includes(value);
      } else if (searchField === "Phone") {
        return item.phoneNumber.includes(value);
      } else if (searchField === "DriverAssigned") {
        return item.isDriverAssigned.toString().includes(value);
      } else if (searchField === "Car Number") {
        return item.driverDetails?.carNumber.includes(value);
      } else if (searchField === "Driver Phone Number") {
        return item.driverDetails?.driverPhoneNumber.includes(value);
      } else {
        return true;
      }
    });

    setFilteredData(filtered);
    setPage(1); // Reset to the first page when searching
  };

  const handleDateChange = () => {
    fetchBookingDetails(); // Fetch data when the date range changes
  };

  const openDriverAssignModal = (booking) => {
    setSelectedBooking(booking);
    setDriverName("");
    setDriverPhoneNumber("");
    setCarNumber("");
    setRemarks("");
    setOpenModal(true);
  };

  const handleDriverAssignment = async () => {
    if (!driverName || !driverPhoneNumber || !carNumber || !remarks) {
      setSnackbarMessage("Please fill all the fields.");
      setSnackbarSeverity("error");
      return;
    }

    const payload = {
      bookingId: selectedBooking.bookingId,
      driverName,
      driverPhoneNumber,
      carNumber,
      remarks,
    };

    try {
      const response = await fetch(
        "https://api.zingcab.in/api/admin/assign-driver",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setSnackbarMessage("Driver assigned successfully.");
        setSnackbarSeverity("success");
        fetchBookingDetails(); // Refresh the data
        setOpenModal(false); // Close the modal
      } else {
        setSnackbarMessage(result.message || "Failed to assign driver.");
        setSnackbarSeverity("error");
      }
    } catch (error) {
      console.error("Error assigning driver:", error);
      setSnackbarMessage("An error occurred while assigning the driver.");
      setSnackbarSeverity("error");
    }
  };

  return (
    <div>
      {/* Date Filter */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" onClick={handleDateChange}>
          Apply Date Filter
        </Button>
      </Box>

      {/* Search Filter */}
      <Box display="flex" mb={2} alignItems="center">
        <FormControl fullWidth>
          <InputLabel>Search By</InputLabel>
          <Select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            label="Search By"
          >
            <MenuItem value="BookingID">BookingID</MenuItem>
            <MenuItem value="Pickup">Pickup</MenuItem>
            <MenuItem value="Drop">Drop</MenuItem>
            <MenuItem value="Phone">Phone</MenuItem>
            <MenuItem value="DriverAssigned">DriverAssigned</MenuItem>
            <MenuItem value="Car Number">Car Number</MenuItem>
            <MenuItem value="Driver Phone Number">Driver Phone Number</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Search"
          value={searchValue}
          onChange={handleSearchChange}
          fullWidth
        />
      </Box>

      {/* Table with Booking Data */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>BookingID</TableCell>
              <TableCell>Date of Journey</TableCell>
              <TableCell>Pickup</TableCell>
              <TableCell>Drop</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Car Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Booking Status</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Driver Assigned</TableCell>
              <TableCell>Car Number</TableCell>
              <TableCell>Driver Phone Number</TableCell>
              <TableCell>Driver Name</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.bookingId}</TableCell>
                <TableCell>
                  {new Date(row.dateOfJourney).toLocaleDateString()}
                </TableCell>
                <TableCell>{row.pickupLocation}</TableCell>
                <TableCell>{row.dropLocation}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell>{row.carType}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.bookingStatus}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell>
                  {row.isDriverAssigned ? (
                    "Assigned"
                  ) : (
                    <IconButton onClick={() => openDriverAssignModal(row)}>
                      <EditIcon />
                    </IconButton>
                  )}
                </TableCell>
                <TableCell>{row.driverDetails?.carNumber}</TableCell>
                <TableCell>{row.driverDetails?.driverPhoneNumber}</TableCell>
                <TableCell>{row.driverDetails?.driverName}</TableCell>
                <TableCell>{row.driverDetails?.remarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Pagination
        count={Math.ceil(filteredData.length / rowsPerPage)}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
      />

      {/* Modal for Driver Assignment */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: 500,
            backgroundColor: "white",
            padding: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" mb={2}>
            Assign Driver
          </Typography>
          <TextField
            label="Driver Name"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            fullWidth
            mb={2}
          />
          <TextField
            label="Driver Phone Number"
            value={driverPhoneNumber}
            onChange={(e) => setDriverPhoneNumber(e.target.value)}
            fullWidth
            mb={2}
          />
          <TextField
            label="Car Number"
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            fullWidth
            mb={2}
          />
          <TextField
            label="Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            fullWidth
            mb={2}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="primary"
              onClick={handleDriverAssignment}
            >
              Assign Driver
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Snackbar for feedback messages */}
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={6000}
        onClose={() => setSnackbarMessage("")}
      >
        <Alert
          onClose={() => setSnackbarMessage("")}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

// Component for Contact Details
const GetContactDetails = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 30))
      .toISOString()
      .split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number filter
  const [filteredData, setFilteredData] = useState([]); // Filtered data
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  useEffect(() => {
    fetchContactDetails();
  }, [startDate, endDate]); // Trigger API call when dates change

  const fetchContactDetails = async () => {
    try {
      const response = await fetch(
        `https://api.zingcab.in/api/admin/get-contact-details?startDate=${startDate}&endDate=${endDate}`
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setData(result.data);
        setFilteredData(result.data); // Set initial filtered data
      } else {
        console.error(
          "Error fetching contact details:",
          result.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error fetching contact details:", error);
    }
  };

  // Handle filtering logic for phone number
  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);

    // Filter by date range first
    const filteredByDate = data.filter((item) => {
      const isInDateRange =
        new Date(item.createdAt) >= new Date(startDate) &&
        new Date(item.createdAt) <= new Date(endDate);
      return isInDateRange;
    });

    // Apply phone number filter if provided
    const filtered = phoneNumber
      ? filteredByDate.filter((item) => item.phoneNumber.includes(phoneNumber))
      : filteredByDate;

    setFilteredData(filtered);
    setPage(0); // Reset page to the first page when filters are applied
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when changing rows per page
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)} // Trigger API call on date change
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)} // Trigger API call on date change
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange} // Directly handle phone number filter
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Created At</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    {new Date(row.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.message}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination controls */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default AdminPanel;
