import React, {useState, useEffect} from 'react'

import {Banderas, Animales, Comidas} from '../../utils/fichas'
import {Layout} from "./layout"



const Memotes = () => {

    const tiempoNivelA = 8000
    const tiempoNivelB = 6000
    const tiempoNivelC = 4000

    const cantParejasNivelA = 10
    const cantParejasNivelB = 15
    const cantParejasNivelC = 20
    
    const [juegoEmpezado, setJuegoEmpezado] = useState(false)
    const [tiempo, setTiempo] = useState()
    const [cantParejas, setCantParejas] = useState()
    const [tema, setTema] = useState("")
    const [mostrarFichas, setMostrarFichas] = useState(true)
    const [fichas, setFichas] = useState([])
    
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
        while(array.length<cantParejas*2){
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
                setMostrarFichas(false)
            }, tiempo)
        }
    }, [tema])

    
    


    
    
    


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
            mostrarFichas={mostrarFichas}
        
        />
    )

    
}



export default Memotes