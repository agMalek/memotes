
import Titulo from '../../Titulo/Titulo';
import BotonesBasicos from '../../BotonesBasicos/BotonesBasicos';

import'./VistaBotonesJuego.css'

const VistaBotonesJuego = ({botonInhabilitado, prepararJuego}) => {

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