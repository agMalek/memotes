import React from 'react'

import './style.css'

export function Layout ({
    juegoEmpezado,
    setJuegoEmpezado,
    setNivel,
    setTema,
    tema,
    tiempo,
    fichas,
    opacidad,
    darVuelta,
    cantCoincidencias,
    cantParejas
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
                    <button onClick={()=>setTema("Banderas")}>Banderas</button>
                    <button onClick={()=>setTema("Animales")}>Animales</button>
                    <button onClick={()=>setTema("Comida")}>Comida</button>
                </div>
                
                : fichas.length !== 0 
                ? cantCoincidencias < cantParejas 
                    ?   <div className="contenedorFichas" >  
                            {fichas.map((ficha, index) => (
                                <div className='ficha' key={index}>
                                    <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} />                            
                                </div>
                            ))}
                        </div>
                    : <h3>Ganaste</h3>  
                 
                : <h3>Hubo un error</h3>

                    

                

                

                
           
            }

        </div>
    )
}

