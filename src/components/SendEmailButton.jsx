import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function SendEmailButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* Button with Icon, Text and Custom Glow/Chrome Effect */}
      <Button 
        variant="contained" 
        onClick={handleClickOpen}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          margin: '20px',
  
          borderRadius: '10px', // Make it circular
          border: '2px solid', // Chrome-like border
          
          backgroundColor: '#222', // Dark background
          color: '#fff', // Text color
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', // Glow effect
          transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)', // Enhance glow on hover
          }
        }}
      >
        {/* Email Icon */}
        <EmailIcon sx={{ color: '#fff', marginRight: '8px' }} />
        Send me an Email
      </Button>

      {/* Dialog (Pop-up) for Email Form */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send me an Email</DialogTitle>
        <DialogContent>
          {/* Email Form Fields */}
          <TextField
            autoFocus
            margin="dense"
            label="Your Name"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            margin="dense"
            label="Your Email"
            type="email"
            fullWidth
            variant="outlined"
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            margin="dense"
            label="Message"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
          />
        </DialogContent>

        {/* Actions (Send or Cancel) */}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
