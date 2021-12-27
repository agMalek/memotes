import React from 'react'

import './style.css'
/* import Ganaste from './Ganaste/code' */

export function Layout ({
    juegoEmpezado,
    setInicioJuego,
    setNivel,
    setTema,
    banderas,
    animales,
    comidas,
    tema,
    tiempo,
    fichas,
    opacidad,
    darVuelta,
    cantCoincidencias,
    cantParejas,
    reiniciar,
    nuevoJuego,
    setTiempo,
    inicioJuego,
    iniciarJuego
}){
    return(
        <div className='contenedor'>
            
            
            {
                !inicioJuego ? 
                <button className='btn btn-outline-primary boton' onClick={() => setInicioJuego(true)}>EMPEZAR JUEGO</button>
                

                : !juegoEmpezado ?
                
                    <form className='contenedorCondiciones' onSubmit={(SyntheticEvent) => iniciarJuego(SyntheticEvent)}>
                        <div className='border border-danger text-white'>
                            {/* <button className='btn btn-outline-primary boton' onClick={()=>setNivel("Easy")}>Easy</button>
                            <button className='btn btn-outline-primary boton' onClick={()=>setNivel("Medium")}>Medium</button>
                            <button className='btn btn-outline-primary boton' onClick={()=>setNivel("Hard")}>Hard</button> */}
                            <div>
                                <label htmlFor="Easy">Easy</label>
                                <input type="radio" id="Easy" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                            </div>
                            <div>
                                <label htmlFor="Medium">Medium</label>
                                <input type="radio" id="Medium" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                            </div>
                            <div>
                                <label htmlFor="Hard">Hard</label>
                                <input type="radio" id="Hard" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                            </div>
                        </div>
                        <div className='border border-danger contenedorBotonesSeccionTemas'>
                            {/*  <div className='border border-warning'>
                                <button className='btn btn-outline-primary boton' onClick={()=>setTema("Banderas")}>Banderas</button>
                                <button className='btn btn-outline-primary boton' onClick={()=>setTema("Animales")}>Animales</button>
                                <button className='btn btn-outline-primary boton' onClick={()=>setTema("Comidas")}>Comida</button>
                            </div> */}
                            <select className='border border-warning'>
                                <option value="Banderas" /* onChange={(SyntheticEvent) => inputChange(SyntheticEvent)} */>Banderas</option>
                                <option value="Animales" /* onChange={(SyntheticEvent) => inputChange(SyntheticEvent)} */>Animales</option>
                                <option value="Comidas"  /* onChange={(SyntheticEvent) => inputChange(SyntheticEvent)} */>Comidas</option>
                            </select>
                        </div>
                        <div>
                            <button>Iniciar</button>
                        </div>
                    </form>
                
                

                : fichas.length !== 0 
                ? cantCoincidencias < cantParejas 
                    ?   <div  className='border border-danger'>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-success botonGanaste' onClick={() => reiniciar()}>Reiniciar</button>
                                <button className='btn btn-success botonGanaste' onClick={() => nuevoJuego()} >Nuevo Juego</button>
                            </div>
                            <div className="contenedorFichas border border-info" >
                                {fichas.map((ficha, index) => (
                                    <div className='ficha' key={index} onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
                                        <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />                            
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    :   <div className="contenedorGanaste">
                            <h3 className='tituloGanaste'>Ganaste!!!</h3>
                            <div className='contenedorBotonesGanaste'>
                                <button className='btn btn-outline-primary botonGanaste' onClick={() => reiniciar()}>Reiniciar</button>
                                <button className='btn btn-outline-primary botonGanaste' onClick={() => nuevoJuego()} >Nuevo Juego</button>
                            </div>
                        </div>
                 
                : <h3>Hubo un error</h3>

                    

                

                

                
           
            }

        </div>
    )
}

