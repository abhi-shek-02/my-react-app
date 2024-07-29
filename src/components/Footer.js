// // import * as React from "react";
// // import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// // import Container from "@mui/material/Container";
// // import IconButton from "@mui/material/IconButton";
// // import Link from "@mui/material/Link";
// // import Stack from "@mui/material/Stack";
// // import TextField from "@mui/material/TextField";
// // import Typography from "@mui/material/Typography";

// // import FacebookIcon from "@mui/icons-material/GitHub";
// // import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import TwitterIcon from "@mui/icons-material/X";

// // const logoStyle = {
// //   width: "140px",
// //   height: "auto",
// // };

// // function Copyright() {
// //   return (
// //     <Typography variant="body2" color="text.secondary" mt={1}>
// //       {"Copyright © "}
// //       <Link href="https://mui.com/">Sitemark&nbsp;</Link>
// //       {new Date().getFullYear()}
// //     </Typography>
// //   );
// // }

// // export default function Footer() {
// //   return (
// //     <Container
// //       sx={{
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         gap: { xs: 4, sm: 8 },
// //         py: { xs: 8, sm: 10 },
// //         textAlign: { sm: "center", md: "left" },
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           display: "flex",
// //           flexDirection: { xs: "column", sm: "row" },
// //           width: "100%",
// //           justifyContent: "space-between",
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: 4,
// //             minWidth: { xs: "100%", sm: "60%" },
// //           }}
// //         >
// //           <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
// //             <Box sx={{ ml: "-15px" }}>
// //               <img
// //                 src={
// //                   "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
// //                 }
// //                 style={logoStyle}
// //                 alt="logo of sitemark"
// //               />
// //             </Box>
// //             <Typography variant="body2" fontWeight={600} gutterBottom>
// //               Contact Us
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary" mb={2}>
// //               Bagmari Road kolkata:- 700054
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary" mb={2}>
// //             Toll Free Number : 1800-0000-00
// //             </Typography>
// //             {/* <Stack direction="row" spacing={1} useFlexGap>
// //               <TextField
// //                 id="outlined-basic"
// //                 hiddenLabel
// //                 size="small"
// //                 variant="outlined"
// //                 fullWidth
// //                 aria-label="Enter your email address"
// //                 placeholder="Your email address"
// //                 inputProps={{
// //                   autocomplete: "off",
// //                   ariaLabel: "Enter your email address",
// //                 }}
// //               />
// //               <Button
// //                 variant="contained"
// //                 color="primary"
// //                 sx={{ flexShrink: 0 }}
// //               >
// //                 Subscribe
// //               </Button>
// //             </Stack> */}
// //           </Box>
// //         </Box>
// //         <Box
// //           sx={{
// //             display: { xs: "none", sm: "flex" },
// //             flexDirection: "column",
// //             gap: 1,
// //           }}
// //         >
// //           <Typography variant="body2" fontWeight={600}>
// //             Information
// //           </Typography>
// //           <Link color="text.secondary" href="#">
// //             About Us
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Contact Us
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Mission & Vission
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             How It's Work
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             FAQs
// //           </Link>
// //         </Box>
// //         <Box
// //           sx={{
// //             display: { xs: "none", sm: "flex" },
// //             flexDirection: "column",
// //             gap: 1,
// //           }}
// //         >
// //           <Typography variant="body2" fontWeight={600}>
// //             Quick Links
// //           </Typography>
// //           <Link color="text.secondary" href="#">
// //             Driver Policy
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Terms & Conditions
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Refund Policy
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Cancel Booking
// //           </Link>
// //         </Box>
// //         {/* <Box
// //           sx={{
// //             display: { xs: "none", sm: "flex" },
// //             flexDirection: "column",
// //             gap: 1,
// //           }}
// //         >
// //           <Typography variant="body2" fontWeight={600}>
// //             Legal
// //           </Typography>
// //           <Link color="text.secondary" href="#">
// //             Terms
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Privacy
// //           </Link>
// //           <Link color="text.secondary" href="#">
// //             Contact
// //           </Link>
// //         </Box> */}
// //       </Box>
// //       <Box
// //         sx={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           pt: { xs: 4, sm: 8 },
// //           width: "100%",
// //           borderTop: "1px solid",
// //           borderColor: "divider",
// //         }}
// //       >
// //         <div>
// //           <Link color="text.secondary" href="#">
// //             Privacy Policy
// //           </Link>
// //           <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
// //             &nbsp;•&nbsp;
// //           </Typography>
// //           <Link color="text.secondary" href="#">
// //             Terms of Service
// //           </Link>
// //           <Copyright />
// //         </div>
// //         <Stack
// //           direction="row"
// //           justifyContent="left"
// //           spacing={1}
// //           useFlexGap
// //           sx={{
// //             color: "text.secondary",
// //           }}
// //         >
// //           <IconButton
// //             color="inherit"
// //             href="https://github.com/mui"
// //             aria-label="GitHub"
// //             sx={{ alignSelf: "center" }}
// //           >
// //             <FacebookIcon />
// //           </IconButton>
// //           <IconButton
// //             color="inherit"
// //             href="https://twitter.com/MaterialUI"
// //             aria-label="X"
// //             sx={{ alignSelf: "center" }}
// //           >
// //             <TwitterIcon />
// //           </IconButton>
// //           <IconButton
// //             color="inherit"
// //             href="https://www.linkedin.com/company/mui/"
// //             aria-label="LinkedIn"
// //             sx={{ alignSelf: "center" }}
// //           >
// //             <LinkedInIcon />
// //           </IconButton>
// //         </Stack>
// //       </Box>
// //     </Container>
// //   );
// // }

