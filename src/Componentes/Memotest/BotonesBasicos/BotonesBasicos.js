
import { useDispatch } from 'react-redux'
import { setDificultad, setTema } from '../../../app/slice/setCondicionesSlice'
import { setFichas, terminarJuego, setCargando, setGano} from '../../../app/slice/enJuegoSlice'
import { reiniciarValores as reiniciarReloj } from '../../../app/slice/infoPartidaSlice'

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
        dispatch(setDificultad({
            tiempo: undefined,
            cantParejas: undefined
        }))
        dispatch(setTema(""))
        dispatch(setFichas([]))
        dispatch(terminarJuego())
        limpiarValores()
    }

    /* -------- PONE VALORES A LO INICIAL ---------- */
    /* en reiniciar y en nuevoJuego */
    const limpiarValores = () =>{
        dispatch(setCargando(true))
        dispatch(reiniciarReloj())
        dispatch(setGano(false))
    }

    return (
        <>
            <button className='btn btn-primary mb-4 mx-2 w-75' disabled={botonInhabilitado} onClick={() => reiniciar()}>Reiniciar</button>
            <button className='btn btn-primary mb-4 mx-2 w-75' disabled={botonInhabilitado} onClick={() => nuevoJuego()} >Nuevo Juego</button>
        </>  
    );
}
 
export default BotonesBasicos;