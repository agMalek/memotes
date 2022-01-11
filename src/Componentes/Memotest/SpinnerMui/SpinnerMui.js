import './SpinnerMui.css'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

export default function SimpleBackdrop({openSpinner}) {

  /* const [cont, setCont] = useState(4)

  useEffect(() => {
    if(openSpinner){
      let time = setTimeout(() => {
        setCont(prev => prev -1)
        console.log("momomomo")  
      }, 1000);
      return () => clearTimeout(time)
    }else{
      console.log("lalalalal")  
    }
  },[cont])

  useEffect(() => {
    let time = setTimeout(() => {
      setCont(prev => prev -1)
      console.log("ttetetette")  
    }, 1000); 
    return () => clearTimeout(time)
  },[openSpinner])
 */

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openSpinner}
      >
        {/* <div className='aux'>{cont > 0 ? cont : "GO!"}</div> */}
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}