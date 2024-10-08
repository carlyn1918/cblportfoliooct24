import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

const Contact = () => {
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
        <Box sx={{ maxWidth: '100%' }}>
          <Typography variant="h3" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1">
            Feel free to reach out to me through any of the contact methods listed below.
          </Typography>
        </Box>
      </Box>
      
    </>
  );
};

export default Contact;
