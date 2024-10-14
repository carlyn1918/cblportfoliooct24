
import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

import MySkillsTabs from "../components/MySkillsTabs";

import SendEmailButton from "../components/SendEmailButton";
import SocialMediaButtons from "../components/SocialMediaButtons";




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

            color: "#fff",
            wordWrap: "break-word",
            boxSizing: "border-box",
            transition: "all 0.3s ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            backgroundImage: `url('/src/assets/mybg.png')`, // Add your background image here
            backgroundSize: "cover", // Ensure the image covers the entire box
            backgroundPosition: "center", // Center the image inside the box
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
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="h4">Hello, My name is Carl</Typography>
            <Typography variant="subtitle1">
              System Engineer | IT Consultant | Full Stack Developer
            </Typography>
          </Box>

          {/* Box 3: Social Media Icons and Usernames */}
          {/* Box 3: Social Media Icons and Usernames */}

          <SocialMediaButtons />

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
            <Typography variant="h4"></Typography>
            <Typography variant="subtitle2">
              I started as a Computer Technician, then moved into IT
              Administration and System Engineering. Now, I’m a full-time IT
              Consultant. Recently, I discovered my passion for web development,
              and I’m excited to dive deeper into this field. Enjoy your visit
              to my web developer page!

              
            </Typography>

            
          </Box>

          <SendEmailButton />
          <MySkillsTabs />
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
            with my family. test test
          </Typography>
        </Box>
        <MySkillsTabs />
      </Box>
    </>
  );
};

export default AboutMe;
