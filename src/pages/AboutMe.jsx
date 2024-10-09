import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutMe = () => {
  return (
    <>
      {/* Container to center the boxes */}
      {/* Container to center the boxes */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: "80vh",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#000",
        }}
      >
        {/* First Box - Introduction */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1800px",
            border: "3px solid #fff",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#111",
            color: "#fff",
            wordWrap: "break-word",
            boxSizing: "border-box",
            transition: "all 0.3s ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Box 1: Profile Photo */}
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#333",
              margin: "0 auto", // Center the image horizontally
              marginBottom: "20px", // Space below image
            }}
          >
            <Avatar
              src="/path/to/profile.jpg" // Replace with your actual image path
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>

          {/* Box 2: "Hello, My name is Carl" */}
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              marginBottom: "20px", // Space below the text
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Typography variant="h4">Hello, My name is Carl</Typography>
            <Typography variant="subtitle1">
              System Engineer | IT Consultant | Full Stack Developer
            </Typography>
          </Box>

          {/* Box 3: Social Media Icons and Usernames */}
          {/* Box 3: Social Media Icons and Usernames */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1800px",
              border: "3px solid #fff",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#111",
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

          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              marginBottom: "20px", // Space below the text
              width: "100%",
              maxWidth: "700px",
              gap: "10px",
              margin: "10px",
            }}
          >
            <Typography variant="h4">Hello, My name is Carl</Typography>
            <Typography variant="subtitle2">
              I started as a Senior Computer Technician, then moved into IT
              Administration and System Engineering. Now, I’m a full-time IT
              Consultant. Recently, I discovered my passion for web development,
              and I’m excited to dive deeper into this field. Enjoy your visit
              to my web developer page!
            </Typography>
          </Box>
        </Box>

        {/* Second Box - Skills */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1800px",
            border: "3px solid #fff", // White border
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#222", // Slightly darker black for contrast
            color: "#fff", // White text
            wordWrap: "break-word",
            boxSizing: "border-box",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          <Typography variant="body1" gutterBottom>
            JavaScript, React, Vite, Material UI, and more. I have worked with
            different projects focusing on front-end and back-end technologies.
          </Typography>
        </Box>

        {/* Third Box - Hobbies */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1800px",
            border: "3px solid #fff", // White border
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#333", // Slightly darker black for contrast
            color: "#fff", // White text
            wordWrap: "break-word",
            boxSizing: "border-box",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Hobbies
          </Typography>
          <Typography variant="body1">
            Playing VR, coding, and spending time with my daughter. In my free
            time, I enjoy exploring new technologies and spending quality time
            with my family.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
