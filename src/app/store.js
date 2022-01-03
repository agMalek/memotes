import { configureStore } from "@reduxjs/toolkit";
import infoPartidaSlice from "./slice/infoPartidaSlice";
import setCondicionesSlice from "./slice/setCondicionesSlice";

export default configureStore({
    reducer: {
        infoPartida: infoPartidaSlice,
        setCondicionesSlice: setCondicionesSlice
    }
})