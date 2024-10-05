import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

const Projects = () => {
  return (
    <>
      <Navbar />
      <Box 
        sx={{
          minHeight: '80vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '20px'
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: '800px' }}>
          <Typography variant="h3" gutterBottom>
            Projects
          </Typography>
          <Typography variant="body1">
            Here are some of the projects I have worked on.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Projects;
