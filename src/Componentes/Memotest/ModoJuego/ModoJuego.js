import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCargando, setCargando, setModoJuego } from '../MemotestSlice';
import Spinner from '../Spinner/Spinner';
import Titulo from '../Titulo/Titulo';
import './ModoJuego.css'

const ModoJuego = () => {

    const dispatch = useDispatch()

    const cargando = useSelector(getCargando)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCargando(false))
        }, 500);
    },[])

    const seleccionModalidad = (modo) => {
        dispatch(setCargando(true))
        dispatch(setModoJuego(modo))
    }

    return (  
        <>  {
                cargando ? <Spinner/> :
                <div className='contenedorModoJuego'>
                    <Titulo/>
                    <div className='contenedorBotonesModoJuego'>
                        <button className='btn btn-outline-primary botonModo' style={{fontSize: "30px"}} onClick={() => seleccionModalidad("solo")}>Jugar solo</button>
                        <button className='btn btn-outline-primary botonModo' style={{fontSize: "30px"}} onClick={() => seleccionModalidad("multi")}>Multijugador</button>
                    </div>
                </div>
            }
        </>
    );
}
 
export default ModoJuego;