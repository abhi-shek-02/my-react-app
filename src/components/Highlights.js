// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
// import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
// import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
// import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
// import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
// import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

// const items = [
//   {
//     icon: <SettingsSuggestRoundedIcon />,
//     title: "Seamless Travel Experience",
//     description: "Reliable, convenient intercity cab services for you.",
//   },
//   {
//     icon: <ConstructionRoundedIcon />,
//     title: "Affordable Pricing",
//     description: "Competitive rates, no hidden costs, value guaranteed.",
//   },
//   {
//     icon: <ThumbUpAltRoundedIcon />,
//     title: "Safety Assurance",
//     description: "Secure journeys, top-notch safety measures upheld.",
//   },
//   {
//     icon: <AutoFixHighRoundedIcon />,
//     title: "Diverse Destinations",
//     description: "Explore cities, countryside, tailored travel experiences.",
//   },
//   {
//     icon: <SupportAgentRoundedIcon />,
//     title: "Reliable support",
//     description:
//       "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
//   },
//   {
//     icon: <QueryStatsRoundedIcon />,
//     title: "Easy Booking",
//     description: "Quick, hassle-free booking via app or online.",
//   },
// ];

// export default function Highlights() {
//   return (
//     <Box
//       id="highlights"
//       sx={{
//         pt: { xs: 4, sm: 12 },
//         pb: { xs: 8, sm: 16 },
//         color: "white",
//         bgcolor: "#FAFBFF",
//       }}
//     >
//       <Container
//         sx={{
//           position: "relative",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: { xs: 3, sm: 6 },
//         }}
//       >
//         <Box
//           sx={{
//             width: { sm: "100%", md: "60%" },
//             textAlign: { sm: "left", md: "center" },
//           }}
//         >
//           <Typography
//             component="h2"
//             variant="h4"
//             sx={{
//               color: "#095ff0",
//               fontSize: "30px",
//             }}
//           >
//             Why ZingCab?
//           </Typography>
//           <Typography variant="body1" sx={{ color: "#adadad" }}>
//             ZingCab facilitates one-sided trips for customers by connecting them
//             with cars that would otherwise return empty, ensuring efficient and
//             cost-effective travel experiences with "One Way Trip..One Way
//             Payment" policy.
//           </Typography>
//         </Box>
//         <Grid container spacing={2.5}>
//           {items.map((item, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Stack
//                 direction="column"
//                 color="inherit"
//                 component={Card}
//                 spacing={1}
//                 useFlexGap
//                 sx={{
//                   p: 3,
//                   height: "70%",
//                   border: "1px solid #eaebf1",
//                   // borderColor: "grey.800",
//                   background: "transparent",
//                   backgroundColor: "#FFFFFF",
//                   borderRadius: "10px",
//                   boxShadow: " 0 0 5px 0 rgba(0, 0, 0, 0.1)",
//                   // marginTop: 10,
//                 }}
//               >
//                 <Box sx={{ color: "#095ff0" }}>{item.icon}</Box>
//                 <div>
//                   <Typography fontWeight="medium" sx={{ color: "#4c4b5e" }}>
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#adadad" }}>
//                     {item.description}
//                   </Typography>
//                 </div>
//               </Stack>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Player } from "@lottiefiles/react-lottie-player"; // Import Lottie Player
import animationData1 from "../../src/assets/lb1.json";
import animationData2 from "../../src/assets/lb2.json";
import animationData3 from "../../src/assets/lb3.json";
import animationData4 from "../../src/assets/lb4.json";
import animationData5 from "../../src/assets/lb5.json";
import animationData6 from "../../src/assets/lb6.json";

const items = [
  {
    lottieSrc: animationData1,
    title: "Seamless Travel Experience",
    description: "Reliable, convenient intercity cab services for you.",
  },
  {
    lottieSrc: animationData2,
    title: "Affordable Pricing",
    description: "Competitive rates, no hidden costs, value guaranteed.",
  },
  {
    lottieSrc: animationData3,
    title: "Safety Assurance",
    description: "Secure journeys, top-notch safety measures upheld.",
  },
  {
    lottieSrc: animationData4,
    title: "Diverse Destinations",
    description: "Explore cities, countryside, tailored travel experiences.",
  },
  {
    lottieSrc: animationData5,
    title: "Reliable Support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    lottieSrc: animationData6,
    title: "Easy Booking",
    description: "Quick, hassle-free booking via app or online.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#FAFBFF",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{
              color: "#095ff0",
              fontSize: "30px",
            }}
          >
            Why ZingCab?
          </Typography>
          <Typography variant="body1" sx={{ color: "#4c4c4c" }}>
            ZingCab facilitates one-sided trips for customers by connecting them
            with cars that would otherwise return empty, ensuring efficient and
            cost-effective travel experiences with "One Way Trip..One Way
            Payment" policy.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "85%",
                  border: "1px solid #eaebf1",
                  background: "transparent",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Player
                    autoplay
                    loop
                    src={item.lottieSrc}
                    style={{ height: "200px", width: "200px" }}
                  />
                </Box>
                <div>
                  <Typography
                    fontWeight="medium"
                    sx={{
                      color: "#4c4c4c",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6b6b6b",
                      justifyContent: "center",
                      display: "flex",
                      textAlign: "center",
                    }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
