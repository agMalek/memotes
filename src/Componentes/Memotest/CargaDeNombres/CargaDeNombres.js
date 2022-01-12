import { useEffect, useState } from 'react';

import FormNombre from './FormNombre/FormNombre';
import Titulo from '../Titulo/Titulo'

import './CargaDeNombres.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getJugadores, setValuesJugadores, setCantidadJugadores, setCargando } from '../MemotestSlice';
import Modal from '../Modal/Modal';
import SpinnerMui from '../SpinnerMui/SpinnerMui'

const CargaDeNombres = () => {

    const dispatch = useDispatch()

    /* const jugadores = useSelector(getJugadores) */
    const tituloModal = "Carga incompleta.";
    const textoModal = `Debes completar todos los jugadores que estan habilitados.
    Recordá escribir el nombre y seleccionar un color.`;
    const textoBotonModal = "OK";

    const indices = [0,1,2,3]  
    const [openSpinner, setOpenSpinner] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [cantJugadores, setCantJugadores] = useState(2)
    const [jugadores, setJugadores] = useState({
        jugador1 : {
            nombre: "",
            color: "",
            esMiTurno: true,
            cantAciertos: 0
        },
        jugador2 : {
            nombre: "",
            color: "",
            esMiTurno: false,
            cantAciertos: 0
        },
        jugador3 : {
            nombre: "",
            color: "",
            esMiTurno: false,
            cantAciertos: 0
        },
        jugador4 : {
            nombre: "",
            color: "",
            esMiTurno: false,
            cantAciertos: 0
        }
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
        dispatch(setCargando(false))
    },[])
    
    useEffect(() => {
        if(openSpinner){
            let time = setTimeout(() => {
                dispatch(setValuesJugadores(jugadores))
                dispatch(setCantidadJugadores(cantJugadores))
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



    return (  
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
                            limpiarValores={limpiarValores}
                        />
                    ))
                }
            </div>
            <div className='contenedorBotonAvanzar'>
                <button className='btn btn-primary w-25' /* disabled={!cargado} */ onClick={() => iniciar()}>Avanzar</button>
            </div>
        </div>
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