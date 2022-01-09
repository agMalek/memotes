import './FormNombre.css'
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';

const FormNombre = ({setNombre, setColor, jugadores, i, setCantJugadores, limpiarValores}) => {

    const [activo, setActivo] = useState(i >=2 ? false : true)
    /* const [colores, setColores] = useState(
        {
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
        }
    ) */

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
        activo === true ? setCantJugadores(prev => prev -1) : setCantJugadores(prev => prev +1)
        setActivo(!activo)
        limpiarValores(`jugador${i+1}`)
    }

    return ( 
        <div className='contenedorFormNombre' style={{opacity: activo ? "1" : ".5"}}>
            <div className='d-flex'>
                {i >= 2 ? <Switch onClick={() => onSwitch()} /> : ""}
                <h3 className='text-center mb-3 nombre' style={{width: i >= 2 ? "80%" :"100%", color: `${jugadores[`jugador${i+1}`].color}` === "" ? "white" : `${jugadores[`jugador${i+1}`].color}`}} >
                    {jugadores[`jugador${i+1}`].nombre === "" ? `Jugador ${i+1}` : jugadores[`jugador${i+1}`].nombre}
                </h3>
            </div>
            <input
                className='w-100 mb-3' 
                name={`jugador${i+1}`} 
                type="text" 
                value={jugadores[`jugador${i+1}`].nombre} 
                onChange={(e) => setNombre(e)}
                readOnly={!activo}
            />
            <div className='d-flex'>
                <div className='itemBarraColor itemBarraColor-red' style={{opacity: jugadores[`jugador${i+1}`].color === "red" || validarColor("red") ? '1' : "0.3"}} onClick={activo && validarColor("red") ? () => onColor("red", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-orange' style={{opacity: jugadores[`jugador${i+1}`].color === "orange" || validarColor("orange") ? '1' : "0.3"}} onClick={activo && validarColor("orange") ? () => onColor("orange", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-yellow' style={{opacity: jugadores[`jugador${i+1}`].color === "yellow" || validarColor("yellow") ? '1' : "0.3"}} onClick={activo && validarColor("yellow") ? () => onColor("yellow", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-greenyellow' style={{opacity: jugadores[`jugador${i+1}`].color === "greenyellow" || validarColor("greenyellow") ? '1' : "0.3"}} onClick={activo && validarColor("greenyellow") ? () => onColor("greenyellow", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-green' style={{opacity: jugadores[`jugador${i+1}`].color === "green" || validarColor("green") ? '1' : "0.3"}} onClick={activo && validarColor("green") ? () => onColor("green", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-blue' style={{opacity: jugadores[`jugador${i+1}`].color === "blue" || validarColor("blue") ? '1' : "0.3"}} onClick={activo && validarColor("blue") ? () => onColor("blue", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-lightblue' style={{opacity: jugadores[`jugador${i+1}`].color === "lightblue" || validarColor("lightblue") ? '1' : "0.3"}} onClick={activo && validarColor("lightblue") ? () => onColor("lightblue", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-pink' style={{opacity: jugadores[`jugador${i+1}`].color === "pink" || validarColor("pink") ? '1' : "0.3"}} onClick={activo && validarColor("pink") ? () => onColor("pink", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-purple' style={{opacity: jugadores[`jugador${i+1}`].color === "purple" || validarColor("purple") ? '1' : "0.3"}} onClick={activo && validarColor("purple") ? () => onColor("purple", i) : () => console.log("Bloquedadp")}></div>
                <div className='itemBarraColor itemBarraColor-black' style={{opacity: jugadores[`jugador${i+1}`].color === "black" || validarColor("black") ? '1' : "0.3"}} onClick={activo && validarColor("black") ? () => onColor("black", i) : () => console.log("Bloquedadp")}></div>
                {/* <div className='itemBarraColor itemBarraColor-orange' onClick={() => onColor("orange", i)}></div>
                <div className='itemBarraColor itemBarraColor-yellow' onClick={() => onColor("yellow", i)}></div>
                <div className='itemBarraColor itemBarraColor-greenyellow' onClick={() => onColor("greenyellow", i)}></div>
                <div className='itemBarraColor itemBarraColor-green' onClick={() => onColor("green", i)}></div>
                <div className='itemBarraColor itemBarraColor-blue' onClick={() => onColor("blue", i)}></div>
                <div className='itemBarraColor itemBarraColor-lightblue' onClick={() => onColor("lightblue", i)}></div>
                <div className='itemBarraColor itemBarraColor-pink' onClick={() => onColor("pink", i)}></div>
                <div className='itemBarraColor itemBarraColor-purple' onClick={() => onColor("purple", i)}></div>
                <div className='itemBarraColor itemBarraColor-black' onClick={() => onColor("black", i)}></div> */}
            </div>
        </div>
    );
}
 
export default FormNombre;