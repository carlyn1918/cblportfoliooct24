import React from "react";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      {/* Container to center the boxes */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Align boxes vertically
          alignItems: "center", // Center horizontally
          justifyContent: "flex-start", // Center vertically
          minHeight: "80vh", // Take full viewport height for centering
          gap: "20px", // Space between boxes
          padding: "20px",
          backgroundColor: "#000", // Black background
        }}
      >
        {/* First Box - Introduction */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            border: "3px solid #fff", // White border
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#111", // Slightly lighter black for contrast
            color: "#fff", // White text
            wordWrap: "break-word",
            boxSizing: "border-box",
            transition: "all 0.3s ease-in-out", // Smooth resizing
          }}
        >
          <Typography variant="h4" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1">
            Hi, I'm Carlo! I'm a passionate developer with experience in IT
            implementation and remote deployments. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur non nulla sit amet nisl
            tempus convallis quis ac lectus.
            <p>
              Hi, I'm Carlo! I'm a passionate developer with experience in IT
              implementation and remote deployments. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur non nulla sit amet nisl
              tempus convallis quis ac lectus
            </p>
            <p>
              Hi, I'm Carlo! I'm a passionate developer with experience in IT
              implementation and remote deployments. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur non nulla sit amet nisl
              tempus convallis quis ac lectus
            </p>
          </Typography>
        </Box>

        {/* Second Box - Skills */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
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
            maxWidth: "800px",
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