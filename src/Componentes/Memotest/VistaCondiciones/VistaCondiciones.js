
import { useEffect, useState } from "react";
import Titulo from "../Titulo/Titulo";
import FormCondiciones from './FormCondiciones/FormCondiciones';
import SpinnerMui from '../SpinnerMui/SpinnerMui'
import Spinner from '../Spinner/Spinner'

import './VistaCondiciones.css'
import { useSelector } from "react-redux";
import { getCargando, setCargando, setModoJuego } from "../MemotestSlice";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";

const VistaCondiciones = ({prepararJuego}) => {
    
    const dispatch = useDispatch()

    const tituloModal = "Carga incompleta.";
    const textoModal = "Debes seleccionar un nivel de dificultad.";
    const textoBotonModal = "OK";

    const [openModal, setOpenModal] = useState(false);
    const [openSpinner, setOpenSpinner] = useState(false);
    const cargando = useSelector(getCargando)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCargando(false))
        }, 500);
    },[])
    
    return (
        <> 
            {
                cargando ? <Spinner /> :
                <div>
                    <SpinnerMui openSpinner={openSpinner}/>
                    <Modal setOpenModal={setOpenModal} openModal={openModal} title={tituloModal} text={textoModal} textButton={textoBotonModal}/>
                    <Titulo/>
                    <FormCondiciones 
                        prepararJuego={prepararJuego}
                        setOpenSpinner={setOpenSpinner}
                        openSpinner={openSpinner}
                        setOpenModal={setOpenModal}
                    />
                    
                </div>
            }
        </>  
    );
}
 
export default VistaCondiciones;