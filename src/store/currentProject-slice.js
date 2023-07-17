import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectId: '',
    apps: [],
}

const currentProjectSlice = createSlice({
    name: 'currentProject',
    initialState,
    reducers: {
        setCurrentProject (state, action) {
            state.projectId = action.payload.projectId;
            state.apps = action.payload.apps
        }
    }
})

export default currentProjectSlice.reducer;
export const currentProjectActions = currentProjectSlice.actions;