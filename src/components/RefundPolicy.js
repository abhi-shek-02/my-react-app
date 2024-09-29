// // RefundPolicy
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
// import ListItem from "@mui/material/ListItem";

// const RefundPolicy = () => {
//   return (
//     <Container>
//       <Container sx={{ mt: 20, mb: 10 }}>
//         <Typography variant="h2" align="center" gutterBottom>
//           Refund Policy
//         </Typography>
//         <Typography variant="body1" align="center" paragraph>
//           For any reason, You are not completely satisfied with your booking or
//           have multiple itineraries for the same trip, we invite you to review
//           our Refund Policy. LiftDedoo believes in helping its customers as much
//           as possible and has, therefore, a reliable cancellation and refund
//           policy.
//         </Typography>
//         <Typography>
//           Please check our rules and restrictions for refund details prior to
//           initiating a change or cancellation.
//         </Typography>
//         <Typography
//           variant="h6"
//           align="center"
//           gutterBottom
//           sx={{ mt: 5, mb: 2 }}
//         >
//           Cancellation & Refunds Policy
//         </Typography>
//         <Typography variant="body1" align="center" paragraph component="div">
//           At any stage, you may be able to cancel your booking online but these
//           rules will be applied:
//           <ListItem>
//             The amendments can be done by Cancel Booking link and mention the
//             booking confirmation number (Booking ID).If the user cancel before 1
//             hour of schedule deputure full refund will be process ( Advance
//             amount paid by the customer) If the user Cancel after the schedule
//             deputure, will be treated as a no show and no payment or
//             compensatation will be provided. In case no show of cab driver full
//             refund will be processed ( Within the schedule depature time)
//           </ListItem>
//         </Typography>
//         <Typography variant="h6" align="center" gutterBottom>
//           How does it work?
//         </Typography>
//         <Typography variant="body1" align="center" paragraph>
//           The cancellation can be made over the official website "Cancel
//           Booking". Here you must know that no cancellations are entertained in
//           any case for those services that the Lift De Doo marketing team has
//           obtained on special occasions like Pongal, Dussehra, New year, Diwali,
//           etc. These are the limited-time offers, that’s why cancellations are
//           not possible.
//         </Typography>
//         <Typography variant="body1" align="center" paragraph>
//           LiftDedoo will not be responsible for any delay of service in case of
//           any natural calamity, Strike, Road Jam, agitation, etc. Moreover, we
//           have the rights to cancel/change the booking of vehicle at any point
//           of time.
//         </Typography>
//         <Typography variant="h6" align="center" gutterBottom>
//           Vehicle Breakdown
//         </Typography>
//         <Typography variant="body1" align="center" paragraph>
//           In a situation where the driver’s vehicle breaks down on the trip, you
//           may ask the driver to find an alternative hire service for you.
//           Liftdedoo holds no responsibility in such situations for making any
//           special arrangements whatsoever. If the driver fails to arrange any
//           alternative hire service for you, you may be liable to pay an
//           appropriate fare for the part of the trip covered by the driver, as
//           may be mutually agreeable between you and the driver.
//         </Typography>
//         <Typography
//           variant="h3"
//           align="center"
//           paragraph
//           component="div"
//           sx={{ mt: 4, mb: 2 }}
//         >
//           Contact Us
//         </Typography>
//         <ListItem>
//           If you have any questions about our Cancellation & Refunds Policy,
//           please contact us:
//         </ListItem>
//         <ListItem>
//           By visiting this page on our website: http://www.ZingCab.com/contact
//         </ListItem>
//       </Container>

//       <Divider />
//       <Footer />
//     </Container>
//   );
// };

// export default RefundPolicy;
// RefundPolicy.js

