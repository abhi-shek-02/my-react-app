import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Player } from "@lottiefiles/react-lottie-player";

// Lottie Animation files
import cabAnimation from "../assets/l1.json"; // Replace with the correct path
import anotherAnimation from "../assets/l2.json"; // Add another animation
import yetAnotherAnimation from "../assets/l3.json"; // Add one more animation

const HowItWorks = () => {
  return (
    <Container sx={{ mt: 20 }}>
      {/* How It Works Section */}
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#095ff0", mt: 4, mb: 3 }}
      >
        How It Works
      </Typography>

      {/* First Zigzag Section */}
      <Grid container spacing={2} sx={{ my: 4 }} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Player
            autoplay
            loop
            src={cabAnimation}
            style={{ height: "300px", width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Many people today often have to move between cities and regions in
            various situations - trips from the region to the airport, to a
            business meeting in another city, etc. The only correct solution in
            such cases is to book a taxi. But is it safe to book a random cab,
            especially when you are traveling with family? Obviously No! Every
            person is looking for a reliable experience that prioritizes their
            needs and concerns.
          </Typography>
        </Grid>
      </Grid>

      {/* Second Zigzag Section */}
      <Grid container spacing={2} sx={{ my: 4 }} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Therefore, zingcab offers an unparalleled experience to customers
            when they are making cab bookings online. Whenever a customer makes
            a booking with us, they put a lot of trust in us. Our well-behaved,
            professional, and registered cab drivers save you from all
            unpleasant incidents. We invite you to book the fastest, most
            comfortable, affordable intercity cab service in West Bengal.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Player
            autoplay
            loop
            src={anotherAnimation}
            style={{ height: "300px", width: "100%" }}
          />
        </Grid>
      </Grid>

      {/* Our Online Cab Booking Method Section */}
      <Typography
        variant="h5"
        align="center"
        sx={{ color: "#095ff0", mt: 4, mb: 3 }}
      >
        Our Online Cab Booking Method
      </Typography>
      <List sx={{ mb: 4, pl: 4 }}>
        <ListItem>
          <ListItemText primary="After booking your cab, we transfer the vehicle to a location convenient for customers, at the address indicated in the application." />
        </ListItem>
        <ListItem>
          <ListItemText primary="We do not change the conditions and delivery rates depending on the season or weather." />
        </ListItem>
        <ListItem>
          <ListItemText primary="On our website, the client immediately sees the final and detailed calculation of the cost of car rental. No hidden fees or charges." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Speed - This applies not only to the route but also includes an instant response to an order, fast cab delivery, and the choice of the optimal route." />
        </ListItem>
        <ListItem>
          <ListItemText primary="After dropping you at your pre-set location, your ride will be marked as finished. You don't need to pay the return fare." />
        </ListItem>
        <ListItem>
          <ListItemText primary="If you want to return after a few hours or the next day, you have to book your cab again with us." />
        </ListItem>
      </List>

      {/* Third Zigzag Section */}
      <Grid container spacing={2} sx={{ my: 4 }} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Player
            autoplay
            loop
            src={yetAnotherAnimation}
            style={{ height: "300px", width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Set your current & drop-off location, date, and the number of
            passengers. Search for the available lifts near you. You can look at
            all the available options and select the one that suits your travel
            needs. Your phone will automatically adapt to the resolution of our
            site so that you can comfortably read the information.
          </Typography>
        </Grid>
      </Grid>

      <Divider />
      <Footer />
    </Container>
  );
};

export default HowItWorks;
