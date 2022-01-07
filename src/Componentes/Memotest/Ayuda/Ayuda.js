import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { getDificultad } from '../MemotestSlice';

import './Ayuda.css'

const Ayuda = ({contenedor, setPodesJugar}) => {

    const {ayuda: {tiempoEntreAyudas, cantAyudas, porcentaje, duracion}} = useSelector(getDificultad)

    const transparente = "transparente"
    const opaca = "opaca"

    const [empezoAyuda, setEmpezoAyuda] = useState(false)
    const [puedoPedir, setPuedoPedir] = useState(false)
    const [contAyudas, setContAyudas] = useState(cantAyudas)
    
    const [arrayFiltrado, setArrayFiltrado] = useState([])
    const [arrayIndices, setArrayIndices] = useState([])

    
    const ayudar = () => {
        let filtrado = dameImgTapadas()
        let indices = dameIndicesRandom(filtrado.length, Math.floor(filtrado.length*porcentaje))
        console.log(Math.floor(filtrado.length*porcentaje))
        setArrayFiltrado(filtrado)
        setArrayIndices(indices)
        girarFichas(indices, filtrado, opaca)
        setEmpezoAyuda(true)
        setPuedoPedir(false)
        setContAyudas(prev => prev -1)
        setPodesJugar(false)
    }
    
    const girarFichas = (indices, filtrado, clase) => {
        indices.map(i => (
            filtrado[i].className = clase
        ))
    }

    const dameIndicesRandom = (rango, cant) =>{
        let array = []
        let numRandom
        while(array.length < cant){
            numRandom = (Math.floor(Math.random()*rango))
            if(!array.some(num => num === numRandom)){
                array.push(numRandom)
            }
            console.log("intentando")
        }
        return array
    }


    useEffect(() => {
        let time;
        console.log(tiempoEntreAyudas, cantAyudas, porcentaje)
        if(empezoAyuda === true){
            time = setTimeout(()=> {
                girarFichas(arrayIndices, arrayFiltrado, transparente)  
                setEmpezoAyuda(false)
                setPodesJugar(true)
            }, duracion)
            return () => clearTimeout(time);
        }else{
            time = setTimeout(() => {
                setPuedoPedir(true)
            }, tiempoEntreAyudas)
            return () => clearTimeout(time);
        }
    }, [empezoAyuda])


    const dameImgTapadas = () => {       
        let filtrado = []
        let imgs = contenedor.querySelectorAll("img")
        imgs.forEach(img => {
            if(img.className === transparente){
                filtrado.push(img)
            }
        });
        return filtrado
    }
        

    let botonAyuda = "botonAyuda"
    return (  
        <button 
            className='btn'
            disabled={!puedoPedir || contAyudas < 1 } 
            onClick={() => ayudar()}
            style={{
                background: "rgb(13,110,253)", 
                borderRadius: "50%",
                border: "3px solid aqua",
                height: "150px", 
                width: "150px", 
                margin: "10px auto",
                animationName: "loading",
                animationDuration: `${tiempoEntreAyudas/1000}s`,
            }}
        >
            {  contAyudas === 0 ? `No te quedan ayudas` : !puedoPedir ? "Enseguida podras pedir" : /* contAyudas > 0 ? */ `Ayuda. Te quedan ${contAyudas}`}
        </button>
    );
}
 
export default Ayuda;