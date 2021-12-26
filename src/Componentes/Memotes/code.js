import React, {useState, useEffect} from 'react'

import {Banderas, Animales, Comidas} from '../../utils/fichas'
import {Layout} from "./layout"



const Memotes = () => {

    const tiempoNivelA = 1000
    const tiempoNivelB = 6000
    const tiempoNivelC = 122000

    const tiempoEntreTurnos = 500

    const cantParejasNivelA = 2
    const cantParejasNivelB = 15
    const cantParejasNivelC = 20

    const opaca = "opaca"
    const transparente = "transparente"
    const descubierta =  "descubierta"
    

    const [juegoEmpezado, setJuegoEmpezado] = useState(false)
    const [tiempo, setTiempo] = useState()
    const [cantParejas, setCantParejas] = useState()
    const [tema, setTema] = useState("")
    const [fichas, setFichas] = useState([])
    const [opacidad, setOpacidad] = useState(opaca)
    const [cantVolteadas, setCantVolteadas] = useState(0)
    const [primeraVolteada, setPrimeraVolteada] = useState()
    const [segundaVolteada, setSegundaVolteada] = useState()
    const [podesJugar, setPodesJugar] = useState(false)
    const [cantCoincidencias, setCantCoincidencias] = useState(0)
    
    const setNivel = (nivel) => {
        switch(nivel){
            case "Easy":
                setTiempo(tiempoNivelA)
                setCantParejas(cantParejasNivelA)
                break;
            case "Medium":
                setTiempo(tiempoNivelB)
                setCantParejas(cantParejasNivelB)
                break;
            case "Hard":
                setTiempo(tiempoNivelC)
                setCantParejas(cantParejasNivelC)
                break;
            default:
                break;
        }

    }

    const prepararJuego = () => {
        let arrayDeFichas = dameArrayDeFichas()
        arrayDeFichas = arrayDeFichas.slice(0, cantParejas)
        arrayDeFichas = armarParejas(arrayDeFichas)
        arrayDeFichas = mezclarFichas(arrayDeFichas)
        setFichas(arrayDeFichas)
    }

    const dameArrayDeFichas = () => {
        let retorno = []
        switch(tema){
            case "Banderas":
                retorno = Banderas
                break;
            case "Animales":
                retorno = Animales
                break;
            case "Comida":
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
        while(array.length < cantParejas*2){
            numRandom = (Math.floor(Math.random()*cantParejas*2))
            if(!array.some(num => num === numRandom)){
                array.push(numRandom)
            }
        }
        return array
    }
    

    useEffect(() => {
        console.log(tema)
        if(tema !== ""){
            prepararJuego()
            setTimeout( () => {
                setOpacidad(transparente)
                setPodesJugar(true)
            }, tiempo)
        }
    }, [tema])

    
    const darVuelta = (event) =>{
        if(podesJugar){
            let img = event.target.querySelector('img')
            if(img !== null){
                if(primeraVolteada === undefined){
                    setPrimeraVolteada(img)
                    setCantVolteadas(cantVolteadas+1)
                }else if(img.className !== opaca){
                    setSegundaVolteada(img)
                    setCantVolteadas(cantVolteadas+1)
                    setPodesJugar(false)
                }
                /* event.target.parentElement.className += " animacionGiro" */
                img.className = opaca
            }
        }
    }

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
    
    const reiniciar = () => {
        //prepararJuego()
    }

    const nuevoJuego = () => {
       /*  setTema("") */
    }

    return(
        <Layout 
            juegoEmpezado={juegoEmpezado}
            setJuegoEmpezado={setJuegoEmpezado}
            setNivel={setNivel}
            setTema={setTema}
            tema={tema}
            tiempo={tiempo}
            fichas={fichas}
            opacidad={opacidad}
            darVuelta={darVuelta}
            cantCoincidencias={cantCoincidencias}
            cantParejas={cantParejas}
            reiniciar={reiniciar}
            nuevoJuego={nuevoJuego}
        />
    )

    
}



export default Memotes