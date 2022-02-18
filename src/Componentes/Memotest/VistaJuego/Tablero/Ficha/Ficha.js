
import { useSelector } from 'react-redux';
import { getDificultad } from '../../../MemotestSlice';
import './Ficha.css'

const Ficha = ({ficha, opacidad, darVuelta, borde}) => {

    const dificultad = useSelector(getDificultad)

    /* const tamanio = dificultad.level === "Easy" ? "20%" : dificultad.level === "Medium" ? "15%" : "10%" */
/* console.log(dificultad) */

    return ( 
        <div className={`ficha tamanioFicha${dificultad.level} borde-white`} /* style={{width: tamanio, height: tamanio}} */ onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
            <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />
        </div>
    );
}
 
export default Ficha;