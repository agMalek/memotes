import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    reloj : {
        iniciarCronometro : false,
        segundos: 0,
        minutos: 0,
        horas: 0
    },
    contIntentos: 0
}

export const infoPartidaSlice = createSlice({
    name: "infoPartida",
    initialState: initialStateValues,
    reducers: {
        sumaSegundo: state => {
            state.reloj.segundos += 1
        },
        sumaMinuto: state => {
            state.reloj.segundos = 0
            state.reloj.minutos += 1
        },
        sumaHora: state => {
            state.reloj.minutos = 0
            state.reloj.horas += 1
        },
        sumaContInt: state => {
            state.contIntentos += 1
        },
        reiniciarValores: state => {
            state.reloj = initialStateValues.reloj
            state.contIntentos = initialStateValues.contIntentos
        },
        iniciarReloj: state => {
            state.reloj.iniciarCronometro = true
        },
        pararReloj: state => {
            state.reloj.iniciarCronometro = false
        }
    }
})

export const {sumaSegundo, sumaMinuto, sumaHora, sumaContInt, reiniciarValores, iniciarReloj, pararReloj} = infoPartidaSlice.actions

export const contIntentos = state => state.infoPartida.contIntentos
export const reloj = state => state.infoPartida.reloj

export default infoPartidaSlice.reducer