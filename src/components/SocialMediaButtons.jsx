import React from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socialMediaAccounts = [
  { name: "Facebook", icon: <FacebookIcon />, color: "#4267B2", label: "Facebook", link: "https://facebook.com/carlyn1918" },
  { name: "Twitter", icon: <TwitterIcon />, color: "#1DA1F2", label: "Twitter / X", link: "https://x.com/carlyn1918" },
  { name: "LinkedIn", icon: <LinkedInIcon />, color: "#0077b5", label: "LinkedIn", link: "https://www.linkedin.com/in/cblirazan" },
  { name: "GitHub", icon: <GitHubIcon />, color: "#fff", label: "GitHub", link: "https://github.com/carlyn1918" }
];

const SocialMediaButton = ({ icon, label, color, link }) => (
  <Box
    component="a"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "flex",
      flexDirection: "column", // Label below the icon
      alignItems: "center",
      padding: "10px",
      borderRadius: "8px",
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Slightly transparent,
      width: "100%",
      maxWidth: "120px",
      color: "#fff",
      textDecoration: "none", // Remove underline from the link
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
    {/* Icon */}
    {React.cloneElement(icon, { sx: { color: color, fontSize: 30 } })}
    {/* Label below the icon */}
    <Typography variant="body2" color="#fff">
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
          link={account.link}
        />
      ))}
    </Box>
  );
}
