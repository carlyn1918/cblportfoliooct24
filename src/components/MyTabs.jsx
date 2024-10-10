import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

export default function MyTabs() {
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab switching
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{
        width: "100%",
        maxWidth: "1800px",
        border: "3px solid #fff", // White border
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#222", // Slightly darker black for contrast
        color: "#fff", // White text
        wordWrap: "break-word",
        boxSizing: "border-box",
        transition: "all 0.3s ease-in-out",
      }}>
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        sx={{ marginBottom: '20px' }}
      >
        <Tab label="Overview" />
        <Tab label="Projects" />
        <Tab label="Contact" />
      </Tabs>

      {/* Tab Content */}
      <TabPanel value={activeTab} index={0}>
        <Typography variant="h6">Overview Content</Typography>
        <Typography>Welcome to the Overview section.</Typography>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Typography variant="h6">Projects Content</Typography>
        <Typography>Here are some of my recent projects.</Typography>
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <Typography variant="h6">Contact Content</Typography>
        <Typography>Get in touch with me here.</Typography>
      </TabPanel>
    </Box>
  );
}

// TabPanel Component to render content based on selected tab
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}
