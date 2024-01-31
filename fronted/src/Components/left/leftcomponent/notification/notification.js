import React, { useState } from 'react';
import { Paper, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './notification.css';

const Notification = () => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <h1>Notification Example</h1>
      <Paper>
        <p className='note'>Welcome to zealblog</p>
      </Paper>

      {/* Welcome Notification */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={7000}
        onClose={handleClose}
        message="Welcome to zealblog!"
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default Notification;
