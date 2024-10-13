


This is an example of backdrop, which if you click it a text or box will appear on the page to point you focus.



import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box, Typography, Avatar } from "@mui/material";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "20px", // Space below the text
            width: "100%",
            maxWidth: "700px",
            gap: "10px",
            margin: "10px",
          }}
        >
          <Typography variant="h4"></Typography>
          <Typography variant="subtitle2">
            I started as a Computer Technician, then moved into IT
            Administration and System Engineering. Now, I’m a full-time IT
            Consultant. Recently, I discovered my passion for web development,
            and I’m excited to dive deeper into this field. Enjoy your visit
            to my web developer page!
            </Typography>
        </Box>
      </Backdrop>
    </div>
  );
}
