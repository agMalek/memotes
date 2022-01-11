
import Titulo from "../Titulo/Titulo";
import FormCondiciones from './FormCondiciones/FormCondiciones';
/* import SpinnerMui from '../SpinnerMui/SpinnerMui' */
import './VistaCondiciones.css'
/* import { useState } from "react"; */

const VistaCondiciones = ({prepararJuego}) => {
    
   /*  const [openSpinner, setOpenSpinner] = useState(false); */

    return (  
        <div>
            {/* <SpinnerMui openSpinner={openSpinner}/> */}
            <Titulo/>
            <FormCondiciones 
                prepararJuego={prepararJuego}
               /*  setOpenSpinner={setOpenSpinner}
                openSpinner={openSpinner} */
            />
        </div>
    );
}
 
export default VistaCondiciones;