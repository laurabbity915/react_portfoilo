import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';

function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    console.log(name);
    console.log(message);
    console.log(email);
  };

  return (
    <>
      <Container>
        <Container className='contact-field'>
          <a href='mailto:laura_yuen915@outlook.com' target='_blank' rel="noreferrer"> Email </a>
          <a href='https://www.linkedin.com/in/laura-yuen-b24a2214a/' target='_blank' rel="noreferrer"> Linkedin </a>
          <a href='https://github.com/laurabbity915' target='_blank' rel="noreferrer"> Github </a>
          <a href='https://drive.google.com/file/d/1K_Yf7gZEh0CZOuSEW0FNzTycKXZILFAk/view?usp=sharing' target='_blank' rel="noreferrer"> CV </a>
        </Container>
        <Container className='text-field'>
          <TextField label="name" name="name" value={name} onChange={(event) => setName(event?.target?.value)} />
        </Container>
        <Container className='text-field'>
          <TextField label="Email" name="email" value={email} onChange={(event) => setEmail(event?.target?.value)} />
        </Container>
        <Container className='text-field'>
          <TextField label="Message" name="message" value={message} onChange={(event) => setMessage(event?.target?.value)} multiline rows={4} />
        </Container>
        <Container>
          <Button type="submit" variant="contained" onClick={onSubmit} color="primary">Submit</Button>
        </Container>
      </Container>
    </>


  );
}

export default ContactForm;
