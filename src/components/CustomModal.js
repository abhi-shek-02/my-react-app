import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CustomModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Message
        </Typography>
        <Typography variant="body1" gutterBottom>
          We will reach you shortly.
        </Typography>
        <Button onClick={onClose} variant="contained" color="primary">
          OK
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
