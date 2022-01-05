import { configureStore } from "@reduxjs/toolkit";


/* import infoPartidaSlice from "./slice/infoPartidaSlice";
import setCondicionesSlice from "./slice/setCondicionesSlice";
import enJuegoSlice from "./slice/enJuegoSlice"; */
import memotestSlice from "../Componentes/Memotest/MemotestSlice";

export default configureStore({
    reducer: {
        /* infoPartida: infoPartidaSlice,
        setCondicionesSlice: setCondicionesSlice,
        enJuegoSlice: enJuegoSlice, */
        memotestSlice: memotestSlice,
       
    },
    
})
