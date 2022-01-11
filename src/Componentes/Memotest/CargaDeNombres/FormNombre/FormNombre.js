import './FormNombre.css'
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';

const FormNombre = ({setNombre, setColor, jugadores, i, setCantJugadores, limpiarValores}) => {

    const [activo, setActivo] = useState(i >=2 ? false : true)
    const colores = ["red", "orange", "yellow", "lime", "green", "blue", "deepskyblue", "fuchsia", "deeppink", "black"]

    const validarColor = (color) =>{
        let rta = true
        for (const key in jugadores) {
            if(jugadores[key].color === color){
                rta = false
            }
        }
        return rta
    } 


    const onColor = (color, i) => {
        setColor(color, i)
        /* setColores({
            red: false,
            orange: false,
            yellow: false,
            greenyellow: false,
            green: false,
            blue: false,
            lightblue: false,
            pink: false,
            purple: false,
            black: false
        , [color]: true}) */
    }

    /* useEffect(() =>{
        console.log(colores)
    },[colores]) */

    const onSwitch = () => {
        activo ? setCantJugadores(prev => prev -1) : setCantJugadores(prev => prev +1)
        setActivo(!activo)
        limpiarValores(`jugador${i+1}`)
    }

    return ( 
        <div className='contenedorFormNombre' style={{opacity: activo ? "1" : ".5"}}>
            <div className='d-flex'>
                {i >= 2 ? <Switch onClick={() => onSwitch()} /> : "" }
                <h3 className='text-center mb-3 nombre' style={{width: i >= 2 ? "80%" :"100%", color: `${jugadores[`jugador${i+1}`].color}` === "" ? "white" : `${jugadores[`jugador${i+1}`].color}`}} >
                    {jugadores[`jugador${i+1}`].nombre === "" ? `Jugador ${i+1}` : jugadores[`jugador${i+1}`].nombre}
                </h3>
            </div>
            <input
                className='w-100 mb-3 inputNombre' 
                name={`jugador${i+1}`} 
                type="text"     
                value={jugadores[`jugador${i+1}`].nombre} 
                onChange={(e) => setNombre(e)}
                readOnly={!activo}
                placeholder='Ingrese el nombre'
                autoComplete='off'
            />
            <p className='text-white text-center my-1'>Elija un color que lo represente</p>
            <div className='d-flex justify-content-evenly'>
                {
                    colores.map((col, index) => (
                        <div 
                            key={index}
                            className={`itemBarraColor itemBarraColor-${col}`} 
                            style={{opacity: jugadores[`jugador${i+1}`].color === col || validarColor(col) ? '1' : "0.3"}} 
                            onClick={activo && validarColor(col) ? () => onColor(col, i) : () => console.log("Bloqueado")}
                        >
                            {jugadores[`jugador${i+1}`].color === col ? "OK" : ""}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default FormNombre;