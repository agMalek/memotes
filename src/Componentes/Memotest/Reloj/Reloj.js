import { useEffect, useRef, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { sumaSegundo, sumaMinuto, sumaHora, reloj, setReloj, setGano, contIntentos , getGano} from '../MemotestSlice';

import './Reloj.css'

const Reloj = () => {

    const dispatch = useDispatch()
    const { horas, minutos, segundos, iniciarCronometro} = useSelector(reloj)
    const gano = useSelector(getGano)

    const [contHoras, setContHoras] = useState(horas) 
    const [contMinutos, setContMinutos] = useState(minutos) 
    const [contSegundos, setContSegundos] = useState(segundos) 
    /* const [iniciarCronometro, setIniciarCronometro] = useState(false)  */
    
    let intervalRef = useRef();
    
    useEffect(() => {
        if(iniciarCronometro === true){
            intervalRef.current = setInterval(contador, 1000);
            return () => clearInterval(intervalRef.current);
        }else if(contSegundos > 0 && !gano){
                dispatch(setReloj({
                    iniciarCronometro : iniciarCronometro,
                    segundos: contSegundos,
                    minutos: contMinutos,
                    horas: contHoras
                }))
                dispatch(setGano(true))
        }
    }, [iniciarCronometro]);
    

    
    
    const contador = () => {
       /*  dispatch(sumaSegundo()) */
       setContSegundos(prev => prev + 1)
    }

    useEffect(()=> {
        if(contSegundos === 60){
            /* dispatch(sumaMinuto()) */
            setContMinutos(prev => prev + 1)
            setContSegundos(0)
        }
    },[contSegundos])

    useEffect(()=> {
        if(contMinutos === 60){
            /* dispatch(sumaHora()) */
            setContHoras(prev => prev + 1)
            setContMinutos(0)
        }
    },[contMinutos])
        

    return (  
        <div className='contenedorReloj'>
            <p className='reloj'>{contHoras === 0 ? "" : "0"+contHoras + " :"}  {contMinutos < 10 ? "0"+contMinutos : contMinutos } : {contSegundos < 10 ? "0"+contSegundos : contSegundos}</p>
        </div>
    );
}
 
export default Reloj;