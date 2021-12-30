
import './Ganaste.css'

const Ganaste = (props) => {
    const {reiniciar, nuevoJuego} = props
    return (  
        <div className="contenedorGanaste">
            <h3 className='tituloGanaste'>Ganaste!!!</h3>
            <div className='contenedorBotonesGanaste w-100 my-4'>
                <button className='btn btn-primary botonGanaste' onClick={() => reiniciar()}>Reiniciar</button>
                <button className='btn btn-primary botonGanaste' onClick={() => nuevoJuego()} >Nuevo Juego</button>
            </div>
        </div>
    );
}
 
export default Ganaste;