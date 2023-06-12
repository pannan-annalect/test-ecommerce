import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let errors = {};
    switch(true) {
      case !name.trim():
        errors.name = 'Name is required';
        break;
      case !email.trim():
        errors.email = 'Email is required';
        break;
      case !/\S+@\S+\.\S+/.test(email):
        errors.email = 'Email is invalid';
        break;
      case !message.trim():
        errors.message = 'Message is required';
        break;
      default:
        // handle default case
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit the form or perform any desired action
      console.log('Form submitted!');
      // Reset form fields and errors
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <Grid container sx={{pt:5}} className='contact-forms'>
      <Grid item xs={12} sm={6} px={2} py={1}>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
      </Grid>
      <Grid item xs={12} sm={6} px={2} py={1}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
      </Grid>
      <Grid item xs={12} px={2} py={1}>
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={Boolean(errors.message)}
          helperText={errors.message}
        />
      </Grid>
      <Grid item xs={12} px={2} py={1}>
        <Button sx={{borderRadius:0,padding:'12px 25px', minHeight:'42px',lineHeight:'1.42'}} variant="contained" color="primary" onClick={handleSubmit}>Send</Button>
      </Grid>
    </Grid>
  );
};

export default ContactForm;