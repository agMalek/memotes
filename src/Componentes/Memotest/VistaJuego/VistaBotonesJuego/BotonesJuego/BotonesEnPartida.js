

import './BotonesEnPartida.css'

const BotonesEnPartida = (props) => {
    const {botonInhabilitado, reiniciar, nuevoJuego} = props
    return (
        <>
            <button className='btn btn-primary botonEnPartida' disabled={botonInhabilitado} onClick={() => reiniciar()}>Reiniciar</button>
            <button className='btn btn-primary botonEnPartida' disabled={botonInhabilitado} onClick={() => nuevoJuego()} >Nuevo Juego</button>
        </>  
    );
}
 
export default BotonesEnPartida;