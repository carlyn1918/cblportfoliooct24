import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import PageBodyWrapper from "../components/PageBodyWrapper";

const AboutMe = () => {
  return (
    <>
      <PageBodyWrapper>
        <Navbar />

        {/* Container to center the boxes */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Align boxes vertically
            alignItems: "center",    // Center horizontally
            justifyContent: "flex-start", // Center vertically
            minHeight: "80vh",       // Take full viewport height for centering
            gap: "20px",             // Space between boxes
            padding: "20px",
            
          }}
        >
          {/* First Box - Introduction */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              border: "3px solid #ff7f50",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#ffe4e1",
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
            </Typography>
          </Box>

          {/* Second Box - Skills */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              border: "3px solid #4682b4",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#add8e6",
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
              border: "3px solid #32cd32",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#98fb98",
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

        
      </PageBodyWrapper>
    </>
  );
};

export default AboutMe;
