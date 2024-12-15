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
