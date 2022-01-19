import { useSelector } from 'react-redux';
import { contIntentos } from '../MemotestSlice';

import './ContadorIntentos.css'

const ContadorIntentos = () => {
    
    const cont = useSelector(contIntentos)

    return (  
        <div className='contenedorTextoCantInt'>
            <p className='textoCantInt'>{cont} intentos</p>
        </div>
    );
}
 
export default ContadorIntentos;