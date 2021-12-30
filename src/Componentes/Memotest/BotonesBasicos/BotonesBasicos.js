

import './BotonesBasicos.css'

const BotonesBasicos = (props) => {
    const {botonInhabilitado, reiniciar, nuevoJuego} = props
    return (
        <>
            <button className='btn btn-primary mb-4' disabled={botonInhabilitado} onClick={() => reiniciar()}>Reiniciar</button>
            <button className='btn btn-primary mb-4' disabled={botonInhabilitado} onClick={() => nuevoJuego()} >Nuevo Juego</button>
        </>  
    );
}
 
export default BotonesBasicos;