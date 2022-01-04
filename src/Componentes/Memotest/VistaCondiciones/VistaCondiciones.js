import './VistaCondiciones.css'

import Titulo from "../Titulo/Titulo";
import FormCondiciones from './FormCondiciones/FormCondiciones';

const VistaCondiciones = ({ dificultad, setTema, setDificultad, setWidthContenedor, tema, prepararJuego, setJuegoEmpezado}) => {
    
    return (  
        <div>
            <Titulo/>
            <FormCondiciones 
                dificultad={dificultad}
                setTema={setTema}
                setDificultad={setDificultad}
                setWidthContenedor={setWidthContenedor} 
                tema={tema}
                prepararJuego={prepararJuego}
                setJuegoEmpezado={setJuegoEmpezado}
            />
        </div>
    );
}
 
export default VistaCondiciones;