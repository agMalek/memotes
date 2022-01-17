import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import './SpinnerMui.css'


export default function SimpleBackdrop({openSpinner}) {

  return (
    <div className={openSpinner ? `d-block` : `d-none`}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openSpinner}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}