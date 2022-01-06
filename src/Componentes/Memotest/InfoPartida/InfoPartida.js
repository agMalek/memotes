import ContadorIntentos from './ContadorIntentos/ContadorIntentos';
import Reloj from './Reloj/Reloj';
import Ayuda from './Ayuda/Ayuda';

import'./InfoPartida.css'

const InfoPartida = ({contenedor, setPodesJugar}) => {
    return (  
        <>
            <Reloj />
            <Ayuda contenedor={contenedor} setPodesJugar={setPodesJugar}/>
            <ContadorIntentos/>
        </>
       
    );
}
 
export default InfoPartida;