
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { iniciarReloj, getDificultad, getWidthContenedor, getModoJuego, setEmpezoJuego, pararReloj, getCantJugadores } from '../MemotestSlice';

import Tablero from './Tablero/Tablero';
import Titulo from '../Titulo/Titulo';
import BotonesBasicos from '../BotonesBasicos/BotonesBasicos';
import Reloj from '../Reloj/Reloj';
import Ayuda from '../Ayuda/Ayuda';
import ContadorIntentos from '../ContadorIntentos/ContadorIntentos';
import VistaMultijugador from './VistaMultijador/VistaMultijugador';
import BackDrop from './BackDrop/BackDrop'
import SpinnerMui from '../SpinnerMui/SpinnerMui';

import './VistaJuego.css'
import BackDropResponsive from '../BackDropResponsive/BackDropResponsive';

const VistaJuego = ({prepararJuego}) => {

    const dispatch = useDispatch()

    const dife = useSelector(getDificultad)
    const widthContenedor = useSelector(getWidthContenedor)
    const modoJuego = useSelector(getModoJuego)
    const cantJug = useSelector(getCantJugadores)

    const opaca = "opaca"
    const transparente = "transparente"

    const [openBackDropResponsive, setOpenBackDropResponsive] = useState(false);
    const [openSpinner, setOpenSpinner] = useState(false);
    const [openBackDrop, setOpenBackDrop] = useState(true)
    const [botonInhabilitado, setBotonInhabilitado] = useState(true)
    const [opacidad, setOpacidad] = useState(transparente) 
    const [podesJugar, setPodesJugar] = useState(false) 
    const [contenedor, setContenedor] = useState()

    /* ------------- OCULTA LAS IMAGENES Y HABILITA LOS BOTONES -----------*/
    useEffect(() =>{
        setContenedor(window.document.querySelector(".contenedorFichas"))
        if(opacidad === opaca){
            setTimeout( () => {
                setOpacidad(transparente)
                setPodesJugar(true)
                setBotonInhabilitado(false)
                dispatch(iniciarReloj())
                dispatch(setEmpezoJuego(true))
            }, dife.tiempo)
        }
    }, [opacidad])


    useEffect(() => {
        if(!openBackDrop){
            setOpacidad(opaca)
        }
    },[openBackDrop])


    /* PARA DEFINIR EL ANCHO DEL TABLERO, SEGUN LAS CANT DE FICHAS */
    useEffect(() =>{
        if(contenedor !== undefined){
            contenedor.style.width = widthContenedor
        }
    }, [contenedor])


    useEffect(() => {
        setTimeout(() => {
            setOpenBackDrop(false)
        }, 4000);
    },[])


    const abrirMenu = () => {
        setOpenBackDropResponsive(!openBackDropResponsive)
        dispatch(pararReloj())
    }


    return (
        <>
            
                <SpinnerMui openSpinner={openSpinner}/>
                <div className='contenedorVistaJuego'>
                   { <BackDrop openBackDrop={openBackDrop}  />}
                    <div className='contenedorBotonesVistaJuego'>
                        <Titulo/>
                        <BotonesBasicos 
                            botonInhabilitado={botonInhabilitado}
                            prepararJuego={prepararJuego}
                            width={"80%"}
                        />
                    </div>
                    <div className='botonesEnJuegoResponsive'>
                        <button onClick={() => abrirMenu()} className='btn btn-info botonMenu'>Menu</button>
                        <Titulo/>
                        <BackDropResponsive 
                            botonInhabilitado={botonInhabilitado} 
                            prepararJuego={prepararJuego}
                            openBackDropResponsive={openBackDropResponsive}
                            setOpenBackDropResponsive={setOpenBackDropResponsive}
                        />
                    </div>
                    <div className="contenedorTablero" >
                        <Tablero
                            opacidad={opacidad}
                            podesJugar={podesJugar}
                            setPodesJugar={setPodesJugar}
                            setOpenSpinner={setOpenSpinner}
                            openSpinner={openSpinner}
                        />
                    </div>
                    {
                        modoJuego === 'solo' ? 
                        <div className='contenedorInfoPartidaEnJuego'>     
                            <Reloj />
                            <Ayuda contenedor={contenedor} setPodesJugar={setPodesJugar}/>
                            <ContadorIntentos/>
                        </div>
                        : 
                        <div className={`contenedorVistaMultiEnJuego ${cantJug == 2 ? "sonDosJugadores" : ""}`}>
                            <VistaMultijugador />
                        </div>
                    }
                    
                </div>
            
        </>
    );
}
 
export default VistaJuego;