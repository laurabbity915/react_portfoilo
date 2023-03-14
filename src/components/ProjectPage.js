
import { Container } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../data/data.json';
import CustomCard from './CustomCard';


export default function ProjectPage() {
  const navigate = useNavigate();
  const handleOnClick = (project) => navigate(`/project-page/${project.id}`, { state: { project: project } });

  return (
    <Container>
      {
        projects.map((project) =>
          <CustomCard {...{ project, handleOnClick }} />
        )
      }

    </Container>

  );
}
