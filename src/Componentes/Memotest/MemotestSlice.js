import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    infoGeneral: {
        quieroJugar: false,
        juegoEmpezado: false,
        fichas: [],
        gano: false,
        cargando: false,
        modoJuego: "",
        empezoElJuego: false
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
            },
            level: ""
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
    },
    multijugador: {
        jugadores: [
            {
                nombre: "" ,
                color: "",
                esMiTurno: true,
                cantAciertos: 0
            },
            {
                nombre: "",
                color: "",
                esMiTurno: false,
                cantAciertos: 0
            },
            {
                nombre: "",
                color: "",
                esMiTurno: false,
                cantAciertos: 0
            },
            {
                nombre: "",
                color: "",
                esMiTurno: false,
                cantAciertos: 0
            }
        ],
        indiceActivo: 0,
        cantidadJugadores: 2,
        mostrarForms: true
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
        setModoJuego: (state, action) => {
            state.infoGeneral.modoJuego = action.payload
        },
        setEmpezoJuego: (state, action) =>{ 
            state.infoGeneral.empezoElJuego = action.payload
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
                },
                level: action.payload.level
            }
        },
        setTema: (state, action) => {
            state.condiciones.tema = action.payload
        },
        setWidthContenedor: (state, action) =>{
            state.condiciones.widthContenedor = action.payload
        },
        sumaSegundo: state => {
            state.infoPartida.reloj.segundos += 1
        },
        sumaMinuto: state => {
            state.infoPartida.reloj.segundos = 0
            state.infoPartida.reloj.minutos += 1
        },
        sumaHora: state => {
            state.infoPartida.reloj.minutos = 0
            state.infoPartida.reloj.horas += 1
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
        },
        setMultijugador: (state, action) => {
            state.multijugador.jugadores[state.multijugador.indiceActivo] = action.payload
        },
        setIndiceActivo: (state, action) => {
            state.multijugador.indiceActivo = action.payload
        },
        ponerBorde: (state) => {
            state.multijugador.jugadores.map((jug)=> (
                jug.esMiTurno = true
            ))
        },
        reiniciarAciertosJugadores: (state) => {
            state.multijugador.jugadores.forEach(jug => {
                jug.cantAciertos = 0
                jug.esMiTurno = false
            })
            state.multijugador.jugadores[0].esMiTurno = true
            state.multijugador.indiceActivo = 0
        },
        setValuesJugadores: (state, action) => {
            let i = 0
            let jugadores = action.payload
            for (const key in jugadores) {
                state.multijugador.jugadores[i] = jugadores[key]
                i++
            }
        },
        setCantidadJugadores: (state, action) => {
            state.multijugador.cantidadJugadores = action.payload
        },
        setMostrarForms: (state, action) => {
            state.multijugador.mostrarForms = action.payload
        },
        reiniciarNombresJugadores: state => {
            state.multijugador.jugadores = initialStateValues.multijugador.jugadores
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
    setModoJuego,
    reiniciarCondiciones, 
    setDificultad, 
    setTema, 
    setWidthContenedor, 
    sumaSegundo, 
    sumaMinuto, 
    sumaHora, 
    sumaContInt,
    reiniciarInfoPartida, 
    iniciarReloj, 
    pararReloj,
    setMultijugador,
    setIndiceActivo,
    ponerBorde,
    reiniciarAciertosJugadores,
    setValuesJugadores,
    setCantidadJugadores,
    setMostrarForms,
    reiniciarNombresJugadores,
    setEmpezoJuego

} = memotestSlice.actions




export const getQuieroJugar = state => state.memotestSlice.infoGeneral.quieroJugar
export const getJuegoEmpezado = state => state.memotestSlice.infoGeneral.juegoEmpezado
export const getFichas = state => state.memotestSlice.infoGeneral.fichas
export const getGano = state => state.memotestSlice.infoGeneral.gano
export const getCargando = state => state.memotestSlice.infoGeneral.cargando
export const getModoJuego = state => state.memotestSlice.infoGeneral.modoJuego
export const getEmpezoJuego = state => state.memotestSlice.infoGeneral.empezoElJuego

export const getDificultad = state => state.memotestSlice.condiciones.dificultad
export const getTema = state => state.memotestSlice.condiciones.tema
export const getWidthContenedor = state => state.memotestSlice.condiciones.widthContenedor

export const contIntentos = state => state.memotestSlice.infoPartida.contIntentos
export const reloj = state => state.memotestSlice.infoPartida.reloj

export const getJugadores = state => state.memotestSlice.multijugador.jugadores
export const getIndiceActivo = state => state.memotestSlice.multijugador.indiceActivo
export const getCantJugadores = state => state.memotestSlice.multijugador.cantidadJugadores
export const getMostrarForms = state => state.memotestSlice.multijugador.mostrarForms


export default memotestSlice.reducer



/* 

alert x modal en form   ------------------------------------HECHO
icon o div en circulo color seleccionado -----------------hecho

en carga e nombre boton volver -----------HECHO
y en ganaste boton volver a carga de nombre y estilo en ganaste -----------hecho
el jugar con otros nombres no deberia limpiar los nombre y colores anteriores ------------hecho
volver al home no vaica nombres ni modojeugo -----------hecho
chequear bordes cuando es multi ---------hecho

estilo en modo juego ---------- hecho

backdrop:
    hacer dinamico el numero de segundos ------hecho
    preguntar sungular y plural ----hecho
    mejorar dise??o 
.



singular y plural en p de jugador ----- hecho

revisar segundos del spinner basico ----hecho

revisar segundos que tarda de trasn a opaca cuando sale backdrop ------hecho
recalcular el tiempo de a pirmera pista ya que empieza a contar desde el backdrop------- hecho

agregar spinner en entrada a corga nombre y a ganste spinner mui ---- hecho

hacer terniero de funcion volver en vistacondi, si es multi vuevlo a carganombre ---hecho

agregar iconos en los botones}
mejorar tipograf??a

borrar comentarios y console.logs


despesu -----------

 ---warning settime
 ---mirar los warning amarillos
 ---firebase: 
    --- carga de los temas alla, y manejo de traerlo
    --- abm
    --- login
    --- gurda recors
    --- mustra recors en infopartida
    --- muestra historal en ganaste
    --- vista de perfil de jugador (historial mas completo)
    --- personalizar tematica
---mejorar la selecccion de tema
---volver a carga nombre sin limpiar tema(porque despues el tema es un mundo)
--- vista previa de fichas al elegir tema
--- ver resutado de tablero en ganaste
.

A component is changing the default checked state of an uncontrolled SwitchBase after being initialized. To suppress this warning opt to use a controlled SwitchBase. 



pensientes:
    giro de fichas
    dise??o boton ayuda
    animacion cuando y quien gana
.


opciones de ideas: 
    hacer que el ganase sea un backdrop dentro de vista juego


*/