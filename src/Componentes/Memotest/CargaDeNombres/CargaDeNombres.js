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
   
    const [jugadores, setJugadores] = useState({
        jugador1 : jugadoresState[0],
        jugador2 : jugadoresState[1],
        jugador3 : jugadoresState[2],
        jugador4 : jugadoresState[3],
    })
    
    
    const limpiarValores = (name) => {
        setJugadores({...jugadores, [name]: {...jugadores[name], "nombre": "", "color": ""}})
    }



    const setNombre = (e) => {
        const {name, value} = e.target
        setJugadores({...jugadores, [name]: { ...jugadores[name], "nombre": value} })
    }

    const setColor = (color, i) => {
        setJugadores({...jugadores, [`jugador${i+1}`]: { ...jugadores[`jugador${i+1}`], "color": color } })
    }

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
            }, 1500);
            return () => clearTimeout(time)
        }
    },[openSpinner])
    
    const verificar = () => {
        let cont = 0
        for(const key in jugadores) {
            if(jugadores[key].nombre !== "" && jugadores[key].color !== ""){
                cont++
            }
        }
        return cont === cantJugadores
    }

    const volver = () => {
        dispatch(setModoJuego(""))
        dispatch(setCargando(true))
    }

    return (
        <>
            {    cargando ? <Spinner/> :
                <div className="h-100">
                    <SpinnerMui openSpinner={openSpinner}/>
                    <Modal setOpenModal={setOpenModal} openModal={openModal} title={tituloModal} text={textoModal} textButton={textoBotonModal}/>
                    <div className='contenedorTituloEnCargaNombre'>
                        <Titulo/>
                    </div>
                    <div className='contenedorFormNombres'>
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
                        <button className='btn btn-primary botonesEnCargaNobre' onClick={() => volver()}>Volver</button>
                        <button className='btn btn-primary botonesEnCargaNobre' onClick={() => iniciar()}>Avanzar</button>
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