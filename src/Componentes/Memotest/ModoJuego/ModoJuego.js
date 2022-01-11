import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCargando, setCargando, setModoJuego } from '../MemotestSlice';
import Spinner from '../Spinner/Spinner';
import './ModoJuego.css'

const ModoJuego = () => {

    const dispatch = useDispatch()

    const cargando = useSelector(getCargando)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCargando(false))
        }, 700);
    },[])

    const seleccionModalidad = (modo) => {
        dispatch(setCargando(true))
        dispatch(setModoJuego(modo))
    }

    return (  
        <>  {
                cargando ? <Spinner/> :
                <div>
                    <button className='btn btn-outline-primary' onClick={() => seleccionModalidad("solo")}>Jugar solo</button>
                    <button className='btn btn-outline-primary' onClick={() => seleccionModalidad("multi")}>Multijugador</button>
                </div>
            }
        </>
    );
}
 
export default ModoJuego;