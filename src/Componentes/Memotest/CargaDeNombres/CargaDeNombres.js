import { useEffect, useState } from 'react';

import FormNombre from './FormNombre/FormNombre';
import Titulo from '../Titulo/Titulo'

import './CargaDeNombres.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getJugadores, setValuesJugadores } from '../MemotestSlice';

const CargaDeNombres = () => {

    const dispatch = useDispatch()

    /* const jugadores = useSelector(getJugadores) */


    const indices = [0,1,2,3]   
    const [cantJugadores, setCantJugadores] = useState(2)
    const [jugadores, setJugadores] = useState({
        jugador1 : {
            nombre: "",
            color: "",
            esMiTurno: true,
            cantAciertos: 0
        },
        jugador2 : {
            nombre: "",
            color: "",
            esMiTurno: false,
            cantAciertos: 0
        },
        jugador3 : {
            nombre: "",
            color: "",
            esMiTurno: false,
            cantAciertos: 0
        },
        jugador4 : {
            nombre: "",
            color: "",
            esMiTurno: false,
            cantAciertos: 0
        }
    })
   
    
    const limpiarValores = (name) => {
        setJugadores({...jugadores, [name]: {...jugadores[name], ["nombre"]: "", ["color"]: ""}})
    }



    const setNombre = (e) => {
        const {name, value} = e.target
        setJugadores({...jugadores, [name]: { ...jugadores[name], ["nombre"]: value} })
    }

    const setColor = (color, i) => {
        setJugadores({...jugadores, [`jugador${i+1}`]: { ...jugadores[`jugador${i+1}`], ["color"]: color } })
    }

    useEffect(() =>{
       console.log(jugadores)

    },[jugadores])

    const iniciar = () => {
        const res = verificar()
        console.log(res)
        if(res){
            dispatch(setValuesJugadores(jugadores))
            console.log("pasassa")
        }else{
            alert("Debes completar los valores de los jugadores habilitados")
        }
    }
    
    
    const verificar = () => {
        let cont = 0
        for(const key in jugadores) {
            console.log(jugadores[key].nombre)
            console.log(jugadores[key].color)
            if(jugadores[key].nombre !== "" && jugadores[key].color !== ""){
                cont++
            }
            console.log(cont)
        }
        return cont === cantJugadores ? true : false
    }

    /* useEffect(()=> {
        console.log(cantJugadores)
    }, [cantJugadores]) */



    return (  
        <div>
            <Titulo/>
            <div className='d-flex flex-wrap justify-content-evenly'>
                {
                    indices.map(i => (
                        <FormNombre 
                            key={i} 
                            i={i}
                            jugadores={jugadores} 
                            setNombre={setNombre}  
                            setColor={setColor}
                            setCantJugadores={setCantJugadores}
                            limpiarValores={limpiarValores}
                        />
                    ))
                }
            </div>
            <div className='contenedorBotonAvanzar'>
                <button className='btn btn-primary w-25' /* disabled={!cargado} */ onClick={() => iniciar()}>Avanzar</button>
            </div>
        </div>
    );
}
 
export default CargaDeNombres;


/* 


 const indices = [0,1,2,3]
    const [nombres, setNombres] = useState({nombre1: "", nombre2: "", nombre3: "", nombre4: ""})
   
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setNombres({...nombres, [name]: value })
    }

*/