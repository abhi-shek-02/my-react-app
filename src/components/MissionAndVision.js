import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Player } from "@lottiefiles/react-lottie-player"; // Importing Lottie Player
import missionAnimation from "../assets/mission.json"; // Lottie animation files
import visionAnimation from "../assets/lb3.json";
import successAnimation from "../assets/lb6.json";

const MissionAndVision = () => {
  return (
    <Container>
      <Container sx={{ mt: 12, mb: 10 }}>
        <Typography variant="h2" align="center" sx={{ color: "#095ff0" }}>
          Mission And Vision
        </Typography>

        {/* Mission Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 7 }}>
          <Grid item xs={12} sm={6}>
            <Player
              autoplay
              loop
              src={missionAnimation} // Mission Lottie animation
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left" paragraph>
              At zingcab, our core values are rooted in delivering fair pricing
              and earning the trust of our customers. We stand firmly by the
              idea that <b>“Return Fare isn’t Fair!”</b>
            </Typography>
          </Grid>
        </Grid>

        {/* Vision Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 7 }}>
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Typography variant="body1" align="left" paragraph>
              We embarked on a journey to offer the most budget-friendly
              intercity cab service across West Bengal. Guided by our vision,{" "}
              <b>“To be the Best, not the Biggest,”</b> we focused on creating a
              refined marketplace where high-quality cab services are
              accessible, affordable, and risk-free.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <Player
              autoplay
              loop
              src={visionAnimation} // Vision Lottie animation
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
        </Grid>

        {/* Success Formula Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 7 }}>
          <Grid item xs={12} sm={6}>
            <Player
              autoplay
              loop
              src={successAnimation} // Success Lottie animation
              style={{ height: "300px", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="left" paragraph>
              With dedication and innovation, we developed a unique approach to
              success, allowing us to build a strong network of professional
              drivers and agencies. They now ensure fast, reliable, and
              high-quality service for our customers.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ mt: 7 }}>
          zingcab offers a seamless way to find affordable cabs in West Bengal.
          We provide competitive pricing while ensuring a comfortable and
          reliable travel experience. Book your cab online today and experience
          our budget-friendly rates without compromising on quality.
        </Typography>
      </Container>

      <Divider />
      <Footer />
    </Container>
  );
};

export default MissionAndVision;
