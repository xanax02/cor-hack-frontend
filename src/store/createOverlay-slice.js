import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showOverlay: false,
}

const createOverlaySlice = createSlice({
    name: "createOverlay",
    initialState,
    reducers: {
        setShowOverlay(state, action) {
            state.showOverlay = action.payload
        }
    }
})

export const createOverlayActions = createOverlaySlice.actions;
export default createOverlaySlice.reducer;