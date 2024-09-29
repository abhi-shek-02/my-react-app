// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import AppAppBar from "./AppAppBar";
// // import getLPTheme from "../getLPTheme";
// import Footer from "./Footer";
// import Divider from "@mui/material/Divider";
// import { Card } from "@mui/material";

// function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         mt: 2,
//       }}
//     >
//       <Button onClick={toggleCustomTheme} variant="contained" color="primary">
//         Toggle Custom Theme
//       </Button>
//     </Box>
//   );
// }

// ToggleCustomTheme.propTypes = {
//   showCustomTheme: PropTypes.bool.isRequired,
//   toggleCustomTheme: PropTypes.func.isRequired,
// };

// const About = () => {
//   const [mode, setMode] = useState("dark");
//   const [showCustomTheme, setShowCustomTheme] = useState(true);
//   // const LPtheme = createTheme(getLPTheme(mode));
//   const defaultTheme = createTheme({ palette: { mode } });

//   const toggleColorMode = () => {
//     setMode((prev) => (prev !== "dark" ? "dark" : "dark"));
//   };

//   const toggleCustomTheme = () => {
//     setShowCustomTheme((prev) => !prev);
//   };

//   return (
//     <Container>
//       {/* <CssBaseline /> */}
//       <AppAppBar />
//   <Container sx={{ mt: 1, mb: 10 }}>
//     <Typography
//       variant="h2"
//       align="center"
//       // gutterBottom
//       sx={{ color: "#095ff0", mt: 11, fontFamily: "'Roboto', sans-serif" }}
//     >
//       About Us
//     </Typography>
//     <Typography variant="body1" align="center" paragraph sx={{ mt: 5 }}>
//       Introducing ZingCab, your go-to choice for affordable intercity cab
//       services in West Bengal. With expertise, we've emerged as a leading
//       player in the industry, driven by our belief that "Return Fare is Not
//       Fair."
//     </Typography>
//     <Typography variant="body1" align="center" paragraph>
//       Our journey began with a simple yet profound realization during a trip
//       from Kolkata to Durgapur. Faced with the challenge of finding a
//       reliable and cost-effective travel option, our co-founder Rishi
//       experienced firsthand the inefficiencies of existing transportation
//       services. It was this experience that inspired us to revolutionize the
//       way people travel between cities.
//     </Typography>
//     <Typography variant="body1" align="center" paragraph>
//       At ZingCab, we offer a solution that's both convenient and economical.
//       By connecting travelers with empty-seated cars making one-sided
//       journeys, we ensure that you pay for only the distance you travel. No
//       more overcrowded carpools or inflated return fares—just comfortable
//       rides at the most competitive rates.
//     </Typography>
//     <Typography variant="body2" align="center">
//       Driven by our passion for enhancing the travel experience, we've
//       fine-tuned our processes over the years to provide our customers with
//       the best possible service. Whether you're a resident or a visitor,
//       ZingCab promises to deliver unmatched affordability without
//       compromising on quality or comfort.
//     </Typography>
//     <Typography variant="body2" align="center">
//       With ZingCab, you'll not only save money but also precious time. Say
//       goodbye to the hassle of finding transportation and hello to seamless,
//       stress-free travel. Whether you're exploring new destinations or
//       commuting for work, ZingCab is here to make your journey memorable for
//       all the right reasons.
//     </Typography>
//   </Container>
//   <Divider />
//   <Footer />
// </Container>
//   );
// };

// export default About;

import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import AppAppBar from "./AppAppBar";
import Footer from "./Footer";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../src/assets/l1.json";
import animationData2 from "../../src/assets/l2.json";
import animationData3 from "../../src/assets/l3.json";

