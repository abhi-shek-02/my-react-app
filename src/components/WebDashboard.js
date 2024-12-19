import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  MenuItem,
  Select,
  TextField,
  Button,
  Modal,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Pagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const AdminPanel = () => {
  const [section, setSection] = useState("enquiry");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [filterPhone, setFilterPhone] = useState("");
  const [driverDetails, setDriverDetails] = useState({
    bookingId: "",
    driverName: "",
    driverPhoneNumber: "",
    carNumber: "",
    remarks: "",
  });

  const fetchData = async () => {
    try {
      const apiUrl =
        section === "enquiry"
          ? `https://api.zingcab.in/api/admin/get-contact-details?startDate=${startDate}&endDate=${endDate}`
          : `https://api.zingcab.in/api/admin/get-booking-details?startDate=${startDate}&endDate=${endDate}&page=${page}&limit=10`;

      const response = await fetch(apiUrl);
      const result = await response.json();

      if (response.ok && result.success) {
        setData(result.data);
      } else {
        console.error(
          "Error fetching data:",
          result.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const defaultEndDate = new Date().toISOString().split("T")[0];
    const defaultStartDate = new Date();
    defaultStartDate.setDate(defaultStartDate.getDate() - 30);
    setStartDate(defaultStartDate.toISOString().split("T")[0]);
    setEndDate(defaultEndDate);
  }, []);

  useEffect(() => {
    if (startDate && endDate) fetchData();
  }, [section, startDate, endDate, page]);

  const handleAssignDriver = async () => {
    try {
      const response = await fetch(
        "https://api.zingcab.in/api/admin/assign-driver",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(driverDetails),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        alert(result.message);
        setModalOpen(false);
        fetchData();
      } else {
        alert(`Error: ${result.message || "Unable to assign driver."}`);
      }
    } catch (error) {
      console.error("Error assigning driver:", error);
    }
  };

  const filteredData =
    section === "enquiry" && filterPhone
      ? data.filter((item) => item.phoneNumber.includes(filterPhone))
      : data;

  return (
    <Container>
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
        </Select>
      </Box>

      <Box display="flex" gap={2} my={2}>
        <TextField
          type="date"
          label="Start Date"
          InputLabelProps={{ shrink: true }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
        />
        <TextField
          type="date"
          label="End Date"
          InputLabelProps={{ shrink: true }}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
        />
        {section === "enquiry" && (
          <TextField
            label="Filter by Phone"
            value={filterPhone}
            onChange={(e) => setFilterPhone(e.target.value)}
            fullWidth
          />
        )}
        <Button variant="contained" onClick={fetchData}>
          Fetch Data
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {section === "enquiry" ? (
                <>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Created At</TableCell>
                </>
              ) : (
                <>
                  <TableCell>Booking ID</TableCell>
                  <TableCell>Date of Journey</TableCell>
                  <TableCell>Pickup</TableCell>
                  <TableCell>Drop</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Car Type</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Driver Name</TableCell>
                  <TableCell>Driver Phone</TableCell>
                  <TableCell>Car Number</TableCell>
                  <TableCell>Remarks</TableCell>
                  <TableCell>Actions</TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row._id}>
                {section === "enquiry" ? (
                  <>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.subject}</TableCell>
                    <TableCell>{row.message}</TableCell>
                    <TableCell>
                      {new Date(row.createdAt).toLocaleDateString()}
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{row.bookingId}</TableCell>
                    <TableCell>
                      {new Date(row.dateOfJourney).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{row.pickupLocation}</TableCell>
                    <TableCell>{row.dropLocation}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.carType}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>
                      {row.isDriverAssigned ? "Assigned" : "Pending"}
                    </TableCell>
                    <TableCell>
                      {row.isDriverAssigned
                        ? row.driverDetails?.driverName
                        : ""}
                    </TableCell>
                    <TableCell>
                      {row.isDriverAssigned
                        ? row.driverDetails?.driverPhoneNumber
                        : ""}
                    </TableCell>
                    <TableCell>
                      {row.isDriverAssigned ? row.driverDetails?.carNumber : ""}
                    </TableCell>
                    <TableCell>
                      {row.isDriverAssigned ? row.driverDetails?.remarks : ""}
                    </TableCell>
                    <TableCell>
                      {!row.isDriverAssigned && (
                        <IconButton
                          onClick={() => {
                            setDriverDetails({
                              bookingId: row.bookingId,
                              driverName: "",
                              driverPhoneNumber: "",
                              carNumber: "",
                              remarks: "",
                            });
                            setModalOpen(true);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {section === "booking" && (
        <Box my={2} display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(data.length / 10)}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          p={4}
          bgcolor="white"
          borderRadius={2}
          boxShadow={24}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Typography variant="h6">Assign Driver</Typography>
          <TextField
            label="Driver Name"
            value={driverDetails.driverName}
            onChange={(e) =>
              setDriverDetails({ ...driverDetails, driverName: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Driver Phone Number"
            value={driverDetails.driverPhoneNumber}
            onChange={(e) =>
              setDriverDetails({
                ...driverDetails,
                driverPhoneNumber: e.target.value,
              })
            }
            fullWidth
          />
          <TextField
            label="Car Number"
            value={driverDetails.carNumber}
            onChange={(e) =>
              setDriverDetails({ ...driverDetails, carNumber: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Remarks"
            value={driverDetails.remarks}
            onChange={(e) =>
              setDriverDetails({ ...driverDetails, remarks: e.target.value })
            }
            fullWidth
          />
          <Button variant="contained" onClick={handleAssignDriver}>
            Assign Driver
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default AdminPanel;
