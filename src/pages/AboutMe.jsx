import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <Box 
        sx={{
          minHeight: 'calc(100vh - 64px)', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          paddingTop: '64px',
          boxSizing: 'border-box',
          width: '100vw'  // Change this from width: 700px to 100vw
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: '800px' }}>
          <Typography variant="h3" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            Hi, I'm Carlo! I'm a passionate developer with experience in IT implementation and remote deployments.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutMe;