const About = () => {
  const values = [
    {
      title: "Curious",
      description:
        "We are inquisitive. We ask questions to absorb, reflect, and solve.",
      icon: "/curious.avif",
    },
    {
      title: "Creative",
      description:
        "We are inventive. We experiment and create innovative solutions bringing endless possibilities to our customers.",
      icon: "/creative.avif",
    },
    {
      title: "Caring",
      description:
        "We help, support, and are available to our users around the clock.",
      icon: "/caring.avif",
    },
    {
      title: "Customer Focus",
      description:
        "We use the customer lens proactively to understand and anticipate their expectations.",
      icon: "/customerfocus.avif",
    },
    {
      title: "Commitment to Results",
      description:
        "We take ownership of tasks and achieve superior results in the face of all odds.",
      icon: "/commitmentresults.avif",
    },
    {
      title: "Continuous Improvement",
      description:
        "We make efforts to enhance products and processes, believing incremental changes are key to innovations.",
      icon: "/continousimprovement.avif",
    },
  ];

  return (
    <Container>
      <AppAppBar />

      {/* <Container sx={{ mt: 1, mb: 10 }}>
        <Typography
          variant="h2"
          align="center"
          // gutterBottom
          sx={{ color: "#095ff0", mt: 11, fontFamily: "'Roboto', sans-serif" }}
        >
          About Us
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mt: 5 }}>
          Introducing ZingCab, your go-to choice for affordable intercity cab
          services in West Bengal. With expertise, we've emerged as a leading
          player in the industry, driven by our belief that "Return Fare is Not
          Fair."
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Our journey began with a simple yet profound realization during a trip
          from Kolkata to Durgapur. Faced with the challenge of finding a
          reliable and cost-effective travel option, our co-founder Rishi
          experienced firsthand the inefficiencies of existing transportation
          services. It was this experience that inspired us to revolutionize the
          way people travel between cities.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          At ZingCab, we offer a solution that's both convenient and economical.
          By connecting travelers with empty-seated cars making one-sided
          journeys, we ensure that you pay for only the distance you travel. No
          more overcrowded carpools or inflated return fares—just comfortable
          rides at the most competitive rates.
        </Typography>
        <Typography variant="body2" align="center">
          Driven by our passion for enhancing the travel experience, we've
          fine-tuned our processes over the years to provide our customers with
          the best possible service. Whether you're a resident or a visitor,
          ZingCab promises to deliver unmatched affordability without
          compromising on quality or comfort.
        </Typography>
        <Typography variant="body2" align="center">
          With ZingCab, you'll not only save money but also precious time. Say
          goodbye to the hassle of finding transportation and hello to seamless,
          stress-free travel. Whether you're exploring new destinations or
          commuting for work, ZingCab is here to make your journey memorable for
          all the right reasons.
        </Typography>
      </Container> */}

      <Container sx={{ mt: 1, mb: 10 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ color: "#095ff0", mt: 11, fontFamily: "'Roboto', sans-serif" }}
        >
          About Us
        </Typography>

        {/* Introduction section with Lottie animation */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 5 }}>
          <Grid item xs={12} sm={6}>
            <Player
              autoplay
              loop
              src={animationData3} // Your Lottie JSON path
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left" paragraph>
              Introducing ZingCab, your go-to choice for affordable intercity
              cab services in West Bengal. With expertise, we've emerged as a
              leading player in the industry, driven by our belief that{" "}
              <b>"Return Fare is Not Fair."</b>
            </Typography>
          </Grid>
        </Grid>

        {/* Our Journey section with Lottie animation */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 5 }}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Typography variant="body1" align="left" paragraph>
              Our journey began with a simple yet profound realization during a
              trip from Kolkata to Durgapur. Faced with the challenge of finding
              a reliable and cost-effective travel option, our co-founder Rishi
              experienced firsthand the inefficiencies of existing
              transportation services. This inspired us to revolutionize the way
              people travel between cities.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <Player
              autoplay
              loop
              src={animationData2} // Another Lottie JSON path
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
        </Grid>

        {/* Solution Section with Lottie */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 5 }}>
          <Grid item xs={12} sm={6}>
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left" paragraph>
              At ZingCab, we offer a solution that's both convenient and
              economical. By connecting travelers with empty-seated cars making
              one-sided journeys, we ensure that you pay for only the distance
              you travel. No more overcrowded carpools or inflated return
              fares—just comfortable rides at the most competitive rates.
            </Typography>
          </Grid>
        </Grid>

        {/* Closing Section */}
        <Typography variant="body2" align="center" paragraph sx={{ mt: 5 }}>
          Driven by our passion for enhancing the travel experience, we've
          fine-tuned our processes to provide the best possible service. Whether
          you're a resident or visitor, ZingCab promises to deliver unmatched
          affordability without compromising on quality or comfort.
        </Typography>
        <Typography variant="body2" align="center" paragraph>
          With ZingCab, you'll not only save money but also precious time. Say
          goodbye to the hassle of finding transportation and hello to seamless,
          stress-free travel. Whether you're exploring new destinations or
          commuting for work, ZingCab is here to make your journey memorable for
          all the right reasons.
        </Typography>
      </Container>

      <Container sx={{ mt: 8, mb: 10 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ color: "#095ff0", mt: 5, fontFamily: "'Roboto', sans-serif" }}
        >
          Our Culture
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2, mb: 5 }}>
          The 6 core values that we stand by, that make us who we are
        </Typography>

        {/* Use Grid with proper spacing */}
        <Grid container spacing={4} justifyContent="center">
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  height: "80%",
                  p: 3,
                  boxShadow: 3,
                }}
              >
                <Box
                  component="img"
                  src={value.icon}
                  alt={value.title}
                  sx={{ width: "180px", height: "auto", mb: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider />
      <Footer />
    </Container>
  );
};