import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Player } from "@lottiefiles/react-lottie-player"; // Importing Lottie Player
import cancellationAnimation from "../assets/lb1.json"; // Lottie animation files
import refundAnimation from "../assets/lb2.json";
import contactAnimation from "../assets/lb5.json";
import successAnimation from "../assets/lb6.json";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const RefundPolicy = () => {
  return (
    <Container>
      <Container sx={{ mt: 12, mb: 10 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: "#095ff0" }}
        >
          Refund Policy
        </Typography>

        {/* Introduction Section */}
        <Typography variant="body1" align="center" paragraph sx={{ mt: 5 }}>
          For any reason, you are not completely satisfied with your booking or
          have multiple itineraries for the same trip, we invite you to review
          our Refund Policy. ZingCab believes in helping its customers as much
          as possible and has, therefore, a reliable cancellation and refund
          policy.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Please check our rules and restrictions for refund details prior to
          initiating a change or cancellation.
        </Typography>

        {/* Cancellation & Refunds Policy Section */}
        <Typography variant="h4" align="center" gutterBottom sx={{ mt: 7 }}>
          Cancellation & Refunds Policy
        </Typography>

        <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Player
              autoplay
              loop
              src={cancellationAnimation} // Cancellation Lottie animation
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left" paragraph>
              At any stage, you may be able to cancel your booking online, but
              these rules will be applied:
            </Typography>
            <List>
              <ListItem>
                The amendments can be done by the "Cancel Booking" link and
                mention the booking confirmation number (Booking ID).
              </ListItem>
              <ListItem>
                If the user cancels before 1 hour of scheduled departure, a full
                refund will be processed (advance amount paid by the customer).
              </ListItem>
              <ListItem>
                If the user cancels after the scheduled departure, it will be
                treated as a no-show, and no payment or compensation will be
                provided.
              </ListItem>
              <ListItem>
                In case of a no-show of the cab driver, a full refund will be
                processed (within the scheduled departure time).
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* How Does It Work Section */}
        <Typography variant="h4" align="center" gutterBottom sx={{ mt: 7 }}>
          How Does It Work?
        </Typography>

        <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Typography variant="body1" align="left" paragraph>
              The cancellation can be made over the official website's "Cancel
              Booking" section. Please note that no cancellations are
              entertained in any case for those services that ZingCab's
              marketing team has obtained on special occasions like Pongal,
              Dussehra, New Year, Diwali, etc. These are limited-time offers,
              which is why cancellations are not possible.
            </Typography>
            <Typography variant="body1" align="left" paragraph>
              ZingCab will not be responsible for any delay of service in case
              of any natural calamity, strike, road jam, agitation, etc.
              Moreover, we reserve the right to cancel or change the booking of
              a vehicle at any point in time.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <Player
              autoplay
              loop
              src={refundAnimation} // Refund Lottie animation
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
        </Grid>

        {/* Vehicle Breakdown Section */}
        <Typography variant="h4" align="center" gutterBottom sx={{ mt: 7 }}>
          Vehicle Breakdown
        </Typography>

        <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Player
              autoplay
              loop
              src={successAnimation} // Vehicle Breakdown Lottie animation
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left" paragraph>
              In a situation where the driver’s vehicle breaks down on the trip,
              you may ask the driver to find an alternative hire service for
              you. ZingCab holds no responsibility in such situations for making
              any special arrangements whatsoever. If the driver fails to
              arrange any alternative hire service for you, you may be liable to
              pay an appropriate fare for the part of the trip covered by the
              driver, as may be mutually agreeable between you and the driver.
            </Typography>
          </Grid>
        </Grid>

        {/* Contact Us Section */}
        <Typography variant="h4" align="center" gutterBottom sx={{ mt: 7 }}>
          Contact Us
        </Typography>

        <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <List>
              <ListItem>
                If you have any questions about our Cancellation & Refunds
                Policy, please contact us:
              </ListItem>
              <ListItem>
                By visiting this page on our website:{" "}
                <a href="http://www.ZingCab.com/contact">
                  www.ZingCab.com/contact
                </a>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <Player
              autoplay
              loop
              src={contactAnimation} // Contact Us Lottie animation
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider />
      <Footer />
    </Container>
  );
};

export default RefundPolicy;
