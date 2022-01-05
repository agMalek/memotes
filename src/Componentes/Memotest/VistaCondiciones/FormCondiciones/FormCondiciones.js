
import {useEffect, useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setWidthContenedor, setDificultad, setTema, getTema, empezarJuego } from '../../MemotestSlice'

import './FormCondiciones.css'

const FormCondiciones = ({prepararJuego}) => {

    const dispatch = useDispatch()

    const tema = useSelector(getTema)
  
    const tiempoNivelA = 1000
    const tiempoNivelB = 5000
    const tiempoNivelC = 3000

    const cantParejasNivelA = 2
    const cantParejasNivelB = 12
    const cantParejasNivelC = 20


    const [nivel, setNivel] = useState("")
    const [tematica, setTematica] = useState("Banderas")


    /* ----------  SETEA EN DIFICULTAD LOS TIEMPOS Y CONDICIONES QUE CORRESPONDAN  ------------ */
    /* se usa cunado elije la dificultad en el form de condiciones */
    const armadoDificultad = () => {
        switch(nivel){
            case "Easy":
                dispatch(setDificultad({
                    tiempo: tiempoNivelA,
                    cantParejas: cantParejasNivelA
                }))
                dispatch(setWidthContenedor("35%"))
                break;
            case "Medium":
                dispatch(setDificultad({
                    tiempo: tiempoNivelB,
                    cantParejas: cantParejasNivelB
                }))
                dispatch(setWidthContenedor("55%"))
                break;
            case "Hard":
                dispatch(setDificultad({
                    tiempo: tiempoNivelC,
                    cantParejas: cantParejasNivelC
                }))
                dispatch(setWidthContenedor("65%"))
                break;
            default:
                break;
        }
    }


    /* -------------- SETEA EL TEMA -------------- */
    /* se usa cuando le doy al boton iniciar en el form de condiciones */
    const iniciarJuego = (e) =>{
        e.preventDefault()
        if(nivel === ""){
            alert("Debes seleccionar un nivel de dificultad")
        }else{
            armadoDificultad()
            dispatch(setTema(tematica))
        }
    }


    /* --------- CUANDO DE CLICK EN EL BOTON INICIAR DEL FORM DE CONDICIONES -------- */
    useEffect(() => {
        if(tema !== ""){
            prepararJuego()
            dispatch(empezarJuego())
        }
    }, [tema])
    

    return ( 
        <form className='contenedorCondiciones' onSubmit={(SyntheticEvent) => iniciarJuego(SyntheticEvent)}>
            <div className='contenedorDificultad '>
                <div className='mx-3'>
                    <label className='labelDificultad' htmlFor="Easy">Easy</label>
                    <input className='inputDificultad' type="radio" id="Easy" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
                <div  className='mx-3'>
                    <label className='labelDificultad' htmlFor="Medium">Medium</label>
                    <input className='inputDificultad' type="radio" id="Medium" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
                <div  className='mx-3'>
                    <label className='labelDificultad' htmlFor="Hard">Hard</label>
                    <input className='inputDificultad' type="radio" id="Hard" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
            </div>
            <div className='contenedorTemas'>  
                <select className='selectTema' onChange={(SyntheticEvent)=>setTematica(SyntheticEvent.target.value)}>
                    <option value="Banderas">Banderas</option>
                    <option value="Animales">Animales</option>
                    <option value="Comidas">Comidas</option>
                </select>
            </div>
            <div>
                <button className='btn btn-outline-primary my-4 w-100'>Iniciar</button>
            </div>
        </form>
    );
}
 
export default FormCondiciones;