import './ContadorIntentos.css'
import { useSelector } from 'react-redux';
import { contIntentos } from '../../../../app/slice/infoPartidaSlice'; 

const ContadorIntentos = () => {
    
    const cont = useSelector(contIntentos)

    return (  
        <div className='contenedorTectoCantInt'>
            <p className='textoCantInt'>{cont} intentos</p>
        </div>
    );
}
 
export default ContadorIntentos;