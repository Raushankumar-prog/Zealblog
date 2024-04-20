import React, { useState } from 'react';
import { Button, Paper, Modal, Box } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PaymentIcon from '@mui/icons-material/Payment';
//import StripeCheckout from '../../../../payment/stripe';
import { Link } from 'react-router-dom';
const Advertising = () => {
  

  return (
    <div>
      <Paper sx={{ width: '40%', margin: '2% 0', padding: '2%', marginLeft: '10%', backgroundColor: '#F4F4F4', color: '#333', fontFamily: 'YourChosenFont' }}>
        <h2>Advertise with us</h2>
        <p>Contact with us: <Link href="mail to:raushankumar8757825@gmail.com" underline="hover">
          <MailOutlineIcon sx={{ marginRight: 1 }} />
          raushankumar8757825@gmail.com
        </Link></p>
        <Button variant="outlined" color="primary">$100 on Homepage/year</Button><br /><Link to='/paymentsystem'>
        <Button variant="contained" color="primary" startIcon={<PaymentIcon />}  style={{marginTop:'2rem'}}>Pay</Button></Link>
       
      </Paper>
    </div>
  );
}

export default Advertising;
