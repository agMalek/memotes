import './BackDrop.css'


import Backdrop from '@mui/material/Backdrop';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {getDificultad, getModoJuego} from '../../MemotestSlice'

export default function SimpleBackdrop({openBackDrop}) {

  const {tiempo} = useSelector(getDificultad)
  const modoJuego = useSelector(getModoJuego)

  const [cont, setCont] = useState(5)

  useEffect(() => {
    if(openBackDrop){
      let time = setTimeout(() => {
        setCont(prev => prev -1)
        console.log("momomomo")  
      }, 1000);
      return () => clearTimeout(time)
    }else{
      console.log("lalalalal")  
    }
  },[cont])

  

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
      >
        <div className='d-flex flex-column align-items-center'>
            <h3 className='numeroBackDrop'>{cont > 0 ? cont : "GO!"}</h3>
            <p className='textoBackDrop'>{modoJuego === "solo" ? "Preparate! Tendras" : "Preparense! Tendran"} {tiempo/1000} segundos para recordar la ubicación de las fichas.</p>
        </div>
      </Backdrop>
    </div>
  );
}