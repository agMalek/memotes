
import { useSelector } from 'react-redux';
import { getJugadores} from '../../MemotestSlice';

import Jugador from './Jugador/Jugador';

import './VistaMultijugador.css'

const VistaMultijugador = () => {

    const jugadores = useSelector(getJugadores)

    return (  
        <>
            {jugadores.map((jug, index) => (
                jug.nombre !== "" ?
                <div key={index}>
                    <Jugador {...jug}/>
                </div>
                : undefined
            ))}
        </>
    );
}
 
export default VistaMultijugador;