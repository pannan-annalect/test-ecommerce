import React from 'react';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  facebookButton: {
    backgroundColor: '#1877F2', // Facebook blue color
    color: '#fff', // White text color
    '&:hover': {
      backgroundColor: '#0F65B3', // Darker shade on hover
    },
  },
  icon: {
    marginRight: theme.spacing(1), // Add some spacing between the icon and text
  },
}));

const FacebookLoginButton = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.facebookButton}
      startIcon={<FacebookIcon className={classes.icon} />}
    >
      Facebook Login
    </Button>
  );
};

export default FacebookLoginButton;
