import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modal: false,
    },
    reducers: {
        setModal(state) {
            state.modal = !state.modal;
        },
    },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;