
import Titulo from "../Titulo/Titulo";
import FormCondiciones from './FormCondiciones/FormCondiciones';

import './VistaCondiciones.css'

const VistaCondiciones = ({prepararJuego}) => {
    
    return (  
        <div>
            <Titulo/>
            <FormCondiciones 
                prepararJuego={prepararJuego}
            />
        </div>
    );
}
 
export default VistaCondiciones;