import React, { useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import './stripe.css';
const stripePromise = loadStripe('your_publishable_key_here');

const CheckoutForm = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      setPaymentError(error.message);
    } else {
      // Send the token to your server for payment processing
      console.log(token);
      // Close the modal after successful payment
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '5rem' }}>
       
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '1.1em',
                  color: '#424770',
               
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        
      </div>
      <Button type="submit" disabled={!stripe} variant='contained' style={{ marginTop: '1.5rem' }}>
        Pay
      </Button>
      {paymentError && <div style={{ color: '#9e2146', marginTop: '1rem' }}>{paymentError}</div>}
    </form>
  );
};

const StripeCheckout = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
         height:'40%',
          padding: '2rem',
        }}
      >
        <Box
          style={{
            width: '30%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: '1rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}
        >
          <Button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              color: 'grey',
            }}
          >
            <CloseIcon />
          </Button>
          <div className="label"><label>Card information :-</label></div>
          <div className='cardform'>
          <Elements stripe={stripePromise}>
            <CheckoutForm onClose={onClose} />
          </Elements>
          </div>
        </Box>
      </Box>
    </Modal>
  );
};

export default StripeCheckout;
