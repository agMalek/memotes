
import './VistaJuego.css'
import Tablero from './Tablero/Tablero';
import VistaBotonesJuego from './VistaBotonesJuego/VistaBotonesJuego';

const VistaJuego = (props) => {
    const {botonInhabilitado, reiniciar, nuevoJuego, fichas, darVuelta, opacidad} = props
    return ( 
        <div className='d-flex justify-content-center'>
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
        </div>
    );
}
 
export default VistaJuego;