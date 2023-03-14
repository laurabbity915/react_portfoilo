
import { Container } from '@mui/material';
import React from 'react';
import projects from '../data/data.json';
import CustomCard from './CustomCard';

export default function ProjectPage() {


  return (
    <Container>
      {
        projects.map((project) =>
          <CustomCard  {...{ project }} />
        )
      }
    </Container>

  );
}