export default About;

// import React from "react";
// import { Box, Container, Grid, Card, Typography } from "@mui/material";

// const About = () => {
//   return (
//     <Container sx={{ mt: 5 }}>
//       {/* Title Section */}
//       <Typography
//         variant="h4"
//         align="center"
//         sx={{ fontWeight: 600, color: "#2D3748", mb: 4 }}
//       >
//         Our Contribution
//       </Typography>
//       <Typography
//         variant="subtitle1"
//         align="center"
//         sx={{ color: "#718096", mb: 6 }}
//       >
//         Take a look at our contribution and how we have helped save the
//         environment with the help of Fresh Bus
//       </Typography>

//       {/* Cards Section */}
//       <Grid container spacing={4}>
//         {/* Card 1 */}
//         <Grid item xs={12} md={4}>
//           <Card
//             sx={{
//               p: 3,
//               backgroundColor: "#F7FAFC",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//               borderRadius: 2,
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               variant="body2"
//               sx={{ fontWeight: 600, color: "#4A5568" }}
//             >
//               CO2 emission saved
//             </Typography>
//             <Typography variant="h3" sx={{ color: "#095ff0", mt: 1 }}>
//               10000
//             </Typography>
//           </Card>
//         </Grid>

//         {/* Card 2 */}
//         <Grid item xs={12} md={4}>
//           <Card
//             sx={{
//               p: 3,
//               backgroundColor: "#F7FAFC",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//               borderRadius: 2,
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               variant="body2"
//               sx={{ fontWeight: 600, color: "#4A5568" }}
//             >
//               Fuel saved 100%
//             </Typography>
//             <Typography variant="h3" sx={{ color: "#095ff0", mt: 1 }}>
//               100%
//             </Typography>
//           </Card>
//         </Grid>

//         {/* Card 3 */}
//         <Grid item xs={12} md={4}>
//           <Card
//             sx={{
//               p: 3,
//               backgroundColor: "#F7FAFC",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//               borderRadius: 2,
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               variant="body2"
//               sx={{ fontWeight: 600, color: "#4A5568" }}
//             >
//               Trees saved 10K
//             </Typography>
//             <Typography variant="h3" sx={{ color: "#095ff0", mt: 1 }}>
//               10K
//             </Typography>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default About;

// <Typography
// variant="h4"
// align="center"
// sx={{ fontWeight: 600, color: "#2D3748", mb: 4 }}
// >
// Our Contribution
// </Typography>
// <Typography
// variant="subtitle1"
// align="center"
// sx={{ color: "#718096", mb: 6 }}
// >
// Take a look at our contribution and how we have helped save the
// environment with the help of Zing Cab
// </Typography>

// <Grid container spacing={4}>
// {/* Card 1 */}
// <Grid item xs={12} md={4}>
//   <Card
//     sx={{
//       p: 3,
//       backgroundColor: "#F7FAFC",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//       borderRadius: 2,
//       textAlign: "center",
//     }}
//   >
//     <Typography
//       variant="body2"
//       sx={{ fontWeight: 600, color: "#4A5568" }}
//     >
//       CO2 emission saved
//     </Typography>
//     <Typography variant="h3" sx={{ color: "#095ff0", mt: 1 }}>
//       10000
//     </Typography>
//   </Card>
// </Grid>

