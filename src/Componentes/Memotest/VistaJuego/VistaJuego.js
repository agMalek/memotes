
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { iniciarReloj, getDificultad, getWidthContenedor } from '../MemotestSlice';

import Tablero from './Tablero/Tablero';
import VistaBotonesJuego from './VistaBotonesJuego/VistaBotonesJuego';
import InfoPartida from '../InfoPartida/InfoPartida';

import './VistaJuego.css'


const VistaJuego = ({prepararJuego}) => {

    const dispatch = useDispatch()

    const dife = useSelector(getDificultad)
    const widthContenedor = useSelector(getWidthContenedor)

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
                prepararJuego={prepararJuego}
            />
            <Tablero 
                opacidad={opacidad}
                podesJugar={podesJugar}
                setPodesJugar={setPodesJugar}
            />
            <div className='d-flex flex-column justify-content-evenly'>
                <div className='d-flex flex-column'>
                    <InfoPartida />
                </div>
            </div>
        </div>
    );
}
 
export default VistaJuego;