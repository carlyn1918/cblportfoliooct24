import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box 
  sx={{
    minHeight: '80vh',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f5f5f5', // Optional: add background color to distinguish it
  }}
>
  <div style={{ width: '100%', maxWidth: '1200px', minHeight: '500px' }}>
    {children}
  </div>
</Box>

      <Footer />
    </>
  );
};

export default Layout;
