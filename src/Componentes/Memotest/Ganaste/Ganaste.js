
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
                    <div className="contenedorInfoPartidaEnGanaste">
                        <Reloj />
                        <ContadorIntentos/>
                    </div>
                </>
                : 
                <>
                    {   ganadores.length === 1 ? 
                            <h3 className='tituloGanasteEnMulti'>El ganador es {jugadores[ganadores[0]].nombre}</h3>
                        :   <h3 className='tituloGanasteEnMulti'>Hubo empate</h3>
                    }
                    <div className='contenedorJugadoresEnGanaste'>
                        <VistaMultijugador />
                    </div>
                
                </>
            }
             <div className='contenedorBotonesGanaste '>
                <BotonesBasicos
                    prepararJuego={prepararJuego}
                    width={"40%"}
                />
            </div>
        </div>
    );
}
 
export default Ganaste;