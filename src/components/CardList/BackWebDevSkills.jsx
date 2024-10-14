import React from 'react';
import { Grid } from '@mui/material';
import SkillCard from './SkillCard'; // Import SkillCard component
import JavascriptLogo from './logos/javascript.png'; // Example logos

const BackWebDevSkills = () => {
  const backendSkills = [
    { logo: JavascriptLogo, skillName: 'JavaScript', rating: 3 },
    { logo: './logos/github.png', skillName: 'GitHub', rating: 4 },
    { logo: './logos/git.png', skillName: 'Git', rating: 3.5 },
    { logo: './logos/postgresql.png', skillName: 'PostgreSQL', rating: 3 },
    { logo: './logos/mysql.png', skillName: 'MySQL', rating: 3 },
    { logo: './logos/mongodb.png', skillName: 'MongoDB', rating: 3 },
    { logo: './logos/oracle.png', skillName: 'Oracle', rating: 2.5 },
    { logo: './logos/docker.png', skillName: 'Docker', rating: 3.5 },
    { logo: './logos/kubernetes.png', skillName: 'Kubernetes', rating: 3 },
    { logo: './logos/apache.png', skillName: 'Apache', rating: 2.5 },
    { logo: './logos/aws.png', skillName: 'AWS', rating: 3.5 },
  ];

  return (
    <Grid container justifyContent="center">
      {backendSkills.map((skill, index) => (
        <SkillCard key={index} logo={skill.logo} skillName={skill.skillName} rating={skill.rating} />
      ))}
    </Grid>
  );
};

export default BackWebDevSkills;
