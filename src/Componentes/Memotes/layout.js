import React from 'react'

import './style.css'
/* import Ganaste from './Ganaste/code' */

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
    cantParejas,
    reiniciar,
    nuevoJuego
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

                                <div className='ficha' key={index} onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
                                   
                                    <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />                            

                                    
                                </div>
                            ))}
                        </div>
                    :   <div className="contenedorGanaste">
                            <h3 className='tituloGanaste'>Ganaste!!!</h3>
                            <div className='contenedorBotonesGanaste'>
                                <button className='btn btn-success botonGanaste' >Reiniciar</button>
                                <button className='btn btn-success botonGanaste' onClick={nuevoJuego()} >Nuevo Juego</button>
                            </div>
                        </div>
                 
                : <h3>Hubo un error</h3>

                    

                

                

                
           
            }

        </div>
    )
}

