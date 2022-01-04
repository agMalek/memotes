
import'./VistaBotonesJuego.css'
import Titulo from '../../Titulo/Titulo';
import BotonesBasicos from '../../BotonesBasicos/BotonesBasicos';


const VistaBotonesJuego = (props) => {
    const {botonInhabilitado, prepararJuego} = props
    return (  
        <div className='d-flex contenedorBotonesEnPartida justify-content-center align-items-center'>
            <Titulo />
            <BotonesBasicos 
                botonInhabilitado={botonInhabilitado}
                prepararJuego={prepararJuego}
            />
        </div>
    );
}
 
export default VistaBotonesJuego;