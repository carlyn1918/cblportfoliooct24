import React from 'react';
import { Container, Typography } from '@mui/material';

const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Typography variant="body1">
        Here are some of the projects I've worked on:
      </Typography>
      <ul>
        <li>Student Management System</li>
        <li>PACS Remote Deployment Tool</li>
        <li>Interactive Calculator using JavaScript</li>
      </ul>
    </Container>
  );
};

export default Projects;
