
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { iniciarReloj, getDificultad, getWidthContenedor } from '../MemotestSlice';

import Tablero from './Tablero/Tablero';

import './VistaJuego.css'
import Titulo from '../Titulo/Titulo';
import BotonesBasicos from '../BotonesBasicos/BotonesBasicos';
import Reloj from '../Reloj/Reloj';
import Ayuda from '../Ayuda/Ayuda';
import ContadorIntentos from '../ContadorIntentos/ContadorIntentos';
import VistaMultijugador from './VistaMultijador/VistaMultijugador';


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
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <Titulo/>
                <BotonesBasicos 
                    botonInhabilitado={botonInhabilitado}
                    prepararJuego={prepararJuego}
                />
            </div>
            <Tablero 
                opacidad={opacidad}
                podesJugar={podesJugar}
                setPodesJugar={setPodesJugar}
            />
            {
                false ? 
                <div className='d-flex flex-column justify-content-evenly'>
                    <div className='d-flex flex-column'>               
                        <Reloj />
                        <Ayuda contenedor={contenedor} setPodesJugar={setPodesJugar}/>
                        <ContadorIntentos/>
                    </div>
                </div>
                : 
                <VistaMultijugador />


            }
            
        </div>
    );
}
 
export default VistaJuego;