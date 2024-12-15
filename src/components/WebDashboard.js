import React, { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Sample booking data
const bookingData = [
  {
    bookingId: "B001",
    dateOfJourney: "2024-08-01",
    pickupLocation: "Location A",
    dropLocation: "Location B",
    amount: 100,
    cabType: "Sedan",
    userId: "U001",
    phone: "1234567890",
    email: "user1@example.com",
    name: "Abhi",
  },
  {
    bookingId: "B002",
    dateOfJourney: "2024-08-02",
    pickupLocation: "Location C",
    dropLocation: "Location D",
    amount: 200,
    cabType: "SUV",
    userId: "U002",
    phone: "0987654321",
    email: "user2@example.com",
    name: "Shaw",
  },
  // Add more booking data here
];

const WebDashboard = () => {
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setFilterValue(""); // Clear filter value when filter type changes
  };

  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredBookings = bookingData.filter((booking) => {
    if (!filter || !filterValue) return true;
    return booking[filter].toString().includes(filterValue);
  });

  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ margin: "auto", maxWidth: "90%", padding: 2 }}
      >
        <Box sx={{ marginTop: 10, marginBottom: 2, padding: 2 }}>
          <TextField
            select
            label="Filter by"
            value={filter}
            onChange={handleFilterChange}
            sx={{ marginRight: 2, width: "20%" }}
          >
            <MenuItem value="bookingId">Booking ID</MenuItem>
            <MenuItem value="dateOfJourney">Date of Journey</MenuItem>
            <MenuItem value="userId">User ID</MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
          </TextField>
          <TextField
            label="Filter value"
            value={filterValue}
            onChange={handleFilterValueChange}
            sx={{ width: "20%" }}
          />
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Date of Journey</TableCell>
              <TableCell>Pickup Location</TableCell>
              <TableCell>Drop Location</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Cab Type</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBookings.map((booking, index) => (
              <TableRow key={index}>
                <TableCell>{booking.bookingId}</TableCell>
                <TableCell>{booking.dateOfJourney}</TableCell>
                <TableCell>{booking.pickupLocation}</TableCell>
                <TableCell>{booking.dropLocation}</TableCell>
                <TableCell>${booking.amount}</TableCell>
                <TableCell>{booking.cabType}</TableCell>
                <TableCell>{booking.userId}</TableCell>
                <TableCell>{booking.phone}</TableCell>
                <TableCell>{booking.email}</TableCell>
                <TableCell>{booking.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WebDashboard;
