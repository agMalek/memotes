
import './VistaJuego.css'
import Tablero from './Tablero/Tablero';
import VistaBotonesJuego from './VistaBotonesJuego/VistaBotonesJuego';
import InfoPartida from '../InfoPartida/InfoPartida';

const VistaJuego = (props) => {
    const {botonInhabilitado, reiniciar, nuevoJuego, fichas, darVuelta, opacidad} = props
    return ( 
        <div className='d-flex justify-content-evenly'>
            <VistaBotonesJuego 
                botonInhabilitado={botonInhabilitado}
                reiniciar={reiniciar}
                nuevoJuego={nuevoJuego}
            />
            <Tablero 
                fichas={fichas}
                darVuelta={darVuelta}
                opacidad={opacidad} 
            />
            <div className='d-flex flex-column justify-content-evenly'>
            <div className='d-flex flex-column'>
                <InfoPartida />
            </div>
                {/* <InfoPartida/> */}
            </div>
        </div>
    );
}
 
export default VistaJuego;