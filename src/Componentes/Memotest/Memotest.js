import React, {useState, useEffect} from 'react'

import {Banderas, Animales, Comidas} from '../../utils/fichas'
import './Memotest.css'
import Spinner from './Spinner/Spinner'
import VistaJuego from './VistaJuego/VistaJuego'
import VistaCondiciones from './VistaCondiciones/VistaCondiciones'
import Home from './Home/Home'



const Memotes = () => {

    const tiempoNivelA = 1000
    const tiempoNivelB = 5000
    const tiempoNivelC = 3000

    const tiempoEntreTurnos = 500

    const cantParejasNivelA = 1
    const cantParejasNivelB = 15
    const cantParejasNivelC = 20

    const opaca = "opaca"
    const transparente = "transparente"
    const descubierta =  "descubierta"
    

    const [juegoEmpezado, setJuegoEmpezado] = useState(false)
    const [inicioJuego, setInicioJuego] = useState(false)
    const [dificultad, setDificultad] = useState({tiempo: undefined, cantParejas:undefined})
    const [tema, setTema] = useState("")
    const [fichas, setFichas] = useState([])
    const [opacidad, setOpacidad] = useState(opaca)
    const [cantVolteadas, setCantVolteadas] = useState(0)
    const [cantCoincidencias, setCantCoincidencias] = useState(0)
    const [primeraVolteada, setPrimeraVolteada] = useState()
    const [segundaVolteada, setSegundaVolteada] = useState()
    const [podesJugar, setPodesJugar] = useState(false)
    const [contenedor, setContenedor] = useState()
    const [widthContenedor, setWidthContenedor] = useState("")
    const [cargando, setCargando] = useState(true)
    const [botonInhabilitado, setBotonInhabilitado] = useState(true)
    

    const setNivel = (nivel) => {
        switch(nivel){
            case "Easy":
                setDificultad({
                    tiempo: tiempoNivelA,
                    cantParejas: cantParejasNivelA
                })
                setWidthContenedor("40%")
                break;
            case "Medium":
                setDificultad({
                    tiempo: tiempoNivelB,
                    cantParejas: cantParejasNivelB
                })
                setWidthContenedor("65%")
                break;
            case "Hard":
                setDificultad({
                    tiempo: tiempoNivelC,
                    cantParejas: cantParejasNivelC
                })
                setWidthContenedor("65%")
                break;
            default:
                break;
        }

    }

    
    
    
    const iniciarJuego = (e) =>{
        e.preventDefault()
        if(dificultad.tiempo === undefined || dificultad.cantParejas === undefined){
            alert("Debes seleccionar un nivel de dificultad")
        }else{
            setTema(e.target.querySelector("select").value)
        }
    }

    const prepararJuego = () => {
        let arrayDeFichas = dameArrayDeFichas()
        arrayDeFichas = arrayDeFichas.slice(0, dificultad.cantParejas)
        arrayDeFichas = armarParejas(arrayDeFichas)
        arrayDeFichas = mezclarFichas(arrayDeFichas)
        setFichas(arrayDeFichas)   
    }

    const dameArrayDeFichas = () => {
        console.log(tema)
        let retorno = []
        switch(tema){
            case "Banderas":
                retorno = Banderas
                break;
                case "Animales":
                    retorno = Animales
                    break;
            case "Comidas":
                retorno = Comidas
                break;
            default:
                break;
        }
        return retorno
    }
    
    const armarParejas = (array) =>{
        array.map(ficha => {
            array.push({...ficha})
        })
        return array
    }
     
    const mezclarFichas = (array) => {
        let random = mezclarArray()
        let retorno = []
        let i = 0
        array.forEach(element => {
            retorno[random[i]] = element
            i++
        });
        return retorno
    }

    
    const mezclarArray = () =>{
        let array = []
        let numRandom
        while(array.length < dificultad.cantParejas*2){
            numRandom = (Math.floor(Math.random()*dificultad.cantParejas*2))
            if(!array.some(num => num === numRandom)){
                array.push(numRandom)
            }
        }
        return array
    }
    
    
    const reiniciar = () => {
        limpiarValores()
        prepararJuego()
    }
    
    const nuevoJuego = () => { 
        setDificultad({
            tiempo: undefined,
            cantParejas: undefined
        })
        setTema("")
        setFichas([])
        setJuegoEmpezado(false)
        limpiarValores()
    }

    const limpiarValores = () =>{
        setCantCoincidencias(0)
        setCargando(true)
        setOpacidad(opaca)
        setBotonInhabilitado(true)
    }
    
    
    const darVuelta = (event) =>{
        if(podesJugar){
            let img = event.target.querySelector('img')
            if(img !== null){
                if(primeraVolteada === undefined){
                    setPrimeraVolteada(img)
                    setCantVolteadas(cantVolteadas+1)
                }else{
                    setSegundaVolteada(img)
                    setCantVolteadas(cantVolteadas+1)
                    setPodesJugar(false)
                }
                /* event.target.className += " animacionGiro" */
                img.className = opaca
            }
        }
    }
    
    
    
    useEffect(() => {
        console.log(tema)
        if(tema !== ""){
            prepararJuego()
            setJuegoEmpezado(true)
        }
    }, [tema])

    useEffect(() =>{
        if(fichas.length > 0){
            setTimeout(() => {
                setCargando(false)
            }, 1000)
        }
    }, [fichas])
    
    useEffect(() =>{
        console.log("cambio el cargando")
        if(!cargando){
            setContenedor(window.document.querySelector(".contenedorFichas"))
            setTimeout( () => {
                setOpacidad(transparente)
                setPodesJugar(true)
                setBotonInhabilitado(false)
                console.log("pasoooo")
            }, dificultad.tiempo)
        }
    }, [cargando])
    
    useEffect(() =>{
        if(contenedor !== undefined){
            contenedor.style.width = widthContenedor
        }
    }, [contenedor])


    useEffect(() => {
        console.log(Banderas)
        if(cantVolteadas === 2){
            setTimeout( () => {
                if(primeraVolteada.alt !== segundaVolteada.alt){
                    primeraVolteada.className = transparente
                    segundaVolteada.className = transparente                
                }else{
                    setCantCoincidencias(cantCoincidencias+1)
                    primeraVolteada.className = descubierta
                    segundaVolteada.className = descubierta 
                }
                setPodesJugar(true)
            }, tiempoEntreTurnos)
            setPrimeraVolteada(undefined)
            setSegundaVolteada(undefined)
            setCantVolteadas(0)
        }
    }, [cantVolteadas])



    return(
        <div className='contenedor'> 
            {
                !inicioJuego ? 
                <Home setInicioJuego={setInicioJuego}/>
                

                : !juegoEmpezado ?
                
                    
                    <VistaCondiciones
                        iniciarJuego={iniciarJuego}
                        setNivel={setNivel}
                    />
                

                : cargando ? 
                    <Spinner />
                : fichas.length !== 0 
                ? cantCoincidencias < dificultad.cantParejas 
                    ?   <VistaJuego 
                            botonInhabilitado={botonInhabilitado} 
                            reiniciar={reiniciar}
                            nuevoJuego={nuevoJuego}
                            fichas={fichas}
                            darVuelta={darVuelta}
                            opacidad={opacidad}
                        />
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


    /* return(
        <Layout 
            inicioJuego={inicioJuego}
            setInicioJuego={setInicioJuego}
            juegoEmpezado={juegoEmpezado}
            iniciarJuego={iniciarJuego}
            setNivel={setNivel}
             banderas={Banderas}
            animales={Animales}
            comidas={Comidas}
            cargando={cargando}
            cantCoincidencias={cantCoincidencias}
            cantParejas={dificultad.cantParejas}
            botonInhabilitado={botonInhabilitado}
            reiniciar={reiniciar}
            nuevoJuego={nuevoJuego}
            fichas={fichas}
            opacidad={opacidad}
            darVuelta={darVuelta}
        />
    ) */

export default Memotes