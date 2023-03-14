
import { Container } from '@mui/system';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Project() {

  const location = useLocation();
  console.log(location);
  return (
    <>
      <Container>
        <h1>{location.state.project.title}</h1>
        <span>{location.state.project.desc}</span>
        <Link to={location.state.project.url}> Demo </Link>
        <Link to={location.state.project.github}>Github</Link>
      </Container>
    </>
  );
}


