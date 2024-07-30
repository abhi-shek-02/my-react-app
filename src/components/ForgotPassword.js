// src/components/ForgotPassword.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 400,
  margin: "auto",
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[8],
  borderRadius: theme.shape.borderRadius,
  position: "relative",
}));

const AnimatedBox = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  background: theme.palette.background.paper,
}));

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(getAuth(), email);
      // Handle successful password reset (e.g., show message or redirect)
      // navigate("/sign-in"); // Redirect to Sign In page after successful reset
    } catch (error) {
      console.error("Error resetting password", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <AnimatedBox
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <StyledPaper>
          <Typography component="h1" variant="h5" gutterBottom>
            Forgot Password
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box component="form" onSubmit={handleResetPassword} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
            <Link href="/sign-in" variant="body2">
              Remembered your password? Sign In
            </Link>
          </Box>
        </StyledPaper>
      </AnimatedBox>
    </Container>
  );
}

export default ForgotPassword;
