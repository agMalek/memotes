import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    juegoEmpezado: false,
    fichas: []
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
        }
    }
})

export const {empezarJuego, terminarJuego, setFichas} = enJuegoSlice.actions

export const getJuegoEmpezado = state => state.enJuegoSlice.juegoEmpezado
export const getFichas = state => state.enJuegoSlice.fichas


export default enJuegoSlice.reducer