import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#123456', p: 2, mt: 4 }}>
      <Typography variant="body1" color="white" align="center">
        © 2024 Carlo's Portfolio
      </Typography>
    </Box>
  );
};

export default Footer;
