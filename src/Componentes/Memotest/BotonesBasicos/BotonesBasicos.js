
import { useDispatch } from 'react-redux'

import { reiniciarCondiciones, setFichas, terminarJuego, setCargando, setGano, reiniciarInfoPartida, setQuieroJugar, reiniciarAciertosJugadores} from '../MemotestSlice'


import './BotonesBasicos.css'

const BotonesBasicos = ({botonInhabilitado, prepararJuego}) => {
    
    const dispatch = useDispatch()

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
        dispatch(reiniciarAciertosJugadores())
    }
    

    const volverAHome = () => {
        nuevoJuego()
        dispatch(setQuieroJugar(false))
    }

    return (
        <>
            <button className='btn btn-primary mb-4 mx-3 w-100' disabled={botonInhabilitado} onClick={() => reiniciar()}>Reiniciar</button>
            <button className='btn btn-primary mb-4 mx-3 w-100' disabled={botonInhabilitado} onClick={() => nuevoJuego()} >Nuevo Juego</button>
            <button className='btn btn-primary mb-4 mx-3 w-100' disabled={botonInhabilitado} onClick={() => volverAHome()} >Volver al Home</button>
        </>  
    );
}
 
export default BotonesBasicos;