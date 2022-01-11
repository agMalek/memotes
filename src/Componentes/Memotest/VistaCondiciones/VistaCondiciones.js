
import { useEffect, useState } from "react";
import Titulo from "../Titulo/Titulo";
import FormCondiciones from './FormCondiciones/FormCondiciones';
import SpinnerMui from '../SpinnerMui/SpinnerMui'
import Spinner from '../Spinner/Spinner'

import './VistaCondiciones.css'
import { useSelector } from "react-redux";
import { getCargando, setCargando } from "../MemotestSlice";
import { useDispatch } from "react-redux";

const VistaCondiciones = ({prepararJuego}) => {
    
    const dispatch = useDispatch()

    const [openSpinner, setOpenSpinner] = useState(false);
    const cargando = useSelector(getCargando)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCargando(false))
        }, 700);
    },[])

    return (
        <> 
            {
                cargando ? <Spinner /> :
                <div>
                    <SpinnerMui openSpinner={openSpinner}/>
                    <Titulo/>
                    <FormCondiciones 
                        prepararJuego={prepararJuego}
                        setOpenSpinner={setOpenSpinner}
                        openSpinner={openSpinner}
                    />
                </div>
            }
        </>  
    );
}
 
export default VistaCondiciones;