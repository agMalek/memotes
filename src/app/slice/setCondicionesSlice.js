import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    dificultad: {
        tiempo: undefined, 
        cantParejas:undefined
    },
    tema: "",
    widthContenedor: ""
}

export const setCondicionesSlice = createSlice({
    name: "setCondicionesSlice",
    initialState: initialStateValues,
    reducers: {
        reiniciarValores: state => {
            state = {
                dificultad: {
                    tiempo: undefined, 
                    cantParejas:undefined
                },
                tema: "",
                widthContenedor: ""
            }
        },
        setDificultad: (state, action) =>{
            state.dificultad = {
                tiempo: action.payload.tiempo, 
                cantParejas: action.payload.cantParejas
            }
        },
        setTema: (state, action) => {
            state.tema = action.payload
        },
        setWidthContenedor: (state, action) =>{
            state.widthContenedor = action.payload
        }
    }
})

export const {reiniciarValores, setDificultad, setTema, setWidthContenedor} = setCondicionesSlice.actions

export const dif = state => state.setCondicionesSlice.dificultad
export const getTema = state => state.setCondicionesSlice.tema
export const width = state => state.setCondicionesSlice.widthContenedor

export default setCondicionesSlice.reducer