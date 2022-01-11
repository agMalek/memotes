import './SpinnerMui.css'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SimpleBackdrop({openSpinner}) {

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openSpinner}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}