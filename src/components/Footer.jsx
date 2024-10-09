import React from "react";
import AutoScrollingImageList from "./AutoScrollingImageList";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#000", // Black background
          width: "100%", // Full width to match browser size
          zIndex: 1201,
          height: "300px",
          overflow: "hidden", // Hide any overflow to prevent horizontal scrollbars
          display: "flex",
          flexDirection: "column", // Stack items vertically
          justifyContent: "center",
          alignItems: "center", // Center content inside the footer
        }}
      >
        {/* Footer text */}
        <Typography variant="body1" color="white" align="center" sx={{ mt: 2 }}>
          © 2024 Carlo's Portfolio
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
