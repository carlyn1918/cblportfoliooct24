import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
} from "@mui/material";

const SkillCard = ({ logo, skillName, rating }) => {
  const fullCircles = Math.floor(rating);
  const halfCircle = rating % 1 >= 0.5 ? 1 : 0;
  const emptyCircles = 5 - fullCircles - halfCircle;

  return (
    <Card
      sx={{
        width: 110,
        height: 130,
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Slightly transparent
        textAlign: "center",
        margin: 2,
        borderRadius: 2, // Keeps the card square but slightly rounded
        color: "white",
        border: "2px solid white", // White border
        transition: "0.3s", // Smooth transition
        "&:hover": {
          boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.6)", // Glow effect on hover
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
            borderRadius: 0, // Set borderRadius to 0 to make the logo square
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

export default SkillCard;
