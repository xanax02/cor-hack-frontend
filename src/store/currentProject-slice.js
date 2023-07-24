import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectId: "",
};

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {
    setCurrentProject(state, action) {
      state.projectId = action.payload.projectId;
    },
  },
});

export default currentProjectSlice.reducer;
export const currentProjectActions = currentProjectSlice.actions;
