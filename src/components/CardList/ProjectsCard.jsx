import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grid // Using stable Grid
} from "@mui/material";

const ProjectsCard = ({ logo, skillName, rating }) => {
  const fullCircles = Math.floor(rating);
  const halfCircle = rating % 1 >= 0.5 ? 1 : 0;
  const emptyCircles = 5 - fullCircles - halfCircle;

  return (
    <Card
      sx={{
        width: "100%", // Take full width of the grid column
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        textAlign: "center",
        margin: 2,
        borderRadius: 2,
        color: "white",
        border: "2px solid white",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.6)",
          backgroundColor: "rgb(255, 0, 153)",
        },
      }}
    >
      <CardContent sx={{ padding: 2 }}>
        <Avatar
          src={logo}
          alt={skillName}
          sx={{
            width: 40,
            height: 40,
            margin: "auto",
            borderRadius: 0, 
          }}
        />
        <Typography variant="h6" sx={{ marginTop: 1, fontSize: "0.9rem" }}>
          {skillName}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}>
          {[...Array(fullCircles)].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "magenta",
                margin: "0 2px",
              }}
            />
          ))}
          {halfCircle ? (
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "rgb(112, 29, 108)",
                margin: "0 2px",
              }}
            />
          ) : null}
          {[...Array(emptyCircles)].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "lightgrey",
                margin: "0 2px",
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const ProjectsGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ProjectsCard logo="/path-to-logo1" skillName="Project 1" rating={4} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProjectsCard logo="/path-to-logo2" skillName="Project 2" rating={3.5} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProjectsCard logo="/path-to-logo3" skillName="Project 3" rating={5} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProjectsCard logo="/path-to-logo4" skillName="Project 4" rating={4.5} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsGrid;
