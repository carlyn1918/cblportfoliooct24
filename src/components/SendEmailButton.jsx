import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function SendEmailButton() {
  const [open, setOpen] = useState(false);

  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form data submitted:', formData);

    // Example: Submit to an API or Email Service (e.g., EmailJS, backend server)
    // fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));

    // Close the dialog after submission
    setOpen(false);
  };

  // Function to open and close the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* Button with Icon, Text, and Glow/Chrome Effect */}
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

      {/* Pop-up Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send me an Email</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <TextField
              autoFocus
              margin="dense"
              label="Your Name"
              name="name" // Name is important for state tracking
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={{ marginBottom: '15px' }}
            />
            <TextField
              margin="dense"
              label="Your Email"
              name="email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              sx={{ marginBottom: '15px' }}
            />
            <TextField
              margin="dense"
              label="Message"
              name="message"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          {/* Actions */}
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* Submit Button */}
          <Button onClick={handleSubmit} color="primary" type="submit">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
