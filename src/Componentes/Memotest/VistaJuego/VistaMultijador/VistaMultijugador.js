
import { useSelector } from 'react-redux';
import { getJugadores} from '../../MemotestSlice';

import Jugador from './Jugador/Jugador';

import './VistaMultijugador.css'

const VistaMultijugador = () => {

    const jugadores = useSelector(getJugadores)

    /* const jugadores = [{num: 1, color: "red"}, {num: 2, color: "blue"}, {num: 3, color: "green"}, {num: 4, color: "yellow"}] */

    return (  
        <div className='d-flex flex-column contenedorJugadores'>
            {jugadores.map((jug, index) => (
                <div key={index}>
                    <Jugador {...jug}/>
                </div>
            ))}
        </div>
    );
}
 
export default VistaMultijugador;