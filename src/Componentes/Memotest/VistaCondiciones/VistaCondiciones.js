import './VistaCondiciones.css'

import Titulo from "../Titulo/Titulo";
import FormCondiciones from './FormCondiciones/FormCondiciones';

const VistaCondiciones = (props) => {
    const { dificultad, setTema, setDificultad, setWidthContenedor, tema, prepararJuego, setJuegoEmpezado} = props
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