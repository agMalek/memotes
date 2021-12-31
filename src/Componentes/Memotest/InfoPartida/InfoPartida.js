import ContadorIntentos from './ContadorIntentos/ContadorIntentos';
import'./InfoPartida.css'
import Reloj from './Reloj/Reloj';

const InfoPartida = (props) => {
    const {iniciarCronometro} = props
    return (  
        <div className='contenedorInfoPartida'>
            <Reloj
                iniciarCronometro={iniciarCronometro}
            />
            <ContadorIntentos/>
        </div>
    );
}
 
export default InfoPartida;