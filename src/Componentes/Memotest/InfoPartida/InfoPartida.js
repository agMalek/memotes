import ContadorIntentos from './ContadorIntentos/ContadorIntentos';
import'./InfoPartida.css'
import Reloj from './Reloj/Reloj';

const InfoPartida = () => {
    return (  
        <div className='contenedorInfoPartida'>
            <Reloj/>
            <ContadorIntentos/>
        </div>
    );
}
 
export default InfoPartida;