// // src/components/SignIn.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import {
//   Container,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Link,
//   Divider,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import { motion } from "framer-motion";

// // Styled components
// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   maxWidth: 400,
//   margin: "auto",
//   marginTop: theme.spacing(8),
//   marginBottom: theme.spacing(4),
//   boxShadow: theme.shadows[8],
//   borderRadius: theme.shape.borderRadius,
//   position: "relative",
// }));

// const AnimatedBox = styled(motion.div)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
//   background: theme.palette.background.paper,
// }));

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/"); // Redirect to home page on successful sign in
//     } catch (error) {
//       console.error("Error signing in", error);
//       alert("Failed to sign in. Please check your email and password.");
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <AnimatedBox
//         initial="hidden"
//         animate="visible"
//         variants={fadeIn}
//         transition={{ duration: 1 }}
//       >
//         <StyledPaper>
//           <Typography component="h1" variant="h5" gutterBottom>
//             Sign In
//           </Typography>
//           <Divider sx={{ mb: 2 }} />
//           <Box component="form" onSubmit={handleSignIn} sx={{ mt: 1 }}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Link href="/forgot-password" variant="body2">
//               Forgot password?
//             </Link>
//             <Link
//               href="/sign-up"
//               variant="body2"
//               sx={{ display: "block", mt: 2 }}
//             >
//               Don't have an account? Sign Up
//             </Link>
//           </Box>
//         </StyledPaper>
//       </AnimatedBox>
//     </Container>
//   );
// }

// export default SignIn;

// src/components/SignIn.tsx
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
    <Container component="main" maxWidth="xs">
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
          <Divider sx={{ mb: 2 }} />
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
            <Link href="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </StyledPaper>
      </AnimatedBox>
    </Container>
  );
}

export default SignIn;
