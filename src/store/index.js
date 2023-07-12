import { configureStore } from "@reduxjs/toolkit";
import createOverlaySlice from "./createOverlay-slice";

export const store = configureStore({
    reducer: {
        createOverlay: createOverlaySlice,
    }
})