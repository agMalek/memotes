import { useEffect, useState } from 'react';
import './Ayuda.css'
import { useSelector } from 'react-redux';
import { getDificultad } from '../../MemotestSlice';

const Ayuda = ({contenedor, setPodesJugar}) => {

    const {ayuda: {tiempoEntreAyudas, cantAyudas, porcentaje}} = useSelector(getDificultad)

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


    /* useEffect(() => {
        setTimeout( ()=> {
            setPuedoPedir(true)
        }, 10000)
    }, []) */




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
            }, 2000)
            return () => clearTimeout(time);
        }else{
            time = setTimeout(() => {
                setPuedoPedir(true)
            }, tiempoEntreAyudas)
            return () => clearTimeout(time);
        }
    }, [empezoAyuda])


    const ocultar = () => {
        
    }

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
        <button className='btn btn-success' disabled={!puedoPedir || contAyudas < 1 } onClick={() => ayudar()}>{ contAyudas > 0 ? `Ayuda. Te quedan ${contAyudas}` : `No te quedan ayudas`}</button>
    );
}
 
export default Ayuda;