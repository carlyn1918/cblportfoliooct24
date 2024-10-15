import React from 'react';
import { Grid } from '@mui/material';
import SkillCard from './SkillCard'; // Import SkillCard component
import HtmlLogo from './logos/html5.png'; // Example logos
import CssLogo from './logos/css.png';
import JavascriptLogo from './logos/javascript.png';
import ReactLogo from './logos/react.png';
import ViteLogo from './logos/vite.png';
import MuiLogo from './logos/mui.png';
import ProjectsCard from './ProjectsCard';

const WebDevProjects = () => {
  const frontendSkills = [
    { logo: HtmlLogo, skillName: 'HTML 5', rating: 3.5 },
    { logo: CssLogo, skillName: 'CSS', rating: 3.5 },
    { logo: JavascriptLogo, skillName: 'JavaScript', rating: 3 },
    { logo: ReactLogo, skillName: 'React', rating: 2 },
    { logo: ViteLogo, skillName: 'ViteJS', rating: 2 },
    { logo: MuiLogo, skillName: 'MaterialUI', rating: 3 },
    { logo: './logos/zustand.png', skillName: 'Zustand', rating: 2 },
    { logo: './logos/tailwind.png', skillName: 'Tailwind', rating: 3 },
  ];

  return (
    <Grid container justifyContent="center">
      {frontendSkills.map((skill, index) => (
        <ProjectsCard key={index} logo={skill.logo} skillName={skill.skillName} rating={skill.rating} />
      ))}
    </Grid>
  );
};

export default WebDevProjects;