// import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import IconButton from "@mui/material/IconButton";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";

// import FacebookIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/X";

// const logoStyle = {
//   width: "140px",
//   height: "auto",
// };

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" mt={1}>
//       {"Copyright © "}
//       <Link href="https://mui.com/">Sitemark&nbsp;</Link>
//       {new Date().getFullYear()}
//     </Typography>
//   );
// }

// export default function Footer() {
//   const navigate = useNavigate();

//   const handleAboutUsClick = () => {
//     navigate("/about");
//   };

//   const handleContactUsClick = () => {
//     navigate("/contact");
//   };

//   const handleMissionVisionClick = () => {
//     navigate("/mission-vision");
//   };

//   const handleHowItWorksClick = () => {
//     navigate("/how-it-works");
//   };

//   const handleFAQsClick = () => {
//     navigate("/faq");
//   };

//   return (
//     <Container
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: { xs: 4, sm: 8 },
//         py: { xs: 8, sm: 10 },
//         textAlign: { sm: "center", md: "left" },
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           width: "100%",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 4,
//             minWidth: { xs: "100%", sm: "60%" },
//           }}
//         >
//           <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
//             <Box sx={{ ml: "-15px" }}>
//               <Button onClick={() => navigate("/")} style={{ padding: 0 }}>
//                 <img
//                   src={
//                     "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
//                   }
//                   style={logoStyle}
//                   alt="logo of sitemark"
//                 />
//               </Button>
//             </Box>
//             <Typography variant="body2" fontWeight={600} gutterBottom>
//               Contact Us
//             </Typography>
//             <Typography variant="body2" color="text.secondary" mb={2}>
//               Bagmari Road kolkata:- 700054
//             </Typography>
//             <Typography variant="body2" color="text.secondary" mb={2}>
//               Toll Free Number : 1800-0000-00
//             </Typography>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             display: { xs: "none", sm: "flex" },
//             flexDirection: "column",
//             gap: 1,
//           }}
//         >
//           <Typography variant="body2" fontWeight={600}>
//             Information
//           </Typography>
//           <Link color="text.secondary" onClick={handleAboutUsClick}>
//             About Us
//           </Link>
//           <Link color="text.secondary" onClick={handleContactUsClick}>
//             Contact Us
//           </Link>
//           <Link color="text.secondary" onClick={handleMissionVisionClick}>
//             Mission & Vision
//           </Link>
//           <Link color="text.secondary" onClick={handleHowItWorksClick}>
//             How It Works
//           </Link>
//           <Link color="text.secondary" onClick={handleFAQsClick}>
//             FAQs
//           </Link>
//         </Box>
//         <Box
//           sx={{
//             display: { xs: "none", sm: "flex" },
//             flexDirection: "column",
//             gap: 1,
//           }}
//         >
//           <Typography variant="body2" fontWeight={600}>
//             Quick Links
//           </Typography>
//           <Link color="text.secondary" href="#">
//             Driver Policy
//           </Link>
//           <Link color="text.secondary" href="#">
//             Terms & Conditions
//           </Link>
//           <Link color="text.secondary" href="#">
//             Refund Policy
//           </Link>
//           <Link color="text.secondary" href="#">
//             Cancel Booking
//           </Link>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           pt: { xs: 4, sm: 8 },
//           width: "100%",
//           borderTop: "1px solid",
//           borderColor: "divider",
//         }}
//       >
//         <div>
//           <Link color="text.secondary" href="#">
//             Privacy Policy
//           </Link>
//           <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
//             &nbsp;•&nbsp;
//           </Typography>
//           <Link color="text.secondary" href="#">
//             Terms of Service
//           </Link>
//           <Copyright />
//         </div>
//         <Stack
//           direction="row"
//           justifyContent="left"
//           spacing={1}
//           useFlexGap
//           sx={{
//             color: "text.secondary",
//           }}
//         >
//           <IconButton
//             color="inherit"
//             href="https://github.com/mui"
//             aria-label="GitHub"
//             sx={{ alignSelf: "center" }}
//           >
//             <FacebookIcon />
//           </IconButton>
//           <IconButton
//             color="inherit"
//             href="https://twitter.com/MaterialUI"
//             aria-label="X"
//             sx={{ alignSelf: "center" }}
//           >
//             <TwitterIcon />
//           </IconButton>
//           <IconButton
//             color="inherit"
//             href="https://www.linkedin.com/company/mui/"
//             aria-label="LinkedIn"
//             sx={{ alignSelf: "center" }}
//           >
//             <LinkedInIcon />
//           </IconButton>
//         </Stack>
//       </Box>
//     </Container>
//   );
// }

