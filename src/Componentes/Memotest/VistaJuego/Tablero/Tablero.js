import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { sumaContInt, pararReloj, getDificultad, setGano, getFichas,  getJugadores, getIndiceActivo, setMultijugador, setIndiceActivo, getCantJugadores, getModoJuego } from "../../MemotestSlice";

import Ficha from "./Ficha/Ficha";

import './Tablero.css'


const Tablero = ({opacidad, podesJugar, setPodesJugar, setOpenSpinner, openSpinner}) => {

    const dispatch = useDispatch()

    const dife = useSelector(getDificultad)
    const fichas = useSelector(getFichas)
    const jugadores = useSelector(getJugadores)
    const indiceJugador = useSelector(getIndiceActivo)
    const cantJugadores = useSelector(getCantJugadores)
    const modoJuego = useSelector(getModoJuego)
    const dificultad = useSelector(getDificultad)


    const opaca = "opaca"
    const transparente = "transparente"
    const descubierta =  "descubierta"
    const tiempoEntreTurnos = 500

    let tamanioFicha = `tamanioFicha${dificultad.level}`
    let bordeBlanco = `ficha borde-white`
    let bordeColor =  modoJuego === "multi" ? `ficha borde-${jugadores[indiceJugador].color}` : bordeBlanco

    const [cantVolteadas, setCantVolteadas] = useState(0)
    const [cantCoincidencias, setCantCoincidencias] = useState(0)
    const [primeraVolteada, setPrimeraVolteada] = useState()
    const [segundaVolteada, setSegundaVolteada] = useState()


/*  --------- MUESTRA LA IMAGEN DE LA FICHA, Y LA GUARDA PARA DESPUES COMPARARLA ----------- */
    /* cuando haga click en la ficha */
    const darVuelta = (event) =>{
        if(podesJugar){
            let img = event.target.querySelector('img')
            if(img !== null && img.className !== opaca && img.className !== descubierta){
                if(primeraVolteada === undefined){
                    setPrimeraVolteada(event.target)
                    setCantVolteadas(cantVolteadas+1)
                }else{
                    setSegundaVolteada(event.target)
                    setCantVolteadas(cantVolteadas+1)
                    setPodesJugar(false)
                }
                event.target.className = `${bordeColor} ${tamanioFicha}`
                img.className = opaca
            }
        }
    }
    

    const cambioDeTurno = () => {
        dispatch(setMultijugador({
            ...jugadores[indiceJugador],
            esMiTurno: false
        }))
        dispatch(setIndiceActivo(indiceJugador+1 === cantJugadores ? 0 : indiceJugador+1))
        dispatch(setMultijugador({
            ...jugadores[indiceJugador+1 === cantJugadores ? 0 : indiceJugador+1],
            esMiTurno: true
        }))
    }



    /* ----------- HACE LA COMPARACION ENTRA LAS FICHAS VOLTEADAS */
    useEffect(() => {
        if(cantVolteadas === 2){
            setTimeout( () => {
                let img1 = primeraVolteada.querySelector('img')
                let img2 = segundaVolteada.querySelector('img')
                if(img1.alt !== img2.alt){
                    img1.className = transparente
                    img2.className = transparente
                    cambioDeTurno()
                    primeraVolteada.className = `${bordeBlanco} ${tamanioFicha}`
                    segundaVolteada.className = `${bordeBlanco} ${tamanioFicha}`
                }else{
                    setCantCoincidencias(cantCoincidencias+1)
                    img1.className = descubierta
                    img2.className = descubierta
                    if(jugadores.length > 0){
                        dispatch(setMultijugador({
                            ...jugadores[indiceJugador],
                            cantAciertos: jugadores[indiceJugador].cantAciertos +1
                        }))
                    }
                }
                setPodesJugar(true)
            }, tiempoEntreTurnos)
            dispatch(sumaContInt())
            setPrimeraVolteada(undefined)
            setSegundaVolteada(undefined)
            setCantVolteadas(0)
        }
    }, [cantVolteadas])


    useEffect(() =>{
        if(cantCoincidencias === dife.cantParejas){
            setOpenSpinner(true)
            dispatch(pararReloj())
        }
    }, [cantCoincidencias])

    useEffect(() => {
        if(openSpinner){
            let time = setTimeout(() => {
                dispatch(setGano(true))
            }, 1500);
            return () => clearTimeout(time)
        }
    },[openSpinner])

    return ( 
        <div className="contenedorFichas">
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