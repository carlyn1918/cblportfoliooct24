import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import FrontWebDevSkills from './CardList/FrontWebDevSkills.jsx';
import BackWebDevSkills from './CardList/BackWebDevSkills.jsx';


export default function MySkillsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab switching
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{
        width: "100%",
        maxWidth: "1200px",
        border: "3px solid #fff", // White border
        borderRadius: "10px",
        padding: "20px",
        
        color: "#fff", // White text
        wordWrap: "break-word",
        boxSizing: "border-box",
        transition: "all 0.3s ease-in-out",
        p: 3, 
        textAlign: 'center', // This centers the content text
      }}>
      {/* Tabs */}
      <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '20px'}}>My Unique Blend of Skills</Typography>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        sx={{
          marginBottom: '20px',
          // Black background for tabs
          '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap', // Allow tabs to wrap on smaller screens
          },
          '& .MuiTab-root': {
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#ccc', // Default text color (grayish)
            minWidth: 'auto', // To allow shrinking of tabs
            padding: '12px 16px',
            '@media (max-width: 600px)': {
              fontSize: '0.8rem', // Smaller font on small screens
              padding: '8px 12px',
            },
            '&:hover': {
              backgroundColor: "rgba(7, 4, 196, 0.1)", // Hover color
              color: 'white', // Text color on hover
            },
            '&.Mui-selected': {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Active tab background color
              color: 'white', // Active tab text color
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'red', // Indicator color (for accent)
          },
        }}
      >
        <Tab label="Front-end Development" />
        <Tab label="Back-end Development" />
        <Tab label="Graphic Design" />
        <Tab label="I.T Consultancy" />
      </Tabs>

      {/* Tab Content */}
      <TabPanel value={activeTab} index={0} >
        <Typography variant="h6">Front-end Development Skills</Typography>
        <Typography>Welcome to the Overview section.</Typography>
        <FrontWebDevSkills />
        
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Typography variant="h6">Back-end Development Skills</Typography>
        <Typography>Here are some of my recent projects.</Typography>
        <BackWebDevSkills />

      </TabPanel>
      <TabPanel value={activeTab} index={2}>
        <Typography variant="h6">Graphic Design Tools Knowledge</Typography>
        <Typography>Get in touch with me here.</Typography>
      </TabPanel>
      <TabPanel value={activeTab} index={4}>
        <Typography variant="h6">I.T Consultancy</Typography>
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
