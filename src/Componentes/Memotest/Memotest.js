import {useState, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getDificultad, getTema, getGano, getFichas, setFichas, getJuegoEmpezado, getCargando, setCargando, getQuieroJugar, getModoJuego, getYaCargo } from './MemotestSlice'

import {Banderas, Animales, Comidas} from '../../utils/fichas'

import Home from './Home/Home'
import VistaCondiciones from './VistaCondiciones/VistaCondiciones'
import Spinner from './Spinner/Spinner'
import VistaJuego from './VistaJuego/VistaJuego'
import Ganaste from './Ganaste/Ganaste'
import Error from './Error/Error'

import './Memotest.css'
import ModoJuego from './ModoJuego/ModoJuego'
import CargaDeNombres from './CargaDeNombres/CargaDeNombres'

const Memotes = () => {

    const dispatch = useDispatch()

    const juegoEmpezado = useSelector(getJuegoEmpezado)
    const fichas = useSelector(getFichas)
    const dife = useSelector(getDificultad)
    const tema = useSelector(getTema)
    const cargando = useSelector(getCargando)
    const gano = useSelector(getGano)
    const quieroJugar = useSelector(getQuieroJugar)
    const modoJuego = useSelector(getModoJuego)
    const yaCargo = useSelector(getYaCargo)



    /* -------------- PREPARA EL JUEGO TENEINDO EN CUANTA LAS VARISNTES DE DIFICULTAD Y TEMA ------------- */
    /* se ejecuta en el useEffect caundo el tema sea elejido, al darle boton de inicio en el form de cond. y al darle a reiniciar sea en ganaste o en partida */
    const prepararJuego = () => {
        let arrayDeFichas = dameArrayDeFichas()
        arrayDeFichas = arrayDeFichas.slice(0, dife.cantParejas)
        arrayDeFichas = armarParejas(arrayDeFichas)
        arrayDeFichas = mezclarFichas(arrayDeFichas)
        dispatch(setFichas(arrayDeFichas))
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
        while(array.length < dife.cantParejas*2){
            numRandom = (Math.floor(Math.random()*dife.cantParejas*2))
            if(!array.some(num => num === numRandom)){
                array.push(numRandom)
            }
        }
        return array
    }
    

    
    
    /* --------- PARA SACAR EL SPINNER DESPUES DE UN SEGUNDO ----------- */
    useEffect(() =>{
        if(fichas.length > 0){
            setTimeout(() => {
                dispatch(setCargando(false))
            }, 1000)
        }
    }, [fichas])



    return(
        <div className='contenedor'> 
            {
                !quieroJugar ? 
                    <Home 
                        /* setInicioJuego={setInicioJuego} */
                    />
            
                : modoJuego === "" ?
                    <ModoJuego/>
                
                : modoJuego === "multi" && !yaCargo? 

                    <CargaDeNombres/>
                
                : !juegoEmpezado ?
            
                    <VistaCondiciones
                        prepararJuego={prepararJuego}
                    />
    
                : cargando ? 
        
                    <Spinner />

                : fichas.length !== 0 
                ? !gano

                    ?   <VistaJuego 
                            prepararJuego={prepararJuego}
                        />

                    :   <Ganaste
                            prepararJuego={prepararJuego}
                        />
                 
                : <Error/>
           
            }
        </div>
    )
}


export default Memotes