import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginSignupModal = ({ open, handleClose }) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        First login or signup
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        You need to be logged in to access this content. Please login or sign up to continue.
      </Typography>
      <Button onClick={handleClose} sx={{ mt: 2 }}>
        Close
      </Button>
    </Box>
  </Modal>
);

export const checkUser = (userId, setShowModal) => {
  if (!userId) {
    setShowModal(true);
    throw new Error("First login or signup");
  }
};

export default LoginSignupModal;
