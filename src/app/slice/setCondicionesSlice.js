import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    juegoEmpezado: false,
    condiciones: {
        dificultad: {
            tiempo: undefined, 
            cantParejas:undefined
        },
        tema: "",
        widthContenedor: ""
    },
    fichas: []
}

export const setCondicionesSlice = createSlice({
    name: "setCondicionesSlice",
    initialState: initialStateValues,
    reducers: {
        reiniciarValores: state => {
            state.juegoEmpezado = false
            state.condiciones = {
                dificultad: {
                    tiempo: undefined, 
                    cantParejas:undefined
                },
                tema: "",
                widthContenedor: ""
            }
            state.fichas = []
        },
        setDificultad: (state, action) =>{
            state.condiciones.dificultad = {
                tiempo: action.payload.tiempo, 
                cantParejas: action.payload.cantParejas
            }
        },
        setTema: (state, action) => {
            state.condiciones.tema = action.payload
        },
        setWidthContenedor: (state, action) =>{
            state.condiciones.widthContenedor = action.payload
        },
        empezarJuego: state =>{
            state.juegoEmpezado = true    
        },
        terminarJuego: state =>{
            state.juegoEmpezado = false    
        }



    }
})

export const {setDificultad, setTema, setWidthContenedor, empezarJuego, terminarJuego} = setCondicionesSlice.actions

export const dif = state => state.setCondicionesSlice.condiciones.dificultad
export const getTema = state => state.setCondicionesSlice.condiciones.tema
export const width = state => state.setCondicionesSlice.condiciones.widthContenedor
export const getJuegoEmpezado = state => state.setCondicionesSlice.juegoEmpezado


export default setCondicionesSlice.reducer