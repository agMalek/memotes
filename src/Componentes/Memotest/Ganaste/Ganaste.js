
import Ayuda from '../Ayuda/Ayuda';
import BotonesBasicos from '../BotonesBasicos/BotonesBasicos';
import ContadorIntentos from '../ContadorIntentos/ContadorIntentos';
import Reloj from '../Reloj/Reloj';
import './Ganaste.css'

const Ganaste = ({prepararJuego}) => {

    return (  
        <div className="contenedorGanaste">
            <h3 className='tituloGanaste'>Ganaste!!!</h3>
            <div className="d-flex justify-content-around">
                <Reloj />
                <ContadorIntentos/>
            </div>
            <div className='contenedorBotonesGanaste w-100 my-4'>
               <BotonesBasicos
                    prepararJuego={prepararJuego}
               />
            </div>
        </div>
    );
}
 
export default Ganaste;