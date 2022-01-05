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
        
    }
})

/* export const {sumaSegundo, sumaMinuto, sumaHora, sumaContInt, reiniciarValores, iniciarReloj, pararReloj} = infoPartidaSlice.actions */

/* export const contIntentos = state => state.infoPartida.contIntentos
export const reloj = state => state.infoPartida.reloj */

export default infoPartidaSlice.reducer