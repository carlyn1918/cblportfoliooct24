import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      
      sx={{
        
        bgcolor: "#123456",
        width: "100%", // Stretch to full width
        zIndex: 1201, // Make sure it's above other content
      }}
    >
      <Typography variant="body1" color="white" align="center">
        © 2024 Carlo's Portfolio
      </Typography>
    </Box>
  );
};

export default Footer;
