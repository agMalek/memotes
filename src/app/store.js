import { configureStore } from "@reduxjs/toolkit";
import infoPartidaSlice from "./slice/infoPartidaSlice";

export default configureStore({
    reducer: {
        infoPartida: infoPartidaSlice
    }
})