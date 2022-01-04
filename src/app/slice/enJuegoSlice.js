import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    juegoEmpezado: false,
    fichas: [],
    gano: false,
    cargando: true

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
        setGano: (state, action) => {
            state.gano = action.payload
        },
        setCargando: (state, action) => {
            state.cargando = action.payload
        },
        
    }
})



export const {empezarJuego, terminarJuego, setFichas, setGano, setCargando} = enJuegoSlice.actions

export const getJuegoEmpezado = state => state.enJuegoSlice.juegoEmpezado
export const getFichas = state => state.enJuegoSlice.fichas
export const getGano = state => state.enJuegoSlice.gano
export const getCargando = state => state.enJuegoSlice.cargando

export default enJuegoSlice.reducer