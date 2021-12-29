
import './VistaJuego.css'
import Titulo from '../Titulo/Titulo';

const Tablero = (props) => {
    const {botonInhabilitado, reiniciar, nuevoJuego, fichas, darVuelta, opacidad} = props
    return ( 
        <div className='d-flex justify-content-center'>
            <div className='d-flex contenedorBotonesEnPartida justify-content-center align-items-center'>
                <Titulo />
                <button className='btn btn-primary botonEnPartida' disabled={botonInhabilitado} onClick={() => reiniciar()}>Reiniciar</button>
                <button className='btn btn-primary botonEnPartida' disabled={botonInhabilitado} onClick={() => nuevoJuego()} >Nuevo Juego</button>
            </div>
            <div className="contenedorFichas" >
                {fichas.map((ficha, index) => (
                    <div className='ficha' key={index} onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
                        <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />                            
                    </div>
                ))}
            </div>
                            
        </div>
    );
}
 
export default Tablero;