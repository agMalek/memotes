import { useDispatch } from 'react-redux';
import { setModoJuego } from '../MemotestSlice';
import './ModoJuego.css'

const ModoJuego = () => {

    const dispatch = useDispatch()



    return (  
        <div>
            <button className='btn btn-outline-primary' onClick={() => dispatch(setModoJuego("solo"))}>Jugar solo</button>
            <button className='btn btn-outline-primary' onClick={() => dispatch(setModoJuego("multi"))}>Multijugador</button>
        </div>
    );
}
 
export default ModoJuego;