
import './Ficha.css'

const Ficha = (props) => {
    const {ficha, index, darVuelta, opacidad } = props
    return ( 
        <div className='ficha' key={index} onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
            <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />                            
        </div>
    );
}
 
export default Ficha;