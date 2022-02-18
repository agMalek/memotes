import './BackDropResponsive.css'

import Backdrop from '@mui/material/Backdrop';
import BotonesBasicos from '../BotonesBasicos/BotonesBasicos';
import { useDispatch } from 'react-redux';
import { iniciarReloj } from '../MemotestSlice';


const BackDropResponsive = ({prepararJuego, botonInhabilitado, openBackDropResponsive, setOpenBackDropResponsive}) => {
    

    const dispatch = useDispatch()

    const seguirJugando = () => {
        setOpenBackDropResponsive(false)
        dispatch(iniciarReloj())    
    }
    
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackDropResponsive}
            >
                <div className='w-50 '>                    
                    <button onClick={() => seguirJugando()} className='btn btn-info botonSeguirJugandoRes'>Seguir jugando</button>
                    <BotonesBasicos 
                        botonInhabilitado={botonInhabilitado}
                        prepararJuego={prepararJuego}
                        width={"80%"}
                    />
                </div>
            </Backdrop>
        </div>
    );
}

export default BackDropResponsive;