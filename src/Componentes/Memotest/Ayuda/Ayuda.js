import { useEffect, useState } from 'react';
import './Ayuda.css'
import { useSelector } from 'react-redux';
import { getDificultad, getEmpezoJuego } from '../MemotestSlice';

const Ayuda = ({contenedor, setPodesJugar}) => {

    const {ayuda: {tiempoEntreAyudas, cantAyudas, porcentaje, duracion}} = useSelector(getDificultad)
    const empezoJuego = useSelector(getEmpezoJuego)

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
        }
        return array
    }


    useEffect(() => {
        let time;
        if(empezoAyuda === true){
            time = setTimeout(()=> {
                girarFichas(arrayIndices, arrayFiltrado, transparente)  
                setEmpezoAyuda(false)
                setPodesJugar(true)
            }, duracion)
            return () => clearTimeout(time);
        }else if(empezoJuego){
            time = setTimeout(() => {
                setPuedoPedir(true)
            }, tiempoEntreAyudas)
            return () => clearTimeout(time);
        }
    }, [empezoAyuda, empezoJuego])


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
        
    return (  
        <button 
            className='btn btn-info botonAyuda' 
            disabled={!puedoPedir || contAyudas < 1 } 
            onClick={() => ayudar()}
        >
            { contAyudas === 0 ? `No te quedan ayudas` : !puedoPedir ? "Preparando ayuda" : `Ped?? ayuda. Te quedan ${contAyudas}` }
        </button>
    );
}
 
export default Ayuda;