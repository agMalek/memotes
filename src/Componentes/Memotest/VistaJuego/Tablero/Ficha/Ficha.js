
import './Ficha.css'

const Ficha = ({ficha, opacidad, darVuelta}) => {


    return ( 
        <div className='ficha' onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
            <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />
        </div>
    );
}
 
export default Ficha;