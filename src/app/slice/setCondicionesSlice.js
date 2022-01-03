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
        setWidthContenedor: (state, action) =>{
            /* console.log(action.payload) */
            state.condiciones.widthContenedor = action.payload
        }



    }
})

export const {setDificultad, setWidthContenedor} = setCondicionesSlice.actions

export const dif = state => state.setCondicionesSlice.condiciones.dificultad
export const width = state => state.setCondicionesSlice.condiciones.widthContenedor


export default setCondicionesSlice.reducer