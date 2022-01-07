import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { sumaContInt, pararReloj, getDificultad, setGano, getFichas,  getJugadores, getIndiceActivo, setMultijugador, setIndiceActivo } from "../../MemotestSlice";

import Ficha from "./Ficha/Ficha";

import './Tablero.css'


const Tablero = ({opacidad, podesJugar, setPodesJugar}) => {

    const dispatch = useDispatch()

    const dife = useSelector(getDificultad)
    const fichas = useSelector(getFichas)
    const jugadores = useSelector(getJugadores)
    const indiceJugador = useSelector(getIndiceActivo)


    const opaca = "opaca"
    const transparente = "transparente"
    const descubierta =  "descubierta"
    const tiempoEntreTurnos = 500

    
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
                    setPrimeraVolteada(img)
                    setCantVolteadas(cantVolteadas+1)
                }else{
                    setSegundaVolteada(img)
                    setCantVolteadas(cantVolteadas+1)
                    setPodesJugar(false)
                }
                //event.target.className += " animacionGiro"
                img.className = opaca
            }
        }
    }
    

    const cambioDeTurno = () => {
        dispatch(setMultijugador({
            ...jugadores[indiceJugador],
            esMiTurno: false
        }))
        dispatch(setIndiceActivo(indiceJugador+1 === jugadores.length ? 0 : indiceJugador+1))
        dispatch(setMultijugador({
            ...jugadores[indiceJugador+1 === jugadores.length ? 0 : indiceJugador+1],
            esMiTurno: true
        }))
    }



    /* ----------- HACE LA COMPARACION ENTRA LAS FICHAS VOLTEADAS */
    useEffect(() => {
        if(cantVolteadas === 2){
            setTimeout( () => {
                if(primeraVolteada.alt !== segundaVolteada.alt){
                    primeraVolteada.className = transparente
                    segundaVolteada.className = transparente
                    cambioDeTurno()
                }else{
                    setCantCoincidencias(cantCoincidencias+1)
                    primeraVolteada.className = descubierta
                    segundaVolteada.className = descubierta
                    dispatch(setMultijugador({
                        ...jugadores[indiceJugador],
                        cantAciertos: jugadores[indiceJugador].cantAciertos +1
                    }))
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
            dispatch(setGano(true))
            dispatch(pararReloj())
        }
    }, [cantCoincidencias])


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