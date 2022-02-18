
import { useDispatch, useSelector } from 'react-redux'

import { reiniciarCondiciones, setFichas, terminarJuego, setCargando, setGano, reiniciarInfoPartida, setQuieroJugar, reiniciarAciertosJugadores, getModoJuego, setModoJuego, setMostrarForms, reiniciarNombresJugadores, setEmpezoJuego} from '../MemotestSlice'


import './BotonesBasicos.css'

const BotonesBasicos = ({botonInhabilitado, prepararJuego, width}) => {
    
    const dispatch = useDispatch()

    const modoJuego = useSelector(getModoJuego)

    /* ------- LIMPIA VALORES Y PREPARA UN NUEVO JUEGO CON LAS MISMAS CONDICIONES DE DIFICULTAD Y TEMA ---------- */
    /* en VistaDeJuego y en Ganaste */
    const reiniciar = () => {
        limpiarValores()
        prepararJuego()
    }
    
    /* -------- lIMPIA VALORES Y CONDICIONES DE DIFICULTAD Y TEMA, PARA EMPEZAR UN NUEVO TOTAL, ME REDIRECCIONA AL FORM DE COND. ------- */
    /* en VistaDeJuego y en Ganaste */
    const nuevoJuego = () => {
        dispatch(reiniciarCondiciones())
        dispatch(setFichas([]))
        dispatch(terminarJuego())
        limpiarValores()
    }

    /* -------- PONE VALORES A LO INICIAL ---------- */
    /* en reiniciar y en nuevoJuego */
    const limpiarValores = () =>{
        dispatch(setCargando(true))
        dispatch(reiniciarInfoPartida())
        dispatch(setGano(false))
        if(modoJuego === 'multi') {
            dispatch(reiniciarAciertosJugadores())
        }
        dispatch(setEmpezoJuego(false))

    }
    
    const jugarConOtroNombre = () => {
        nuevoJuego()
        dispatch(setMostrarForms(true))
    }

    const volverAHome = () => {
        nuevoJuego()
        dispatch(setQuieroJugar(false))
        dispatch(setModoJuego(""))
        dispatch(setMostrarForms(true))
        dispatch(reiniciarNombresJugadores())
    }

    return (
        <>
            <button className='btn btn-primary  botonBasico' style={{width: width}} disabled={botonInhabilitado} onClick={() => reiniciar()}>Reiniciar</button>
            <button className='btn btn-primary botonBasico' style={{width: width}} disabled={botonInhabilitado} onClick={() => nuevoJuego()} >Nuevo Juego</button>
            {
                modoJuego === 'multi' ?
                <button className='btn btn-primary botonBasico' style={{width: width}} disabled={botonInhabilitado} onClick={() => jugarConOtroNombre()} >Jugar con otro nombres</button>
                : ""
            }
            <button className='btn btn-primary botonBasico' style={{width: width}} disabled={botonInhabilitado} onClick={() => volverAHome()} >Volver al Home</button>
        </>
    );
}
 
export default BotonesBasicos;