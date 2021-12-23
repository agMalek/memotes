import React, {useState, useEffect} from 'react'

import {Banderas, Animales, Comidas} from '../../utils/fichas'
import {Layout} from "./layout"



const Memotes = () => {

    const tiempoNivelA = 8000
    const tiempoNivelB = 6000
    const tiempoNivelC = 2000

    const cantParejasNivelA = 10
    const cantParejasNivelB = 15
    const cantParejasNivelC = 20

    

    const [juegoEmpezado, setJuegoEmpezado] = useState(false)
    const [tiempo, setTiempo] = useState()
    const [cantParejas, setCantParejas] = useState()
    const [tema, setTema] = useState("")
    const [fichas, setFichas] = useState([])
    const [opacidad, setOpacidad] = useState("opaca")
    const [cantVolteadas, setCantVolteadas] = useState(0)
    const [primeraVolteada, setPrimeraVolteada] = useState()
    const [segundaVolteada, setSegundaVolteada] = useState()
    const [podesEmpezar, setPodesEmpezar] = useState(false)
    
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


    const empezar = (tematica) => {
        setTema(tematica)
        switch(tematica){
            case "Banderas":
                prepararJuego(Banderas)
                break;
            case "Animales":
                prepararJuego(Animales)
                break;
            case "Comida":
                prepararJuego(Comidas)
                break;
            default:
                break;
        }
    }

    
    const prepararJuego = (array) => {        
        array = array.slice(0, cantParejas)
        array = armarParejas(array)
        array = mezclarFichas(array)
        setFichas(array)
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
        if(tema !== ""){
            setTimeout( () => {
                setOpacidad("transparente")
                setPodesEmpezar(true)
            }, tiempo)
        }
    }, [tema])

    
    const darVuelta = (event) =>{
        if(podesEmpezar){
            if(primeraVolteada === undefined){
                setPrimeraVolteada(event.target)
                setCantVolteadas(cantVolteadas+1)
    
            }else if(event.target.className !== "opaca"){
                setSegundaVolteada(event.target)
                setCantVolteadas(cantVolteadas+1)
            }
            event.target.className = "opaca"
        }
    }

    useEffect(() => {

        console.log(cantVolteadas)
        console.log(primeraVolteada)
        console.log(segundaVolteada)
        if(cantVolteadas === 2){
            
            setTimeout( () => {
                primeraVolteada.className="transparente"
                segundaVolteada.className="transparente"
            }, 1000)
            setPrimeraVolteada(undefined)
            setSegundaVolteada(undefined)
            setCantVolteadas(0)
        }
    }, [cantVolteadas])
    
    


    
        
    


    return(
        <Layout 
            juegoEmpezado={juegoEmpezado}
            setJuegoEmpezado={setJuegoEmpezado}
            setNivel={setNivel}
            setTema={setTema}
            tema={tema}
            tiempo={tiempo}
            fichas={fichas}
            empezar={empezar}
            opacidad={opacidad}
            setOpacidad={setOpacidad}
            darVuelta={darVuelta}
        />
    )

    
}



export default Memotes