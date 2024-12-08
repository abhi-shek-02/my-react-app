import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Logo from "../assets/ICON.png";

const ScreenLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} // Fade-in/out effect for the whole loader
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FAFBFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            animation: "spin 2s linear infinite",
            fontSize: "50px",
            color: "#095ff0",
          }}
        >
          <img
            src={Logo}
            alt="logo of sitemark"
            style={{
              height: "120px",
              width: "120px",
              cursor: "pointer",
              margin: "5px",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }} // Smooth slide-in effect for text
        >
          <Box
            sx={{
              marginTop: "13px",
              fontSize: "28px",
              color: "#095ff0",
              fontWeight: "bold",
            }}
          >
            ZingCab
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

ScreenLoader.propTypes = {
  icon: PropTypes.node,
  message: PropTypes.string,
};

export default ScreenLoader;
