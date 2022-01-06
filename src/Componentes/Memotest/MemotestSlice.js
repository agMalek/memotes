import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    infoGeneral: {
        quieroJugar: false,
        juegoEmpezado: false,
        fichas: [],
        gano: false,
        cargando: true
    },
    condiciones: {
        dificultad: {
            tiempo: undefined, 
            cantParejas:undefined,
            ayuda: {
                tiempoEntreAyudas: 0,
                cantAyudas: 0, 
                porcentaje: 0,
                duracion: 0
            }
        },
        tema: "",
        widthContenedor: ""
    },
    infoPartida: {
        reloj : {
            iniciarCronometro : false,
            segundos: 0,
            minutos: 0,
            horas: 0
        },
        contIntentos: 0
    }
}

export const memotestSlice = createSlice({
    name: "memotestSlice",
    initialState: initialStateValues,
    reducers: {
        setQuieroJugar: (state, action) => {
            state.infoGeneral.quieroJugar = action.payload
        },
        empezarJuego: state =>{
            state.infoGeneral.juegoEmpezado = true    
        },
        terminarJuego: state =>{
            state.infoGeneral.juegoEmpezado = false    
        },
        setFichas: (state, action) =>{
            state.infoGeneral.fichas = action.payload
        },
        setGano: (state, action) => {
            state.infoGeneral.gano = action.payload
        },
        setCargando: (state, action) => {
            state.infoGeneral.cargando = action.payload
        },
        reiniciarCondiciones: state => {
            state.condiciones.dificultad = initialStateValues.condiciones.dificultad
            state.condiciones.tema = initialStateValues.condiciones.tema
            state.condiciones.widthContenedor = initialStateValues.condiciones.widthContenedor
        },
        setDificultad: (state, action) =>{
            state.condiciones.dificultad = {
                tiempo: action.payload.tiempo, 
                cantParejas: action.payload.cantParejas,
                ayuda : {
                    tiempoEntreAyudas: action.payload.ayuda.tiempoEntreAyudas,
                    cantAyudas: action.payload.ayuda.cantAyudas, 
                    porcentaje: action.payload.ayuda.porcentaje,
                    duracion: action.payload.ayuda.duracion
                }
            }
        },
        setTema: (state, action) => {
            state.condiciones.tema = action.payload
        },
        setWidthContenedor: (state, action) =>{
            state.condiciones.widthContenedor = action.payload
        },
        /* sumaSegundo: state => {
            state.infoPartida.reloj.segundos += 1
        },
        sumaMinuto: state => {
            state.infoPartida.reloj.segundos = 0
            state.infoPartida.reloj.minutos += 1
        },
        sumaHora: state => {
            state.infoPartida.reloj.minutos = 0
            state.infoPartida.reloj.horas += 1
        }, */
        setReloj: (state, action) => {
            state.infoPartida.reloj = action.payload 
        },
        sumaContInt: state => {
            state.infoPartida.contIntentos += 1
        },
        reiniciarInfoPartida: state => {
            state.infoPartida.reloj = initialStateValues.infoPartida.reloj
            state.infoPartida.contIntentos = initialStateValues.infoPartida.contIntentos
        },
        iniciarReloj: state => {
            state.infoPartida.reloj.iniciarCronometro = true
        },
        pararReloj: state => {
            state.infoPartida.reloj.iniciarCronometro = false
        }

    }
})

export const {
    setQuieroJugar,
    empezarJuego, 
    terminarJuego, 
    setFichas, 
    setGano, 
    setCargando,
    reiniciarCondiciones, 
    setDificultad, 
    setTema, 
    setWidthContenedor, 
    /* sumaSegundo, 
    sumaMinuto, 
    sumaHora, */
    setReloj,
    sumaContInt,
    reiniciarInfoPartida, 
    iniciarReloj, 
    pararReloj 

} = memotestSlice.actions




export const getQuieroJugar = state => state.memotestSlice.infoGeneral.quieroJugar
export const getJuegoEmpezado = state => state.memotestSlice.infoGeneral.juegoEmpezado
export const getFichas = state => state.memotestSlice.infoGeneral.fichas
export const getGano = state => state.memotestSlice.infoGeneral.gano
export const getCargando = state => state.memotestSlice.infoGeneral.cargando

export const getDificultad = state => state.memotestSlice.condiciones.dificultad
export const getTema = state => state.memotestSlice.condiciones.tema
export const getWidthContenedor = state => state.memotestSlice.condiciones.widthContenedor

export const contIntentos = state => state.memotestSlice.infoPartida.contIntentos
export const reloj = state => state.memotestSlice.infoPartida.reloj

export default memotestSlice.reducer