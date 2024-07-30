// src/components/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
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
  marginTop: theme.spacing(8), // Adjusted margin-top for better spacing from the top
  marginBottom: theme.spacing(4), // Added margin-bottom for spacing below the form
  boxShadow: theme.shadows[8],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#090E10", // Added background color
  color: "#FFFFFF", // Added text color for better contrast
  position: "relative",
}));

const AnimatedBox = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: "#090E10", // Added background color
  color: "#FFFFFF", // Added text color for better contrast
}));

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StyledContainer = styled(Container)(({ theme }) => ({
  // backgroundColor: "#121212", // Added background color for the container
  color: "#FFFFFF", // Added text color for better contrast
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home page on successful sign in
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <AnimatedBox
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <StyledPaper>
          <Typography component="h1" variant="h5" gutterBottom>
            Sign In
          </Typography>
          <Divider sx={{ mb: 2, bgcolor: "#FFFFFF" }} />
          <Box component="form" onSubmit={handleSignIn} sx={{ mt: 1 }}>
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
              InputProps={{
                startAdornment: (
                  <Box sx={{ mr: 1 }}>
                    <i className="fas fa-envelope" />
                  </Box>
                ),
                style: { color: "#000000" }, // Text color inside the input field
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <Box sx={{ mr: 1 }}>
                    <i className="fas fa-lock" />
                  </Box>
                ),
                style: { color: "#000000" }, // Text color inside the input field
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Link href="/forgot-password" variant="body2" sx={{ color: "#FFFFFF" }}>
              Forgot password?
            </Link>
          </Box>
        </StyledPaper>
      </AnimatedBox>
    </StyledContainer>
  );
}

export default SignIn;
