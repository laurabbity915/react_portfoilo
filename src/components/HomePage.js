import { Container } from '@mui/system';
import React from 'react';

export default function Homepage() {

  return (
    <>
      <Container>
        <Container className='profile'>
          <h1>Laura Yuen</h1>
          <img className='profile-img' src="https://raw.githubusercontent.com/laurabbity915/react_portfoilo/gh-pages/IMG_8620.jpg" alt="profile pic" />
        </Container>
        
        <Container className='indication'>
          <span>Thanks for visiting my website! This is where I showcase my skills as a front-end developer and share my passion for all things web design. Take a look at my portfolio to see some of my recent projects, and feel free to reach out to me with any questions or opportunities!</span>
        </Container>

        <Container className='brandStatement'>
          <span>I am a front-end developer with a passion for creating efficient, user-friendly, and accessible web experiences. <br /> With a deep understanding of HTML, CSS, and JavaScript, I strive to write clean, maintainable code that is optimized for performance and scalability. <br /> Whether it's designing responsive layouts, integrating APIs, or implementing complex UI interactions, I am always eager to take on new challenges and push the boundaries of what's possible on the web.  </span>
        </Container>

      </Container>

    </>
  );
}