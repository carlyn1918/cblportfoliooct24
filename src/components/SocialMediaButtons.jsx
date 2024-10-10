import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function SocialMediaButtons() {
  return ( 

<Box
  sx={{
    width: "100%",
    maxWidth: "1800px",
    border: "0",
    borderRadius: "10px",
    padding: "20px",

    color: "#fff",
    wordWrap: "break-word",
    boxSizing: "border-box",
    transition: "all 0.3s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row", // Default for larger screens
    gap: "20px",
    flexShrink: "1",
    "@media (max-width: 600px)": {
      // Media query for mobile devices
      flexDirection: "column", // Stack vertically on mobile
      gap: "10px", // Reduce gap between boxes
    },
  }}
>
  {/* Social Media - Facebook */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid #fff",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "#222",
      width: "100%", // Ensures it takes full width on mobile
      maxWidth: "100px", // Keeps size manageable on larger screens

      // Chrome and glowing effect
      border: "2px solid", // Increase border thickness for a chrome effect
      borderImage:
        "linear-gradient(45deg, #f3ec78, #af4261, #4267B2, #1DA1F2, #0077b5, #fff) 1", // Gradient for the chrome look
      padding: "10px",
      borderRadius: "4px",
      backgroundColor: "#222",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // Optional glow effect
      transition: "border 0.3s ease-in-out", // Smooth transition for hover or resize
      "&:hover": {
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)", // Enhance glow on hover
      },
    }}
  >
    <FacebookIcon sx={{ color: "#4267B2" }} />
    <Typography variant="body2" color="#fff">
      CarloFB
    </Typography>
  </Box>

  {/* Social Media - Twitter */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid #fff",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "#222",
      width: "100%",
      maxWidth: "100px",

      // Chrome and glowing effect
      border: "2px solid", // Increase border thickness for a chrome effect
      borderImage:
        "linear-gradient(45deg, #f3ec78, #af4261, #4267B2, #1DA1F2, #0077b5, #fff) 1", // Gradient for the chrome look
      padding: "10px",
      borderRadius: "4px",
      backgroundColor: "#222",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // Optional glow effect
      transition: "border 0.3s ease-in-out", // Smooth transition for hover or resize
      "&:hover": {
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)", // Enhance glow on hover
      },
    }}
  >
    <TwitterIcon sx={{ color: "#1DA1F2" }} />
    <Typography variant="body2" color="#fff">
      CarloX
    </Typography>
  </Box>

  {/* Social Media - LinkedIn */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid #fff",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "#222",
      width: "100%",
      maxWidth: "100px",

      // Chrome and glowing effect
      border: "2px solid", // Increase border thickness for a chrome effect
      borderImage:
        "linear-gradient(45deg, #f3ec78, #af4261, #4267B2, #1DA1F2, #0077b5, #fff) 1", // Gradient for the chrome look
      padding: "10px",
      borderRadius: "4px",
      backgroundColor: "#222",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // Optional glow effect
      transition: "border 0.3s ease-in-out", // Smooth transition for hover or resize
      "&:hover": {
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)", // Enhance glow on hover
      },
    }}
  >
    <LinkedInIcon sx={{ color: "#0077b5" }} />
    <Typography variant="body2" color="#fff">
      CarloLinkedIn
    </Typography>
  </Box>

  {/* Social Media - GitHub */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "2px solid #fff",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "#222",
      width: "100%",
      maxWidth: "100px",

      // Chrome and glowing effect
      border: "2px solid", // Increase border thickness for a chrome effect
      borderImage:
        "linear-gradient(45deg, #f3ec78, #af4261, #4267B2, #1DA1F2, #0077b5, #fff) 1", // Gradient for the chrome look
      padding: "10px",
      borderRadius: "4px",
      backgroundColor: "#222",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // Optional glow effect
      transition: "border 0.3s ease-in-out", // Smooth transition for hover or resize
      "&:hover": {
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)", // Enhance glow on hover
      },
    }}
  >
    <GitHubIcon sx={{ color: "#fff" }} />
    <Typography variant="body2" color="#fff">
      CarloGitHub
    </Typography>
  </Box>
</Box>

);
}


