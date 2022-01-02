import { useState, useEffect, useRef } from 'react';
import './Reloj.css'

const Reloj = (props) => {

    const {iniciarCronometro, segundos, minutos, horas, setSegundos, setMinutos, setHoras} = props

    /* const [minutos, setMinutos] = useState(9)
    const [segundos, setSegundos] = useState(55)
    const [horas, setHoras] = useState(0) */

   /*  let segundos = useRef(0)
    let minutos = useRef(0) */


    let intervalRef = useRef();
  
    const contador = () => {
        setSegundos((prev) => prev + 1);
        console.log(segundos)
    }

    useEffect(() => {
        console.log(iniciarCronometro)
        if(iniciarCronometro === true)
        intervalRef.current = setInterval(contador, 1000);
        return () => clearInterval(intervalRef.current);
    }, [iniciarCronometro]);


    useEffect(()=> {
        if(segundos === 60){
            setSegundos(0)
            setMinutos((prev) => prev + 1)
        }
        console.log("paso por segundos")
    },[segundos])

    useEffect(()=> {
        if(minutos === 60){
            setMinutos(0)
            setHoras(prev => prev +1)
        }
    },[minutos])
        

    return (  
        <div className='contenedorReloj'>
            <p className='reloj'>{horas === 0 ? "" : "0"+horas + " :"}  {minutos < 10 ? "0"+minutos : minutos } : {segundos < 10 ? "0"+segundos : segundos}</p>
            {/* <p className='reloj'><span rel={minutos}></span> : <span rel={segundos}></span></p> */}
        </div>
    );
}
 
export default Reloj;