import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container, Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Box to center content vertically and horizontally */}
        <Box 
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '20px', md: '40px' }, // Adjust padding based on screen size
            textAlign: 'center', // Center text if you need to
          }}
        >
          <div style={{ width: '100%', maxWidth: '1000px' }}>
            {children}
          </div>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
