import './Jugador.css'

const Jugador = ({color, nombre, esMiTurno, cantAciertos}) => {
    return (  
        <>
            <div style={{color: color, opacity: esMiTurno ? "1" : "0.5", border: esMiTurno ? `3px solid ${color}` : ""}} className='jugador my-3 mx-3 text-center' >
                <h2 >{nombre}</h2>
                <p>Tienes {cantAciertos} parejas adivinadas</p>
            </div>
        </>
    );
}
 
export default Jugador;
