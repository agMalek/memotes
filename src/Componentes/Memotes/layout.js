import React from 'react'

import './style.css'
/* import Ganaste from './Ganaste/code' */

export function Layout ({
    inicioJuego,
    setInicioJuego,
    juegoEmpezado,
    iniciarJuego,
    setNivel,
    /* banderas,
    animales,
    comidas, */
    cargando,
    cantCoincidencias,
    cantParejas,
    botonInhabilitado,
    reiniciar,
    nuevoJuego,
    fichas,
    opacidad,
    darVuelta,
}){
    return(
        <div className='contenedor'>
            
            
            {
                !inicioJuego ? 
                <div className='d-flex align-items-center'>
                    <h1 className='tituloMemotes mx-4'>Memotest</h1> 
                    <button className='btn btn-outline-primary boton' onClick={() => setInicioJuego(true)}>EMPEZAR JUEGO</button>
                </div>
                

                : !juegoEmpezado ?
                
                    <div className=''>
                        <h1 className='tituloMemotes'>Memotest</h1> 
                        <form className='contenedorCondiciones' onSubmit={(SyntheticEvent) => iniciarJuego(SyntheticEvent)}>
                            <div className='contenedorDificultad '>
                                <div className='mx-3'>
                                    <label className='labelDificultad' htmlFor="Easy">Easy</label>
                                    <input className='inputDificultad' type="radio" id="Easy" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                                </div>
                                <div  className='mx-3'>
                                    <label className='labelDificultad' htmlFor="Medium">Medium</label>
                                    <input className='inputDificultad' type="radio" id="Medium" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                                </div>
                                <div  className='mx-3'>
                                    <label className='labelDificultad' htmlFor="Hard">Hard</label>
                                    <input className='inputDificultad' type="radio" id="Hard" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                                </div>
                            </div>
                            <div className='contenedorTemas'>
                                
                                <select className='selectTema'>
                                    <option value="Banderas">Banderas</option>
                                    <option value="Animales">Animales</option>
                                    <option value="Comidas">Comidas</option>
                                </select>
                            </div>
                            <div>
                                <button className='btn btn-outline-primary my-4 w-100'>Iniciar</button>
                            </div>
                        </form>
                    </div>
                    
                
                

                : cargando ? 
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                : fichas.length !== 0 
                ? cantCoincidencias < cantParejas 
                    ?   <div className='d-flex justify-content-center'>
                            <div className='d-flex contenedorBotonesEnPartida justify-content-center align-items-center'>
                                <h1 className='tituloMemotes'>Memotest</h1>
                                <button className='btn btn-primary botonEnPartida' disabled={botonInhabilitado} onClick={() => reiniciar()}>Reiniciar</button>
                                <button className='btn btn-primary botonEnPartida' disabled={botonInhabilitado} onClick={() => nuevoJuego()} >Nuevo Juego</button>
                            </div>
                            <div className="contenedorFichas" >
                                {fichas.map((ficha, index) => (
                                    <div className='ficha' key={index} onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
                                        <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />                            
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    :   <div className="contenedorGanaste">
                            <h3 className='tituloGanaste'>Ganaste!!!</h3>
                            <div className='contenedorBotonesGanaste w-100 my-4'>
                                <button className='btn btn-primary botonGanaste' onClick={() => reiniciar()}>Reiniciar</button>
                                <button className='btn btn-primary botonGanaste' onClick={() => nuevoJuego()} >Nuevo Juego</button>
                            </div>
                        </div>
                 
                : <h3>Hubo un error</h3>

                    

                

                

                
           
            }

        </div>
    )
}

