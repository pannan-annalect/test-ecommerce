import React from 'react';
import { Typography, Link, createTheme } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';

const useStyles = createTheme((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  contactDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTiming: {
    marginRight: theme.spacing(4),
  },
  contactMethods: {
    display: 'flex',
  },
  contactMethod: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const ContactDetails = () => {

  return (
    <div className={useStyles.root}>
      <Typography variant="h3" component="header" className={useStyles.header}>
        Contact Us
      </Typography>
      <div className={useStyles.contactDetails}>
        <div className={useStyles.textTiming}>
          <Typography variant="body1" component="div">
            Message us on WhatsApp
          </Typography>
          <Typography variant="body1" component="div">
            Business Hours: 10 am to 6:30 pm
            <br />
            (Monday to Saturday)
          </Typography>
        </div>
        <div className={useStyles.contactMethods}>
          <div className={useStyles.contactMethod}>
            <PhoneInTalkIcon className={useStyles.icon} />
            <Link href="tel:8447704734">8447704734</Link>
          </div>
          <div className={useStyles.contactMethod}>
            <WhatsAppIcon className={useStyles.icon} />
            <Link href="https://api.whatsapp.com/send?phone=8447704734">8447704734</Link>
          </div>
          <div className={useStyles.contactMethod}>
            <MailIcon className={useStyles.icon} />
            <Link href="mailto:care@dotandkey.com">care@dotandkey.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