// {/* Card 2 */}
// <Grid item xs={12} md={4}>
//   <Card
//     sx={{
//       p: 3,
//       backgroundColor: "#F7FAFC",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//       borderRadius: 2,
//       textAlign: "center",
//     }}
//   >
//     <Typography
//       variant="body2"
//       sx={{ fontWeight: 600, color: "#4A5568" }}
//     >
//       Fuel saved 100%
//     </Typography>
//     <Typography variant="h3" sx={{ color: "#095ff0", mt: 1 }}>
//       100%
//     </Typography>
//   </Card>
// </Grid>

// {/* Card 3 */}
// <Grid item xs={12} md={4}>
//   <Card
//     sx={{
//       p: 3,
//       backgroundColor: "#F7FAFC",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//       borderRadius: 2,
//       textAlign: "center",
//     }}
//   >
//     <Typography
//       variant="body2"
//       sx={{ fontWeight: 600, color: "#4A5568" }}
//     >
//       Trees saved 10K
//     </Typography>
//     <Typography variant="h3" sx={{ color: "#095ff0", mt: 1 }}>
//       10K
//     </Typography>
//   </Card>
// </Grid>
// </Grid>

{
  /* <Container sx={{ mt: 1, mb: 10 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ color: "#095ff0", mt: 11, fontFamily: "'Roboto', sans-serif" }}
        >
          About Us
        </Typography>

        {/* Introduction section with an image */
}
//   <Grid container spacing={4} alignItems="center" sx={{ mt: 5 }}>
//     <Grid item xs={12} sm={6}>
//       <Box
//         component="img"
//         src="/images/cab_service.jpg"
//         alt="ZingCab Service"
//         sx={{ width: "100%" }}
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant="body1" align="left" paragraph>
//         Introducing ZingCab, your go-to choice for affordable intercity
//         cab services in West Bengal. With expertise, we've emerged as a
//         leading player in the industry, driven by our belief that{" "}
//         <b>"Return Fare is Not Fair."</b>
//       </Typography>
//     </Grid>
//   </Grid>

//   {/* Our Journey section */}
//   <Grid container spacing={4} alignItems="center" sx={{ mt: 5 }}>
//     <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
//       <Typography variant="body1" align="left" paragraph>
//         Our journey began with a simple yet profound realization during a
//         trip from Kolkata to Durgapur. Faced with the challenge of finding
//         a reliable and cost-effective travel option, our co-founder Rishi
//         experienced the inefficiencies of existing transportation services
//         firsthand. It was this experience that inspired us to
//         revolutionize the way people travel between cities.
//       </Typography>
//     </Grid>
//     <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
//       <Box
//         component="img"
//         src="/images/journey_image.jpg"
//         alt="Journey"
//         sx={{ width: "100%" }}
//       />
//     </Grid>
//   </Grid>

//   {/* Solution Section */}
//   <Grid container spacing={4} alignItems="center" sx={{ mt: 5 }}>
//     <Grid item xs={12} sm={6}>
//       <Box
//         component="img"
//         src="/images/economical_solution.jpg"
//         alt="Economical solution"
//         sx={{ width: "100%" }}
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <Typography variant="body1" align="left" paragraph>
//         At ZingCab, we offer a solution that's both convenient and
//         economical. By connecting travelers with empty-seated cars making
//         one-sided journeys, we ensure that you pay for only the distance
//         you travel. No more overcrowded carpools or inflated return
//         fares—just comfortable rides at the most competitive rates.
//       </Typography>
//     </Grid>
//   </Grid>

//   {/* Closing Section */}
//   <Typography variant="body2" align="center" paragraph sx={{ mt: 5 }}>
//     Driven by our passion for enhancing the travel experience, we've
//     fine-tuned our processes to provide the best possible service. Whether
//     you're a resident or visitor, ZingCab promises to deliver unmatched
//     affordability without compromising on quality or comfort.
//   </Typography>
//   <Typography variant="body2" align="center" paragraph>
//     With ZingCab, you'll not only save money but also precious time. Say
//     goodbye to the hassle of finding transportation and hello to seamless,
//     stress-free travel. Whether you're exploring new destinations or
//     commuting for work, ZingCab is here to make your journey memorable for
//     all the right reasons.
//   </Typography>
// </Container> */}
