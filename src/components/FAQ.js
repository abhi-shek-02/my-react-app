import * as React from "react";
import { useState, useMemo } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ThemeProvider, CssBaseline, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme } from "@mui/material/styles";
// import getLPTheme from "../getLPTheme"; // Make sure to import this correctly

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    // <ThemeProvider theme={theme}>
    <>
      {/* <CssBaseline /> */}
      <Container
        id="faq"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
          bgcolor: "#FAFBFF",
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          // color="text.primary"
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
            color: "#095ff0",
          }}
        >
          Frequently asked questions
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{ color: "#4C4B5E" }}
              >
                How do I contact customer support if I have a question or issue?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                You can reach our customer support team by emailing
                <Link> support@email.com </Link>
                or calling our toll-free number. We&apos;re here to assist you
                promptly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{ color: "#4C4B5E" }}
              >
                Can i book in advance if there are no cab availability?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Of course you can, Just click on book my enquiry and fill the
                details we will get back to you if there are any cars available
                as per your requirement
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{ color: "#4C4B5E" }}
              >
                What’s the minimum amount i need to pay for booking?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Min 5% to Max 15% depend on the drop location, and rest of the
                amount you need to pay in cash to the respective driver.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{ color: "#4C4B5E" }}
              >
                Can i cancel any time? What’s the process?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Of course you can before the last minute of your departure once
                schedule departure time is over, we will treat as no show and no
                refund will be issue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{ color: "#4C4B5E" }}
              >
                Is there any hidden tax or charges do I need to pay?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                No not at all.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography
                component="h3"
                variant="subtitle2"
                sx={{ color: "#4C4B5E" }}
              >
                Can i share my trip with my family member and friends?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                Yes, you can travel along with the family member and friend with
                the cab capacity.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
    // </ThemeProvider>
  );
}
