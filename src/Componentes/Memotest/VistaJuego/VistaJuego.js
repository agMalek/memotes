
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { iniciarReloj } from '../../../app/slice/infoPartidaSlice';
import { dif } from '../../../app/slice/setCondicionesSlice';
import { width } from '../../../app/slice/setCondicionesSlice';

import Tablero from './Tablero/Tablero';
import VistaBotonesJuego from './VistaBotonesJuego/VistaBotonesJuego';
import InfoPartida from '../InfoPartida/InfoPartida';

import './VistaJuego.css'


const VistaJuego = (props) => {
    const {reiniciar, nuevoJuego, fichas} = props

    const dispatch = useDispatch()
    const dife = useSelector(dif)
    const widthContenedor = useSelector(width)

    const opaca = "opaca"
    const transparente = "transparente"

    const [botonInhabilitado, setBotonInhabilitado] = useState(true)
    const [opacidad, setOpacidad] = useState(opaca) 
    const [podesJugar, setPodesJugar] = useState(false)
    const [contenedor, setContenedor] = useState()

    /* ------------- OCULTA LAS IMAGENES Y HABILITA LOS BOTONES -----------*/
    useEffect(() =>{
        setContenedor(window.document.querySelector(".contenedorFichas"))
        setTimeout( () => {
            setOpacidad(transparente)
            setPodesJugar(true)
            setBotonInhabilitado(false)
            /* setIniciarCronometro(true) */
            dispatch(iniciarReloj())
        }, dife.tiempo)
    }, [])

    /* PARA DEFINIR EL ANCHO DEL TABLERO, SEGUN LAS CANT DE FICHAS */
    useEffect(() =>{
        if(contenedor !== undefined){
            contenedor.style.width = widthContenedor
        }
    }, [contenedor])

    return ( 
        <div className='d-flex justify-content-evenly'>
            <VistaBotonesJuego 
                botonInhabilitado={botonInhabilitado}
                reiniciar={reiniciar}
                nuevoJuego={nuevoJuego}
            />
            <Tablero 
                fichas={fichas}
                /* darVuelta={darVuelta} */
                opacidad={opacidad}
                podesJugar={podesJugar}
                setPodesJugar={setPodesJugar}
            />
            <div className='d-flex flex-column justify-content-evenly'>
            <div className='d-flex flex-column'>
                <InfoPartida />
            </div>
                {/* <InfoPartida/> */}
            </div>
        </div>
    );
}
 
export default VistaJuego;