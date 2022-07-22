import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersApi } from "../services/UserApi";

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;