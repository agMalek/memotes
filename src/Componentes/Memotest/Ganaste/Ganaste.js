
import BotonesBasicos from '../BotonesBasicos/BotonesBasicos';
import InfoPartida from '../InfoPartida/InfoPartida';
import './Ganaste.css'

const Ganaste = (props) => {
    const {reiniciar, nuevoJuego}= props
    return (  
        <div className="contenedorGanaste">
            <h3 className='tituloGanaste'>Ganaste!!!</h3>
            <div className="d-flex justify-content-around">
                <InfoPartida />
            </div>
            <div className='contenedorBotonesGanaste w-100 my-4'>
               <BotonesBasicos
                    reiniciar={reiniciar}
                    nuevoJuego={nuevoJuego}
               />
            </div>
        </div>
    );
}
 
export default Ganaste;