import Ficha from "./Ficha/Ficha";

import './Tablero.css'

const Tablero = (props) => {
    const {fichas, darVuelta, opacidad} = props
    
    return ( 
        <div className="contenedorFichas" >
            {fichas.map((ficha, index) => (
                <div key={index}>                    
                    <Ficha
                        ficha={ficha}
                        darVuelta={darVuelta}
                        opacidad={opacidad}
                        />
                </div>
            ))}
        </div>
    );
}
 
export default Tablero;