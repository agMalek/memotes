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
            
            
           {/*  <h1 className='tituloMemotes mx-4'>Memotest</h1>  */}
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
                                {/* <button className='btn btn-outline-primary boton' onClick={()=>setNivel("Easy")}>Easy</button>
                                <button className='btn btn-outline-primary boton' onClick={()=>setNivel("Medium")}>Medium</button>
                                <button className='btn btn-outline-primary boton' onClick={()=>setNivel("Hard")}>Hard</button> */}
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
                                {/*  <div className='border border-warning'>
                                    <button className='btn btn-outline-primary boton' onClick={()=>setTema("Banderas")}>Banderas</button>
                                    <button className='btn btn-outline-primary boton' onClick={()=>setTema("Animales")}>Animales</button>
                                    <button className='btn btn-outline-primary boton' onClick={()=>setTema("Comidas")}>Comida</button>
                                </div> */}
                                <select className='selectTema'>
                                    <option value="Banderas" /* onChange={(SyntheticEvent) => inputChange(SyntheticEvent)} */>Banderas</option>
                                    <option value="Animales" /* onChange={(SyntheticEvent) => inputChange(SyntheticEvent)} */>Animales</option>
                                    <option value="Comidas"  /* onChange={(SyntheticEvent) => inputChange(SyntheticEvent)} */>Comidas</option>
                                </select>
                            </div>
                            <div>
                                <button className='btn btn-outline-primary my-4 w-100'>Iniciar</button>
                            </div>
                        </form>
                    </div>
                    
                
                

                : fichas.length !== 0 
                ? cantCoincidencias < cantParejas 
                    ?   <div className='d-flex justify-content-center'>
                            <div className='d-flex contenedorBotonesEnPartida justify-content-center align-items-center'>
                                <h1 className='tituloMemotes'>Memotest</h1>
                                <button className='btn btn-primary botonEnPartida' onClick={() => reiniciar()}>Reiniciar</button>
                                <button className='btn btn-primary botonEnPartida' onClick={() => nuevoJuego()} >Nuevo Juego</button>
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

