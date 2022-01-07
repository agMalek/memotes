
import './Ficha.css'

const Ficha = ({ficha, opacidad, darVuelta, borde}) => {


    return ( 
        <div className='ficha borde-white' onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
            <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />
        </div>
    );
}
 
export default Ficha;