
import './Jugador.css'

const Jugador = ({color, nombre, esMiTurno, cantAciertos}) => {

    
    return (  
        <>
            <div style={{color: color, opacity: esMiTurno ? "1" : "0.75", border: esMiTurno ? `3px solid ${color}` : ""}} className={`jugador ${esMiTurno ? "jugadorActivo" : ""} `} >
                <h2 >{nombre}</h2>
                <p className='textoJugador'>{ cantAciertos === 0 ? "Sin aciertos" : cantAciertos > 1 ? `${cantAciertos} aciertos` : `${cantAciertos} acierto` }</p>
            </div>
        </>
    );
}
 
export default Jugador;
