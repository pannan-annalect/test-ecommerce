import React, { useState } from 'react';
import { Typography, TextField, Button, Link, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  Grid:{
    width: '100%',
  },
  textField: {
    marginBottom: '16px !important',
  },
  signUpLink: {
    textDecoration: 'none !important'
  },
  typography: {
    padding: theme.spacing(4),
  },
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
    const validationErrors = {};
    switch (true) {
      case signUp && !firstName.trim():
          validationErrors.firstName = 'First name is required';
          break;
      case signUp && !lastName.trim():
          validationErrors.lastName = 'Last name is required';
          break;
      case !email.trim():
          validationErrors.email = 'Email is required';
          break;
      case !/\S+@\S+\.\S+/.test(email):
          validationErrors.email = 'Invalid email address';
          break;
      case !password.trim():
          validationErrors.password = 'Password is required';
          break;
      default:
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
  }

  return (
    <>
      <Typography fontSize={'27px'} fontWeight={'700'} className={classes.typography} variant="h2">
        {signUp ? 'Sign Up' : 'Login'}
      </Typography>

      <form className={classes.formContainer} onSubmit={handleSubmit} noValidate>
        {signUp && (
          <>
            <Grid container>
              <Grid className={classes.Grid} item xs={12} sm={12}>
                <TextField
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                  className={classes.textField}
                  fullWidth
                />
              </Grid>
              <Grid className={classes.Grid}  item xs={12} sm={12}>
                <TextField
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                  className={classes.textField}
                  fullWidth
                />
              </Grid>
            </Grid>
          </>
        )}
        <Grid container>
          <Grid className={classes.Grid}  item xs={12} sm={12} py={1}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              className={classes.textField}
              fullWidth
            />
          </Grid>
          <Grid className={classes.Grid}  item xs={12} sm={12} py={1}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
              className={classes.textField}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} py={1}>
            <Button sx={{width:'100%',borderRadius:'0'}} type="submit" variant="contained" color="primary">
              {signUp ? 'Sign Up' : 'Login'}
            </Button>
          </Grid>
          <Grid item xs={12} py={3} pl={0} textAlign={'left'}>
            <Link
              pl={0}
              component="button"
              variant="body2"
              className={classes.signUpLink}
              onClick={() => setSignUp(!signUp)}
            >
              <Typography fontSize={'18px'}>{signUp ? "Go back to Login" : "Don't have an account? Sign Up Here"}</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;
