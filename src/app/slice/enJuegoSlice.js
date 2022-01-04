import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    juegoEmpezado: false,
    fichas: [],
   /*  podesJugar: false, */
    /* volteadas:{
        primeraVolteada: undefined,
        segundaVolteada: undefined,
        cantVolteadas: 0
    }, */
   /*  cantCoincidencias: 0, */
  /*   opacidad: "", */
    gano: false
}

export const enJuegoSlice = createSlice({
    name: "enJuegoSlice",
    initialState: initialStateValues,
    reducers: {
        empezarJuego: state =>{
            state.juegoEmpezado = true    
        },
        terminarJuego: state =>{
            state.juegoEmpezado = false    
        },
        setFichas: (state, action) =>{
            state.fichas = action.payload
        },
        /* setPodesJugar: (state, action) => {
            state.podesJugar = action.payload
        }, */
        /* setPrimeraVolteada: (state, action) => {
            state.volteadas.primeraVolteada = action.payload
            state.volteadas.cantVolteadas += 1
        },
        setSegundaVolteada: (state, action) => {
            state.volteadas.segundaVolteada = action.payload
            state.volteadas.cantVolteadas += 1
        }, */
       /*  setOpacidad: (state, action) => {
            state.opacidad = action.payload
        } */
        setGano: (state, action) => {
            state.gano = action.payload
        }
    }
})

export const {empezarJuego, terminarJuego, setFichas, setGano} = enJuegoSlice.actions

export const getJuegoEmpezado = state => state.enJuegoSlice.juegoEmpezado
export const getFichas = state => state.enJuegoSlice.fichas
/* export const getOpacidad = state => state.enJuegoSlice.opacidad
export const getPodesJugar = state => state.enJuegoSlice.podesJugar */
/* export const getVolteadas = state => state.enJuegoSlice.volteadas */
/* export const getCantCoincidencias = state => state.enJuegoSlice.cantCoincidencias */
export const getGano = state => state.enJuegoSlice.gano


export default enJuegoSlice.reducer