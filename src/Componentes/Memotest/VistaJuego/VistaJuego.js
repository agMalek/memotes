
import './VistaJuego.css'
import Titulo from '../Titulo/Titulo';
import Tablero from './Tablero/Tablero';

const VistaJuego = (props) => {
    const {botonInhabilitado, reiniciar, nuevoJuego, fichas, darVuelta, opacidad} = props
    return ( 
        <div className='d-flex justify-content-center'>
            <div className='d-flex contenedorBotonesEnPartida justify-content-center align-items-center'>
                <Titulo />
                <button className='btn btn-primary botonEnPartida' disabled={botonInhabilitado} onClick={() => reiniciar()}>Reiniciar</button>
                <button className='btn btn-primary botonEnPartida' disabled={botonInhabilitado} onClick={() => nuevoJuego()} >Nuevo Juego</button>
            </div>
            <Tablero 
                fichas={fichas}
                darVuelta={darVuelta}
                opacidad={opacidad} 
            />
            
                            
        </div>
    );
}
 
export default VistaJuego;