
import './Ficha.css'
import { useSelector } from 'react-redux';
import { getJugadores, getIndiceActivo } from '../../../MemotestSlice';

const Ficha = ({ficha, opacidad, darVuelta}) => {

    const jugadores = useSelector(getJugadores)
    const indice = useSelector(getIndiceActivo)

    return ( 
        <div className='ficha' onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
            <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />
        </div>
    );
}
 
export default Ficha;