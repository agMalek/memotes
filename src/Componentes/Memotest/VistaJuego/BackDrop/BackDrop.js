
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {getDificultad, getModoJuego} from '../../MemotestSlice'
import Backdrop from '@mui/material/Backdrop';
import './BackDrop.css'

export default function SimpleBackdrop({openBackDrop}) {

  const {tiempo} = useSelector(getDificultad)
  const modoJuego = useSelector(getModoJuego)

  const [cont, setCont] = useState(3)

  useEffect(() => {
    if(openBackDrop){
      let time = setTimeout(() => {
        setCont(prev => prev -1)
      }, 1000);
      return () => clearTimeout(time)
    }
  },[cont])

  

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
      >
        <div className='contenedorBackDrop'>
            <h3 className='numeroBackDrop'>{cont > 0 ? cont : "Vamos!"}</h3>
            <p className='textoBackDrop fs-35'>{modoJuego === "solo" ? "Preparate!" : "Preparense!"}</p>
            <p className='textoBackDrop fs-25 '>{modoJuego === "solo" ? "Tendras" : "Tendran"} {tiempo/1000} segundos para recordar la ubicación de las fichas.</p>
        </div>
      </Backdrop>
    </div>
  );
}