
import {useEffect, useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setWidthContenedor, setDificultad, setTema, getTema, empezarJuego } from '../../MemotestSlice'

import './FormCondiciones.css'

const FormCondiciones = ({prepararJuego}) => {

    const dispatch = useDispatch()

    const tema = useSelector(getTema)
  

    const nivelA = {
        tiempo: 1000,
        cantParejas: 8,
        ayuda : {
            tiempoEntreAyudas: 5000,
            cantAyudas: 5, 
            porcentaje: 0.6,
            duracion: 8000
        }
    }

    const nivelB = {
        tiempo: 5000,
        cantParejas: 12,
        ayuda : {
            tiempoEntreAyudas: 10000,
            cantAyudas: 4, 
            porcentaje: 0.4,
            duracion: 5000
        }
    }

    const nivelC = {
        tiempo: 3000,
        cantParejas: 20,
        ayuda : {
            tiempoEntreAyudas: 20000,
            cantAyudas: 3, 
            porcentaje: 0.2,
            duracion: 3000
        }
    }

/*     const msgNivelA = `Jugarás con ${nivelA.cantParejas*2} fichas (${nivelA.cantParejas}) parejas. \n
    Tendrás ${nivelA.tiempo/1000} segundos al inicio del juego para ver y memorizar las fichas.`
    const msgNivelB = `Jugarás con ${nivelB.cantParejas*2} fichas (${nivelB.cantParejas}) parejas. \n
    Tendrás ${nivelB.tiempo/1000} segundos al inicio del juego para ver y memorizar las fichas.`
    const msgNivelC = `Jugarás con ${nivelC.cantParejas*2} fichas (${nivelC.cantParejas}) parejas. \n
    Tendrás ${nivelC.tiempo/1000} segundos al inicio del juego para ver y memorizar las fichas.`
 */

    const [nivel, setNivel] = useState("")
    const [tematica, setTematica] = useState("Banderas")
   /*  const [msgNivel, setMsgNivel] = useState("") */


    const mostarMsgNivel = (value) => {
        setNivel(value)
        /* switch(value){
            case "Easy":
                setMsgNivel(msgNivelA) 
                break;
            case "Medium":
                setMsgNivel(msgNivelB) 
                break;
            case "Hard":
                setMsgNivel(msgNivelC) 
                break;
            default:
                break;
        } */
    }


    /* ----------  SETEA EN DIFICULTAD LOS TIEMPOS Y CONDICIONES QUE CORRESPONDAN  ------------ */
    /* se usa cunado elije la dificultad en el form de condiciones */
    const armadoDificultad = () => {
        switch(nivel){
            case "Easy":
                dispatch(setDificultad(nivelA))
                dispatch(setWidthContenedor("35%"))
                break;
            case "Medium":
                dispatch(setDificultad(nivelB))
                dispatch(setWidthContenedor("55%"))
                break;
            case "Hard":
                dispatch(setDificultad(nivelC))
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
                    <input className='inputDificultad' type="radio" id="Easy" onChange={(SyntheticEvent)=>mostarMsgNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
                <div  className='mx-3'>
                    <label className='labelDificultad' htmlFor="Medium">Medium</label>
                    <input className='inputDificultad' type="radio" id="Medium" onChange={(SyntheticEvent)=>mostarMsgNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
                <div  className='mx-3'>
                    <label className='labelDificultad' htmlFor="Hard">Hard</label>
                    <input className='inputDificultad' type="radio" id="Hard" onChange={(SyntheticEvent)=>mostarMsgNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
            </div>
            {/* <p className='text-white'>{msgNivel}</p> */}
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