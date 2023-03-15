
import { Container, Box } from '@mui/system';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Project() {

  const location = useLocation();
  console.log(location);
  return (
    <>
      <Container className='projectDetails'>
        <Box 
        component="img"
        src={location.state.project.image}
        className="project-image"
        
        />
        <Container><h1>{location.state.project.title}</h1>
          <span>{location.state.project.desc}</span></Container>

        <Container>
          <span>click here and find the Demo:</span>
          <Link to={location.state.project.url}> Demo </Link>
          <br/>
          <spam>click here and go to my Github:</spam>
          <Link to={location.state.project.github}>Github</Link>
        </Container>

      </Container>
    </>
  );
}


