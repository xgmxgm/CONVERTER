import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ImagePayload {
    name: string,
    url: string,
}

interface FileState {
    images: ImagePayload[];
}

const filesSlice = createSlice({
    name: 'files',
    initialState: {
        images: [],
    } as FileState,
    reducers: {
        add_new_img(state, action: PayloadAction<ImagePayload>) {
            state.images.push({
                name: action.payload.name,
                url: action.payload.url,
            })
        },
    }
})

export const { add_new_img } = filesSlice.actions;
export default filesSlice.reducer;