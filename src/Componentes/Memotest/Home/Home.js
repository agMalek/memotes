
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCargando, setCargando, setQuieroJugar } from "../MemotestSlice";

import Spinner from "../Spinner/Spinner";
import Titulo from "../Titulo/Titulo";

import './Home.css'

const Home = () => {

    const dispatch = useDispatch()

    const cargando = useSelector(getCargando)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCargando(false))
        }, 500);
    },[])
   
    const jugar = () => {
        dispatch(setQuieroJugar(true))
        dispatch(setCargando(true))
    }

    return (  
        <> 
            {
                cargando ? <Spinner/> :
                <div className='contenedorHome'>
                    <div className='contenedorTituloEnHome'>    
                        <Titulo/> 
                    </div>
                    <button className='btn btn-outline-primary boton' onClick={() => jugar()}>EMPEZAR JUEGO</button>
                </div>
            }
        </>
    );
}
 
export default Home;