import React, { useState } from 'react';
import { Typography, TextField, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: '16px !important',
  },
  signUpLink: {
    marginTop: theme.spacing(2),
  },
  Typography:{
    padding: theme.spacing(4),
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  const [signUp, setSignUp] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    let errors = {};
    switch (true) {
    case signUp && !firstName.trim():
        errors.firstName = 'First name is required';
        break;
    case signUp && !lastName.trim():
        errors.lastName = 'Last name is required';
        break;
    case !email.trim():
        errors.email = 'Email is required';
        break;
    case !/\S+@\S+\.\S+/.test(email):
        errors.email = 'Invalid email address';
        break;
    case !password.trim():
        errors.password = 'Password is required';
        break;
    default:
        // No validation errors
        break;
    }
    
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit the form
      console.log('Submitted!');
       // Reset form fields and errors
       setFirstName('');
       setLastName('');
       setEmail('');
       setPassword('');
       setErrors({});
    }
  };

  return (
    <>
      <Typography className={classes.Typography} variant="h5" component="h1">
        {signUp ? 'Sign Up' : 'Login'}
      </Typography>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        {signUp && (
          <>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              className={classes.textField}
              required
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!errors.lastName}
              helperText={errors.lastName}
              className={classes.textField}
              required
            />
          </>
        )}
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          className={classes.textField}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          className={classes.textField}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          {signUp ? 'Sign Up' : 'Login'}
        </Button>
        <Link
          component="button"
          variant="body2"
          className={classes.signUpLink}
          onClick={() => setSignUp(!signUp)}
        >
          <Typography className={classes.Typography}>{signUp ? 'Go back to Login' : 'Sign Up Here'}</Typography>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
