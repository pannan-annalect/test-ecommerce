import React from 'react';
import { Typography, Link, Grid, createTheme } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';

const useStyles = createTheme((theme) => ({
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
}));

const ContactDetails = () => {

  return (
    <Grid textAlign={'center'}>
      <Typography variant="h2" className="page-title">
        Contact Us
      </Typography>
      <div className={useStyles.contactDetails}>
        <div className={useStyles.textTiming}>
          <Typography variant="body1" mb={'20px'}>
            Message us on WhatsApp
          </Typography>
          <Typography variant="body1" mb={'20px'}>
            Business Hours: 10 am to 6:30 pm
            <br />
            (Monday to Saturday)
          </Typography>
        </div>
        <div className={useStyles.contactMethods}>
          <div className={useStyles.contactMethod}>
            <PhoneInTalkIcon sx={{fontSize:70,py:3}} />
            <Typography>
              <Link href="tel:8447704734">8447704734</Link>
            </Typography>
          </div>
          <div className={useStyles.contactMethod}>
            <WhatsAppIcon sx={{fontSize:70,py:3}} />
            <Typography>
              <Link href="https://api.whatsapp.com/send?phone=8447704734">8447704734</Link>
            </Typography>
          </div>
          <div className={useStyles.contactMethod}>
            <MailIcon sx={{fontSize:70,py:3}} />
            <Typography>
              <Link href="mailto:care@domainname.com">care@domainname.com</Link>
            </Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default ContactDetails;
