import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography } from '@mui/material';

const Contact = () => {
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
            Contact
          </Typography>
          <Typography variant="body1">
            Feel free to reach out to me through any of the contact methods listed below.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
