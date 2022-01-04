
import {useEffect, useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setWidthContenedor, setDificultad, setTema, getTema} from '../../../../app/slice/setCondicionesSlice'
import { empezarJuego } from '../../../../app/slice/enJuegoSlice'

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


    const [level, setLevel] = useState("")


    /* ----------  SETEA EN DIFICULTAD LOS TIEMPOS Y CONDICIONES QUE CORRESPONDAN  ------------ */
    /* se usa cunado elije la dificultad en el form de condiciones */
    const setNivel = () => {
        switch(level){
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
        /* if(dificultad.tiempo === undefined || dificultad.cantParejas === undefined){ */
        if(level === ""){
            alert("Debes seleccionar un nivel de dificultad")
        }else{
            setNivel()
            dispatch(setTema(e.target.querySelector("select").value))
        }
    }


    /* --------- CUANDO DE CLICK EN EL BOTON INICIAR DEL FORM DE CONDICIONES -------- */
    useEffect(() => {
        if(tema !== ""){
            prepararJuego()
            /* setJuegoEmpezado(true) */
            dispatch(empezarJuego())
        }
    }, [tema])
    

    return ( 
        <form className='contenedorCondiciones' onSubmit={(SyntheticEvent) => iniciarJuego(SyntheticEvent)}>
            <div className='contenedorDificultad '>
                <div className='mx-3'>
                    <label className='labelDificultad' htmlFor="Easy">Easy</label>
                    <input className='inputDificultad' type="radio" id="Easy" onChange={(SyntheticEvent)=>setLevel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
                <div  className='mx-3'>
                    <label className='labelDificultad' htmlFor="Medium">Medium</label>
                    <input className='inputDificultad' type="radio" id="Medium" onChange={(SyntheticEvent)=>setLevel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
                <div  className='mx-3'>
                    <label className='labelDificultad' htmlFor="Hard">Hard</label>
                    <input className='inputDificultad' type="radio" id="Hard" onChange={(SyntheticEvent)=>setLevel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
            </div>
            <div className='contenedorTemas'>  
                <select className='selectTema'>
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