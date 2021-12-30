
import'./VistaBotonesJuego.css'
import Titulo from '../../Titulo/Titulo';
import BotonesBasicos from '../../BotonesBasicos/BotonesBasicos';


const VistaBotonesJuego = (props) => {
    const {botonInhabilitado, reiniciar, nuevoJuego} = props
    return (  
        <div className='d-flex contenedorBotonesEnPartida justify-content-center align-items-center'>
            <Titulo />
            <BotonesBasicos 
                botonInhabilitado={botonInhabilitado}
                reiniciar={reiniciar}
                nuevoJuego={nuevoJuego}
            />
        </div>
    );
}
 
export default VistaBotonesJuego;