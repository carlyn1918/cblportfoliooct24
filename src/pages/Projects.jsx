import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

const Projects = () => {
  return (
    <>
      
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
        <Box sx={{ maxWidth: '800px' }}>
          <Typography variant="h3" gutterBottom>
            Projects
          </Typography>
          <Typography variant="body1">
            Here are some of the projects I have worked on.
          </Typography>
        </Box>
      </Box>
      
    </>
  );
};

export default Projects;
