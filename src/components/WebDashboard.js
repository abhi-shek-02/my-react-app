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
} from "@mui/material";

const AdminPanel = () => {
  const [section, setSection] = useState("enquiry");

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
  const [page, setPage] = useState(1);

  const fetchBookingDetails = async () => {
    try {
      const response = await fetch(
        `https://api.zingcab.in/api/admin/get-booking-details?page=${page}&limit=10`
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setData(result.data);
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
  }, [page]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Pickup</TableCell>
              <TableCell>Drop</TableCell>
              <TableCell>Date of Journey</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.bookingId}</TableCell>
                <TableCell>{row.pickupLocation}</TableCell>
                <TableCell>{row.dropLocation}</TableCell>
                <TableCell>
                  {new Date(row.dateOfJourney).toLocaleDateString()}
                </TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell>
                  {row.isDriverAssigned ? "Assigned" : "Pending"}
                </TableCell>
                <TableCell>
                  {!row.isDriverAssigned ? "Assign Driver" : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(data.length / 10)}
        page={page}
        onChange={(e, value) => setPage(value)}
      />
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
