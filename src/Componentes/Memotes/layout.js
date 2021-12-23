import React from 'react'

import './style.css'

export function Layout ({
    juegoEmpezado,
    setJuegoEmpezado,
    setNivel,
    tema,
    tiempo,
    fichas,
    empezar,
    opacidad,
    darVuelta,
    setOpacidad

}){
    return(
        <div>
            
            {
                !juegoEmpezado ? 
                <button onClick={() => setJuegoEmpezado(true)}>EMPEZAR JUEGO</button>

                : tiempo === undefined ?
                
                <div>
                    <button onClick={()=>setNivel("Easy")}>Easy</button>
                    <button onClick={()=>setNivel("Medium")}>Medium</button>
                    <button onClick={()=>setNivel("Hard")}>Hard</button>
                </div>
                : tema === "" ?
                <div>
                    <button onClick={()=>empezar("Banderas")}>Banderas</button>
                    <button onClick={()=>empezar("Animales")}>Animales</button>
                    <button onClick={()=>empezar("Comida")}>Comida</button>
                </div>
                : fichas.length !== 0 ?
                 
                <div className="contenedorFichas" >  
                    {fichas.map((ficha, index) => (
                        <div className='ficha' key={index}>
                            <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} />                            
                        </div>
                    ))}

                </div>  
                : <h3>Hubo un error</h3>

                    

                

                

                
           
            }

        </div>
    )
}

