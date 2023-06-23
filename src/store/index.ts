import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice"
import filesReducer from "./filesSlice"

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        files: filesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>