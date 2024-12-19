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
  const [filterPhone, setFilterPhone] = useState("");

  const fetchEnquiryDetails = async () => {
    try {
      const response = await fetch(
        "https://api.zingcab.in/api/admin/get-enquiry-details"
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
    fetchEnquiryDetails();
  }, []);

  const filteredData = filterPhone
    ? data.filter((item) => item.phoneNumber.includes(filterPhone))
    : data;

  return (
    <div>
      <TextField
        label="Filter by Phone"
        value={filterPhone}
        onChange={(e) => setFilterPhone(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={fetchEnquiryDetails}>
        Refresh Data
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell>
                  {new Date(row.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

  const fetchContactDetails = async () => {
    try {
      const response = await fetch(
        "https://api.zingcab.in/api/admin/get-contact-details"
      );
      const result = await response.json();
      if (response.ok && result.success) {
        setData(result.data);
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

  useEffect(() => {
    fetchContactDetails();
  }, []);

  return (
    <div>
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
            {data.map((row) => (
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
    </div>
  );
};

export default AdminPanel;
