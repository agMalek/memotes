import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { sumaSegundo, sumaMinuto, sumaHora, reloj } from '../../MemotestSlice';

import './Reloj.css'

const Reloj = () => {

    const dispatch = useDispatch()
    const {horas, minutos, segundos, iniciarCronometro} = useSelector(reloj)
    
    let intervalRef = useRef();
    
    useEffect(() => {
        if(iniciarCronometro === true)
        intervalRef.current = setInterval(contador, 1000);
        return () => clearInterval(intervalRef.current);
    }, [iniciarCronometro]);
    
    
    const contador = () => {
        dispatch(sumaSegundo())
    }

    useEffect(()=> {
        if(segundos === 60){
            dispatch(sumaMinuto())
        }
    },[segundos])

    useEffect(()=> {
        if(minutos === 60){
            dispatch(sumaHora())
        }
    },[minutos])
        

    return (  
        <div className='contenedorReloj'>
            <p className='reloj'>{horas === 0 ? "" : "0"+horas + " :"}  {minutos < 10 ? "0"+minutos : minutos } : {segundos < 10 ? "0"+segundos : segundos}</p>
        </div>
    );
}
 
export default Reloj;