import ContadorIntentos from './ContadorIntentos/ContadorIntentos';
import'./InfoPartida.css'
import Reloj from './Reloj/Reloj';

const InfoPartida = () => {
    return (  
        <>
            <Reloj />
            <ContadorIntentos/>
        </>
       
    );
}
 
export default InfoPartida;