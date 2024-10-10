import React from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialMediaAccounts = [
  { name: "Facebook", icon: <FacebookIcon />, color: "#4267B2", label: "CarloFB" },
  { name: "Twitter", icon: <TwitterIcon />, color: "#1DA1F2", label: "CarloX" },
  { name: "LinkedIn", icon: <LinkedInIcon />, color: "#0077b5", label: "CarloLinkedIn" },
  { name: "GitHub", icon: <GitHubIcon />, color: "#fff", label: "CarloGitHub" }
];

const SocialMediaButton = ({ icon, label, color }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",  // Align text and icon horizontally
      justifyContent: "space-between", // Push icon to the right
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "#222",
      width: "100%",
      maxWidth: "200px", // Adjust width if needed
      color: "#fff",
      // Chrome and glowing effect
      border: "2px solid", 
      borderImage:
        "linear-gradient(45deg, #f3ec78, #af4261, #4267B2, #1DA1F2, #0077b5, #fff) 1",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", 
      transition: "border 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
      },
      "@media (max-width: 600px)": {
        maxWidth: "100%", // Make full width on mobile
      }
    }}
  >
    
    {/* Icon on the right */}
    {React.cloneElement(icon, { sx: { color: color } })}
    {/* Text on the left */}
    <Typography variant="body2" color="#fff" sx={{ marginRight: "2px" }}>
      {label}
    </Typography>
  </Box>
);

export default function SocialMediaButtons() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "10px",
        "@media (max-width: 500px)": {
          flexDirection: "column",
          gap: "10px", // Stack vertically on mobile
        },
      }}
    >
      {socialMediaAccounts.map((account) => (
        <SocialMediaButton
          key={account.name}
          icon={account.icon}
          label={account.label}
          color={account.color}
        />
      ))}
    </Box>
  );
}
