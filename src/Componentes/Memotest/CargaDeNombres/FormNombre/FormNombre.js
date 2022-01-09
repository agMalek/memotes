import './FormNombre.css'
import Switch from '@mui/material/Switch';
import { useState } from 'react';

const FormNombre = ({setNombre, setColor, jugadores, i, setCantJugadores, limpiarValores}) => {

    const [activo, setActivo] = useState(i >=2 ? false : true)

    const onSwitch = () => {
        activo === true ? setCantJugadores(prev => prev -1) : setCantJugadores(prev => prev +1)
        setActivo(!activo)
        limpiarValores(`jugador${i+1}`)
    }

    return ( 
        <div className='contenedorFormNombre' style={{opacity: activo ? "1" : ".5"}}>
            <div className='d-flex'>
                {i >= 2 ? <Switch onClick={() => onSwitch()} /> : ""}
                <h3 className='text-center text-white mb-3 nombre'>
                    {jugadores[`jugador${i+1}`].nombre === "" ? `Jugador ${i+1}` : jugadores[`jugador${i+1}`].nombre}
                </h3>
            </div>
            <input className='w-100 mb-3' name={`jugador${i+1}`} type="text" value={jugadores[`jugador${i+1}`].nombre} onChange={(e) => setNombre(e)}/>
            <div className='d-flex'>
                <div className='itemBarraColor itemBarraColor-red' onClick={() => setColor("red", i)}></div>
                <div className='itemBarraColor itemBarraColor-orange' onClick={() => setColor("orange", i)}></div>
                <div className='itemBarraColor itemBarraColor-yellow' onClick={() => setColor("yellow", i)}></div>
                <div className='itemBarraColor itemBarraColor-greenyellow' onClick={() => setColor("greenyellow", i)}></div>
                <div className='itemBarraColor itemBarraColor-green' onClick={() => setColor("green", i)}></div>
                <div className='itemBarraColor itemBarraColor-blue' onClick={() => setColor("blue", i)}></div>
                <div className='itemBarraColor itemBarraColor-lightblue' onClick={() => setColor("lightblue", i)}></div>
                <div className='itemBarraColor itemBarraColor-pink' onClick={() => setColor("pink", i)}></div>
                <div className='itemBarraColor itemBarraColor-purple' onClick={() => setColor("purple", i)}></div>
                <div className='itemBarraColor itemBarraColor-black' onClick={() => setColor("black", i)}></div>
            </div>
        </div>
    );
}
 
export default FormNombre;