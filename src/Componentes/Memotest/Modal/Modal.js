import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import './Modal.css'


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide ref={ref} {...props} />;
});


export default function Modal({openModal, setOpenModal, title, text, textButton}) {

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div >
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{textButton}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}