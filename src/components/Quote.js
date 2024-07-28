import { alpha } from "@mui/material";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Quote() {
  const navigate = useNavigate();

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    ></Box>
  );
}
