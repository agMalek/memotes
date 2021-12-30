import './VistaCondiciones.css'

import Titulo from "../Titulo/Titulo";
import FormCondiciones from './FormCondiciones/FormCondiciones';

const VistaCondiciones = (props) => {
    const {iniciarJuego, setNivel} = props
    return (  
        <div>
            <Titulo/>
            <FormCondiciones iniciarJuego={iniciarJuego} setNivel={setNivel} />
        </div>
    );
}
 
export default VistaCondiciones;