import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sumaContInt, pararReloj } from "../../../../app/slice/infoPartidaSlice";
import { dif } from "../../../../app/slice/setCondicionesSlice";
import { setGano } from "../../../../app/slice/enJuegoSlice";

import Ficha from "./Ficha/Ficha";
import './Tablero.css'



const Tablero = ({fichas, opacidad, podesJugar, setPodesJugar}) => {


    const dispatch = useDispatch()
    const dife = useSelector(dif)


    const opaca = "opaca"
    const transparente = "transparente"
    const descubierta =  "descubierta"

    const tiempoEntreTurnos = 500

    const [cantVolteadas, setCantVolteadas] = useState(0)
    const [cantCoincidencias, setCantCoincidencias] = useState(0)
    const [primeraVolteada, setPrimeraVolteada] = useState()
    const [segundaVolteada, setSegundaVolteada] = useState()
   /*  const [gano, setGano] = useState(false) */

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
    
    
    /* --------- CUANDO DE CLICK EN EL BOTON INICIAR DEL FORM DE CONDICIONES -------- */
    /* useEffect(() => {
        if(tema !== ""){
            prepararJuego()
            setJuegoEmpezado(true)
        }
    }, [tema]) */



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
            dispatch(sumaContInt())
            /* setContadorIntentos(contadorIntentos+1) */
            setPrimeraVolteada(undefined)
            setSegundaVolteada(undefined)
            setCantVolteadas(0)
        }
    }, [cantVolteadas])


    useEffect(() =>{
        if(cantCoincidencias === dife.cantParejas){
            dispatch(setGano(true))
            dispatch(pararReloj())
            /* setIniciarCronometro(false) */
        }
    }, [cantCoincidencias])



    

    /* useEffect(()=>{
        setPrimeraVolteada(undefined)
        setCantVolteadas(0)
    },[]) */

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