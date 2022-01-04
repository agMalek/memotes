import { configureStore } from "@reduxjs/toolkit";
import infoPartidaSlice from "./slice/infoPartidaSlice";
import setCondicionesSlice from "./slice/setCondicionesSlice";
import enJuegoSlice from "./slice/enJuegoSlice";

export default configureStore({
    reducer: {
        infoPartida: infoPartidaSlice,
        setCondicionesSlice: setCondicionesSlice,
        enJuegoSlice: enJuegoSlice,
        /* middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                // Ignore these action types
                //ignoredActions: ['your/action/type'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['enJuegoSlice.volteadas', 'payload.timestamp'],
                // Ignore these paths in the state
                //ignoredPaths: ['items.dates'],
                },
            }), */
    },
    /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['enJuegoSlice/setPrimeraVolteada'],
        },
    }), */
    
})




/* thunk: {
  extraArgument: myCustomApiService,
}, */