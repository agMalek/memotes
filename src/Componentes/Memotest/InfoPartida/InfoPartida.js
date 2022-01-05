import ContadorIntentos from './ContadorIntentos/ContadorIntentos';
import Reloj from './Reloj/Reloj';

import'./InfoPartida.css'

const InfoPartida = () => {
    return (  
        <>
            <Reloj />
            <ContadorIntentos/>
        </>
       
    );
}
 
export default InfoPartida;