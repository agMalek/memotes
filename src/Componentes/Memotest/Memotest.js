import {useState, useEffect} from 'react'

import {Banderas, Animales, Comidas} from '../../utils/fichas'
import './Memotest.css'
import Spinner from './Spinner/Spinner'
import VistaJuego from './VistaJuego/VistaJuego'
import VistaCondiciones from './VistaCondiciones/VistaCondiciones'
import Home from './Home/Home'
import Ganaste from './Ganaste/Ganaste'
import Error from './Error/Error'



const Memotes = () => {

    const tiempoNivelA = 1000
    const tiempoNivelB = 5000
    const tiempoNivelC = 3000

    const tiempoEntreTurnos = 1500

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
    


    /* ----------  SETEA EN DIFICULTAD LOS TIEMPOS Y CONDICIONES QUE CORRESPONDAN  ------------ */
    /* se usa cunado elije la dificultad en el form de condiciones */
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

    /* -------------- SETEA EL TEMA -------------- */
    /* se usa cuando le doy al boton iniciar en el form de condiciones */
    const iniciarJuego = (e) =>{
        e.preventDefault()
        if(dificultad.tiempo === undefined || dificultad.cantParejas === undefined){
            alert("Debes seleccionar un nivel de dificultad")
        }else{
            setTema(e.target.querySelector("select").value)
        }
    }

    /* -------------- PREPARA EL JUEGO TENEINDO EN CUANTA LAS VARISNTES DE DIFICULTAD Y TEMA ------------- */
    /* se ejecuta en el useEffect caundo el tema sea elejido, al darle boton de inicio en el form de cond. y al darle a reiniciar sea en ganaste o en partida */
    const prepararJuego = () => {
        let arrayDeFichas = dameArrayDeFichas()
        arrayDeFichas = arrayDeFichas.slice(0, dificultad.cantParejas)
        arrayDeFichas = armarParejas(arrayDeFichas)
        arrayDeFichas = mezclarFichas(arrayDeFichas)
        setFichas(arrayDeFichas)   
    }

    /* ---------  SELECCIONO EL ARRAY A USAR SEGUN EL TEMA ELEGIDO -----------  */
    /* en prepararJuego */
    const dameArrayDeFichas = () => {
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
    
    /* ---------  DUPLICA EL ARRAY, PARA QUE SEA EN PAREJAS ---------- */
    /* en prepararJuego */
    const armarParejas = (array) =>{
        array.map(ficha => {
            array.push({...ficha})
        })
        return array
    }
     
    /* ---------- UBICA EN EL ORDEN DESORDENADO LAS FICHAS ------------- */
    /* en prepararJuego */
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

    /* ------------ DEFINE EL DESORDEN DE LAS FICHAS ------------ */
    /* en mezclarFichas */
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
    
    
    /* ------- LIMPIA VALORES Y PREPARA UN NUEVO JUEGO CON LAS MISMAS CONDICIONES DE DIFICULTAD Y TEMA ---------- */
    /* en VistaDeJuego y en Ganaste */
    const reiniciar = () => {
        limpiarValores()
        prepararJuego()
    }
    
    /* -------- lIMPIA VALORES Y CONDICIONES DE DIFICULTAD Y TEMA, PARA EMPEZAR UN NUEVO TOTAL, ME REDIRECCIONA AL FORM DE COND. ------- */
    /* en VistaDeJuego y en Ganaste */
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

    /* -------- PONE VALORES A LO INICIAL ---------- */
    /* en reiniciar y en nuevoJuego */
    const limpiarValores = () =>{
        setCantCoincidencias(0)
        setCargando(true)
        setPodesJugar(false)
        setOpacidad(opaca)
        setCantVolteadas(0)
        setPrimeraVolteada(undefined)
        setBotonInhabilitado(true)
    }
    
    
    /*  --------- MUESTRA LA IMAGEN DE LA FICHA, Y LA GUARDA PARA DESPUES COMPARARLA ----------- */
    /* cuando haga click en la ficha */
    const darVuelta = (event) =>{
        if(podesJugar){
            let img = event.target.querySelector('img')
            if(img !== null && img.className !== opaca && img.className !== descubierta){
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
    
    
    /* CUANDO DE CLICK EN EL BOTON INICIAR DEL FORM DE CONDICIONES */
    useEffect(() => {
        if(tema !== ""){
            prepararJuego()
            setJuegoEmpezado(true)
        }
    }, [tema])


    /* --------- PARA SACAR EL SPINNER DESPUES DE UN SEGUNDO ----------- */
    useEffect(() =>{
        if(fichas.length > 0){
            setTimeout(() => {
                setCargando(false)
            }, 1000)
        }
    }, [fichas])
    
    /* ------------- OCULTA LAS IMAGENES Y HABILITA LOS BOTONES -----------*/
    useEffect(() =>{
        if(!cargando){
            setContenedor(window.document.querySelector(".contenedorFichas"))
            setTimeout( () => {
                setOpacidad(transparente)
                setPodesJugar(true)
                setBotonInhabilitado(false)
            }, dificultad.tiempo)
        }
    }, [cargando])
    

    /* PARA DEFINIR EL ANCHO DEL TABLERO, SEGUN LAS CANT DE FICHAS */
    useEffect(() =>{
        if(contenedor !== undefined){
            contenedor.style.width = widthContenedor
        }
    }, [contenedor])


    /* ----------- HACE LA COMPARACION ENTRA LAS FICHAS VOLTEADAS */
    useEffect(() => {
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
                    <Home 
                        setInicioJuego={setInicioJuego}
                    />
            
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

                    :   <Ganaste
                            reiniciar={reiniciar}
                            nuevoJuego={nuevoJuego}
                        />
                 
                : <Error/>
           
            }
        </div>
    )
}


export default Memotes