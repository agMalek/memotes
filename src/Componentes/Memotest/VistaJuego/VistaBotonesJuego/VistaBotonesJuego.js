
import'./VistaBotonesJuego.css'
import Titulo from '../../Titulo/Titulo';
import BotonesEnPartida from './BotonesJuego/BotonesEnPartida';


const VistaBotonesJuego = (props) => {
    const {botonInhabilitado, reiniciar, nuevoJuego} = props
    return (  
        <div className='d-flex contenedorBotonesEnPartida justify-content-center align-items-center'>
            <Titulo />
            <BotonesEnPartida 
                botonInhabilitado={botonInhabilitado}
                reiniciar={reiniciar}
                nuevoJuego={nuevoJuego}
            />
        </div>
    );
}
 
export default VistaBotonesJuego;