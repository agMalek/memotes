import Titulo from "../Titulo/Titulo";

import { useDispatch } from "react-redux";
import { setQuieroJugar } from "../MemotestSlice";

const Home = () => {

    const dispatch = useDispatch()

    return (  
        <div className='d-flex align-items-center'>
            <div className='mx-4'>    
                <Titulo/> 
            </div>
            <button className='btn btn-outline-primary boton' onClick={() => dispatch(setQuieroJugar(true))}>EMPEZAR JUEGO</button>
        </div>
    );
}
 
export default Home;