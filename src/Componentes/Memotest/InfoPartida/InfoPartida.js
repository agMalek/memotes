import ContadorIntentos from './ContadorIntentos/ContadorIntentos';
import'./InfoPartida.css'
import Reloj from './Reloj/Reloj';

const InfoPartida = (props) => {
    const {reloj, contInt} = props
    return (  
        <>
            <Reloj className=""
               {...reloj}
            />
            <ContadorIntentos className=""
                {...contInt}
            />
        </>
       
    );
}
 
export default InfoPartida;