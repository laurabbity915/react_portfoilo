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
