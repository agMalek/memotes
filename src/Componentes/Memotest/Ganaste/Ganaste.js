
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getJugadores, getModoJuego, ponerBorde } from '../MemotestSlice';

import BotonesBasicos from '../BotonesBasicos/BotonesBasicos';
import ContadorIntentos from '../ContadorIntentos/ContadorIntentos';
import VistaMultijugador from '../VistaJuego/VistaMultijador/VistaMultijugador'
import Reloj from '../Reloj/Reloj';

import './Ganaste.css'

const Ganaste = ({prepararJuego}) => {


    const dispatch = useDispatch()

    const modoJuego = useSelector(getModoJuego)
    const jugadores = useSelector(getJugadores)

    const [ganadores, setGanadores] = useState([])
    
    const calcularGanador = () => {
        let indiceGanador = [];
        let maximo = jugadores[0].cantAciertos
        jugadores.forEach((jug, index) => {
            if(jug.cantAciertos > maximo){
                maximo = jug.cantAciertos
                indiceGanador = [index]
            } else if(jug.cantAciertos === maximo){
                indiceGanador.push(index)
            }
        })
        setGanadores(indiceGanador)
    }
    
    useEffect(() => {
        calcularGanador()
        dispatch(ponerBorde())
    }, [])


    return (  
        <div className="contenedorGanaste">
            {
                modoJuego === 'solo' ?
                <>
                    <h3 className='tituloGanaste'>Ganaste!!!</h3>
                    <div className="d-flex justify-content-around">
                        <Reloj />
                        <ContadorIntentos/>
                    </div>
                </>
                : 
                <>
                    {   ganadores.length === 1 ? 
                            <h3 className='mb-3 text-white text-center'>El ganador es {jugadores[ganadores[0]].nombre}</h3>
                        :   <h3 className='mb-3 text-white text-center'>Hubo empate</h3>
                    }
                    <div className='d-flex flex-wrap justify-content-center'>
                        <VistaMultijugador />
                    </div>
                
                </>
            }
             <div className='d-flex flex-wrap justify-content-evenly contenedorBotonesGanaste w-100 my-4'>
                <BotonesBasicos
                    prepararJuego={prepararJuego}
                    width={"40%"}
                />
            </div>
        </div>
    );
}
 
export default Ganaste;