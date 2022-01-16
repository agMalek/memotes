import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import './SpinnerMui.css'


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