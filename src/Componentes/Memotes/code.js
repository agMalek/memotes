import React, {useState, useEffect} from 'react'

import {Banderas, Animales, Comidas} from '../../utils/fichas'
import {Layout} from "./layout"



const Memotes = () => {

    const [juegoEmpezado, setJuegoEmpezado] = useState(false)
    const [tiempo, setTiempo] = useState()
    const [cantParejas, setCantParejas] = useState()
    const [tema, setTema] = useState("")
    const [fichas, setFichas] = useState([])

    const empezar = (tematica) => {
        setTema(tematica)
        switch(tematica){
            case "Banderas":
                setFichas(Banderas.slice(0, cantParejas))
                break;
            case "Animales":
                setFichas(Animales.slice(0, cantParejas))
                break;
            case "Comida":
                setFichas(Comidas.slice(0, cantParejas))
                break;
            default:
                break;
        }
    }
    
    const setNivel = (nivel) => {
        switch(nivel){
            case "Easy":
                setTiempo(5000)
                setCantParejas(10)
                console.log(nivel)
                break;
            case "Medium":
                setTiempo(3000)
                setCantParejas(15)
                console.log(nivel)
                break;
            case "Hard":
                setTiempo(2000)
                setCantParejas(20)
                console.log(nivel)
                break;
            default:
                break;
        }

    } 


    return(
        <Layout 
            juegoEmpezado={juegoEmpezado}
            setJuegoEmpezado={setJuegoEmpezado}
            setNivel={setNivel}
           /*  nivel={nivel} */
            setTema={setTema}
            tema={tema}
            tiempo={tiempo}
            fichas={fichas}
            empezar={empezar}
        
        
        />
    )

    
}



export default Memotes