import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">Sitemark&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate("/about");
  };

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  const handleMissionVisionClick = () => {
    navigate("/mission-and-vision");
  };

  const handleHowItWorksClick = () => {
    navigate("/how-it-works");
  };

  const handleFAQsClick = () => {
    navigate("/faq");
  };

  const handleDriverPolicyClick = () => {
    navigate("/driver-policy");
  };

  const handleTermsConditionsClick = () => {
    navigate("/terms-conditions");
  };

  const handleRefundPolicyClick = () => {
    navigate("/refund-policy");
  };

  const handleCancelBookingClick = () => {
    navigate("/cancel-booking");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: "-15px" }}>
              <Button onClick={() => navigate("/")} style={{ padding: 0 }}>
                <img
                  src={
                    "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
                  }
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </Button>
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Bagmari Road kolkata:- 700054
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Toll Free Number : 1800-0000-00
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Information
          </Typography>
          <Link color="text.secondary" onClick={handleAboutUsClick}>
            About Us
          </Link>
          <Link color="text.secondary" onClick={handleContactUsClick}>
            Contact Us
          </Link>
          <Link color="text.secondary" onClick={handleMissionVisionClick}>
            Mission & Vision
          </Link>
          <Link color="text.secondary" onClick={handleHowItWorksClick}>
            How It Works
          </Link>
          <Link color="text.secondary" onClick={handleFAQsClick}>
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Quick Links
          </Typography>
          {/* <Link color="text.secondary" onClick={handleDriverPolicyClick}>
            Driver Policy
          </Link> */}
          <Link color="text.secondary" onClick={handleTermsConditionsClick}>
            Terms & Conditions
          </Link>
          <Link color="text.secondary" onClick={handleRefundPolicyClick}>
            Refund Policy
          </Link>
          <Link color="text.secondary" onClick={handleCancelBookingClick}>
            Cancel Booking
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          {/* <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="/terms-conditions">
            Terms of Service
          </Link> */}
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          {/* <IconButton
            color="inherit"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          > */}
          {/* <FacebookIcon />
          </IconButton> */}
          <IconButton
            color="inherit"
            href="https://twitter.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
