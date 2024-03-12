import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import paymentsystem from './paymentsystem.json';
import './payment.css';
import * as CiIcons from "react-icons/ci";  
import * as FaIcons from "react-icons/fa";  
import googlePayImage from '../../../../src/asset/gpay.jpg';
import UPI from '../../../../src/asset/upi.jpg';
import StripeCheckout from '../../../payment/stripe'; 

const Paymentsystem = () => {
  const [openModal, setOpenModal] = useState(false);
  const ciIconComponents = Object.fromEntries(Object.entries(CiIcons).filter(([key, value]) => typeof value === 'function'));
  const faIconComponents = Object.fromEntries(Object.entries(FaIcons).filter(([key, value]) => typeof value === 'function'));

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Paper style={{
          width:'20%',
          marginLeft:'20%',
      }}>
        <div className='paymentsystemoptions'>
          <div className='paymentoptionsheading'>Payment options</div><hr></hr>
          
          {paymentsystem.map((data) => (
            
            <div display="grid" key={data.type} onClick={() => data.type === 'Credit/Debit/ATM card' && handleOpenModal()}  style={{ cursor: 'pointer', border: 'none', background: 'none', padding: '0', margin: '0', outline: 'none' }}>
              
              <div className="paymentsystembox">
                  
                <div className='paymentsystemicon'>
                 
                  {data.icon === 'GooglePay' && <img src={googlePayImage} alt="Google Pay" className="googlePayImage" />}
                  {data.icon === 'UPI' && <img src={UPI} alt="UNIFIED PAYMENT INTERFACE" className="upi" />}
                  {ciIconComponents[data.icon] && ciIconComponents[data.icon]()}
                  {faIconComponents[data.icon] && faIconComponents[data.icon]()}

                </div>
               
                <div className='paymentsystemtype'>{data.type}</div>
             
              </div>
            
              <div className='paymentsystembrief'>{data.brieftype}</div><hr></hr>
                  
            </div>
          ))}
          
        </div>
      </Paper>
      {/* Render StripeCheckout component conditionally */}
      {openModal && <StripeCheckout open={openModal} onClose={handleCloseModal} />}
    </>
  );
};

export default Paymentsystem;
