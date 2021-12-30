import Ficha from "./Ficha/Ficha";

import './Tablero.css'

const Tablero = (props) => {
    const {fichas, darVuelta, opacidad} = props
    
    return ( 
        <div className="contenedorFichas" >
            {fichas.map((ficha, index) => (
                <Ficha 
                    ficha={ficha}
                    index={index}
                    darVuelta={darVuelta}
                    opacidad={opacidad}
                />
            ))}
        </div>
    );
}
 
export default Tablero;