import Titulo from "../Titulo/Titulo";

import { useDispatch, useSelector } from "react-redux";
import { getCargando, setCargando, setQuieroJugar } from "../MemotestSlice";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";

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
                <div className='d-flex align-items-center'>
                    <div className='mx-4'>    
                        <Titulo/> 
                    </div>
                    <button className='btn btn-outline-primary boton' onClick={() => jugar()}>EMPEZAR JUEGO</button>
                </div>
            }
        </>
    );
}
 
export default Home;