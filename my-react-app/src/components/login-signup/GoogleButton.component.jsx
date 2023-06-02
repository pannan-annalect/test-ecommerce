import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import GoogleIcon from '@mui/icons-material/Google';

const useStyles = makeStyles((theme) => ({
  googleButton: {
     // Google red color
    color: '#fff', // White text color
    '&:hover': {
        backgroundColor: '#C53929', // Darker shade on hover
    },
  },
  icon: {
    marginRight: theme.spacing(1), // Add some spacing between the icon and text
  },
}));

const GoogleLoginButton = () => {
  const classes = useStyles();

  return (
    <Button
    style={{backgroundColor: '#dd4b39'}}
      variant="contained"
      className={classes.googleButton}
      startIcon={<GoogleIcon className={classes.icon} />}
    >
      Google Login
    </Button>
  );
};

export default GoogleLoginButton;
