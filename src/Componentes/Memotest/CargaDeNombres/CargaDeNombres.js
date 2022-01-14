import { useEffect, useState } from 'react';

import FormNombre from './FormNombre/FormNombre';
import Titulo from '../Titulo/Titulo'

import './CargaDeNombres.css'
import { useSelector, useDispatch } from 'react-redux';
import { getJugadores, setValuesJugadores, setCantidadJugadores, setCargando, setModoJuego, getCantJugadores, setMostrarForms, getCargando } from '../MemotestSlice';
import Modal from '../Modal/Modal';
import SpinnerMui from '../SpinnerMui/SpinnerMui'
import Spinner from '../Spinner/Spinner'

const CargaDeNombres = () => {

    const dispatch = useDispatch()

    const cargando = useSelector(getCargando)
    const jugadoresState = useSelector(getJugadores)
    const cantidadJugadores = useSelector(getCantJugadores)

    const tituloModal = "Carga incompleta.";
    const textoModal = `Debes completar todos los jugadores que estan habilitados.
    Recordá escribir el nombre y seleccionar un color.`;
    const textoBotonModal = "OK";

    const indices = [0,1,2,3]  
    const [openSpinner, setOpenSpinner] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [cantJugadores, setCantJugadores] = useState(cantidadJugadores)
    /* const [jugadores, setJugadores] = useState({
        jugador1 : {
            nombre: cantidadJugadores > 0 ? jugadoresState[0].nombre : "" ,
            color: cantidadJugadores > 0 ? jugadoresState[0].color : "",
            esMiTurno: true,
            cantAciertos: 0
        },
        jugador2 : {
            nombre: cantidadJugadores > 0 ? jugadoresState[1].nombre : "",
            color: cantidadJugadores > 0 ? jugadoresState[1].color : "",
            esMiTurno: false,
            cantAciertos: 0
        },
        jugador3 : {
            nombre: cantidadJugadores > 2 ? jugadoresState[2].nombre : "",
            color: cantidadJugadores > 2 ? jugadoresState[2].color : "",
            esMiTurno: false,
            cantAciertos: 0
        },
        jugador4 : {
            nombre: cantidadJugadores > 3 ? jugadoresState[3].nombre : "",
            color: cantidadJugadores > 3 ? jugadoresState[3].color : "",
            esMiTurno: false,
            cantAciertos: 0
        }
    }) */
   
    const [jugadores, setJugadores] = useState({
        jugador1 : jugadoresState[0],
        jugador2 : jugadoresState[1],
        jugador3 : jugadoresState[2],
        jugador4 : jugadoresState[3],
    }) 
    
    
    const limpiarValores = (name) => {
        setJugadores({...jugadores, [name]: {...jugadores[name], ["nombre"]: "", ["color"]: ""}})
    }



    const setNombre = (e) => {
        const {name, value} = e.target
        setJugadores({...jugadores, [name]: { ...jugadores[name], ["nombre"]: value} })
    }

    const setColor = (color, i) => {
        setJugadores({...jugadores, [`jugador${i+1}`]: { ...jugadores[`jugador${i+1}`], ["color"]: color } })
    }

    useEffect(() =>{
       console.log(jugadores)

    },[jugadores])

    const iniciar = () => {
        if(verificar()){
            setOpenSpinner(true)
        }else{
            setOpenModal(true)
        }
    }
    

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCargando(false))
        }, 500);
    },[])
    
    useEffect(() => {
        if(openSpinner){
            let time = setTimeout(() => {
                dispatch(setValuesJugadores(jugadores))
                dispatch(setCantidadJugadores(cantJugadores))
                dispatch(setMostrarForms(false))
                console.log("pasassa")
            }, 1500);
            return () => clearTimeout(time)
        }
    },[openSpinner])
    
    const verificar = () => {
        let cont = 0
        for(const key in jugadores) {
            console.log(jugadores[key].nombre)
            console.log(jugadores[key].color)
            if(jugadores[key].nombre !== "" && jugadores[key].color !== ""){
                cont++
            }
            console.log(cont)
        }
        return cont === cantJugadores ? true : false
    }

    /* useEffect(()=> {
        console.log(cantJugadores)
    }, [cantJugadores]) */

    const volver = () => {
        dispatch(setModoJuego(""))
        dispatch(setCargando(true))
    }

    return (
        <>
            {    cargando ? <Spinner/> :
                <div>
                    <SpinnerMui openSpinner={openSpinner}/>
                    <Modal setOpenModal={setOpenModal} openModal={openModal} title={tituloModal} text={textoModal} textButton={textoBotonModal}/>
                    <Titulo/>
                    <div className='d-flex flex-wrap justify-content-evenly'>
                        {
                            indices.map(i => (
                                <FormNombre 
                                    key={i} 
                                    i={i}
                                    jugadores={jugadores} 
                                    setNombre={setNombre}  
                                    setColor={setColor}
                                    setCantJugadores={setCantJugadores}
                                    cantidadJugadores={cantidadJugadores}
                                    limpiarValores={limpiarValores}
                                />
                            ))
                        }
                    </div>
                    <div className='contenedorBotonAvanzar'>
                        <button className='btn btn-primary w-25 mx-3 my-2' /* disabled={!cargado} */ onClick={() => volver()}>Volver</button>
                        <button className='btn btn-primary w-25 mx-3 my-2' /* disabled={!cargado} */ onClick={() => iniciar()}>Avanzar</button>
                    </div>
                </div>
            }
        </>   
    );
}
 
export default CargaDeNombres;


/* 


 const indices = [0,1,2,3]
    const [nombres, setNombres] = useState({nombre1: "", nombre2: "", nombre3: "", nombre4: ""})
   
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setNombres({...nombres, [name]: value })
    }

*/