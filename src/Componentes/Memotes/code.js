import React, {useState, useEffect} from 'react'

import {Banderas, Animales, Comidas} from '../../utils/fichas'
import {Layout} from "./layout"



const Memotes = () => {


    
    const [juegoEmpezado, setJuegoEmpezado] = useState(false)
    const [tiempo, setTiempo] = useState()
    const [cantParejas, setCantParejas] = useState()
    const [tema, setTema] = useState("")
    const [mostrarFichas, setMostrarFichas] = useState(true)
    const [fichas, setFichas] = useState([])
    

    const mezclarArray = (tamanio) =>{
        let array = []
        let numRandom
        while(array.length<tamanio){
            numRandom = (Math.floor(Math.random()*tamanio))
            if(!array.some(num => num === numRandom)){
                array.push(numRandom)
            }
        }
    }
    
    useEffect(() => {
        mezclarArray(20)
        if(tema !== ""){
            setTimeout( () => {
                console.log("paso por aca")
                setMostrarFichas(false)
            }, 10000)
        }
        else{
            console.log("paso por el else")
            console.log(tiempo)
        }
    }, [tema])

    
    const prepararJuego = (array) => {        
        array = array.slice(0, cantParejas)
        array = armarParejas(array)
        array = mezclarFichas(array)
        setFichas(array)
    }

    const armarParejas = (array) =>{
     /*    let id = 1 */
        array.map(ficha => {
            /* ficha.id=id */
            array.push({...ficha/* , id:id+cantParejas */})
           /*  id++ */
        })
        return array
    }
     
    const mezclarFichas = (array) => {
        let random = [4,11,7,1,5,19,0,13,2,15,3,18,12,8,10,14,16,6,17,9]
        let retorno = []
        let i = 0
        array.forEach(element => {
            retorno[random[i]] = element
            i++
        });
        return retorno
    }

    const empezar = (tematica) => {
        setTema(tematica)
        switch(tematica){
            case "Banderas":
                prepararJuego(Banderas)
                break;
            case "Animales":
                setFichas(Animales.slice(0, cantParejas))
                break;
            case "Comida":
                setFichas(Comidas.slice(0, cantParejas).concat(Comidas.slice(0, cantParejas)))
                break;
            default:
                break;
        }
    }
    
    const setNivel = (nivel) => {
        switch(nivel){
            case "Easy":
                console.log("--------")
                setTiempo(5000)
                console.log("--------")
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
            mostrarFichas={mostrarFichas}
        
        />
    )

    
}



export default Memotes