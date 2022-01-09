
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import BotonesBasicos from '../BotonesBasicos/BotonesBasicos';
import ContadorIntentos from '../ContadorIntentos/ContadorIntentos';
import VistaMultijugador from '../VistaJuego/VistaMultijador/VistaMultijugador'
import { getGanador, getJugadores, ponerBorde } from '../MemotestSlice';
import Reloj from '../Reloj/Reloj';
import './Ganaste.css'

const Ganaste = ({prepararJuego}) => {


    const dispatch = useDispatch()

    /* const ganador = useSelector(getGanador) */
    const jugadores = useSelector(getJugadores)

    const [ganadores, setGanadores] = useState([])
    
    const calcularGanador = () => {
        let indiceGanador = [];
        let maximo = jugadores[0].cantAciertos
        jugadores.map((jug, index) => {
            if(jug.cantAciertos > maximo){
                maximo = jug.cantAciertos
              /*   console.log(maximo) */
                indiceGanador = [index]
              /*   console.log(indiceGanador)
                console.log("ganador unico") */
            } else if(jug.cantAciertos === maximo){
                indiceGanador.push(index)
                /* console.log(indiceGanador)
                console.log("paso por empate") */
            }
        })

        setGanadores(indiceGanador)
        /* console.log(indiceGanador) */
    }

    useEffect(() => {
        /* dispatch(setGanador(calcularGanador())) */
        /* console.log(ganadores)
        console.log(jugadores) */
    }, [ganadores])
    
    useEffect(() => {
        calcularGanador()
        dispatch(ponerBorde())
    }, [])


    return (  
        <div className="contenedorGanaste">
            {
                false ?
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
                    <div className='d-flex flex-wrap'>
                        <VistaMultijugador />
                    </div>
                
                </>
            }
             <div className='contenedorBotonesGanaste w-100 my-4'>
                <BotonesBasicos
                    prepararJuego={prepararJuego}
                />
            </div>
        </div>
    );
}
 
export default Ganaste;