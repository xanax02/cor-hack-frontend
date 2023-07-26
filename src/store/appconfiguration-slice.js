import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
  files: [],
  commands: [],
};

const appConfigurationSlice = createSlice({
  name: "appConfiguration",
  initialState,
  reducers: {
    setFolders(state, action) {
      state.folders = action.payload;
    },
    setFiles(state, action) {
      state.files = action.payload;
    },
    setCommands(state, action) {
      state.commands = action.payload;
    },
    addFolder(state, action) {
      state.folders.push(action.payload);
    },
    addFile(state, action) {
      state.files.push(action.payload);
    },
    addCommand(state, action) {
      state.folders = state.folders.push(action.payload);
    },
  },
});

export default appConfigurationSlice.reducer;
export const appConfigurationActions = appConfigurationSlice.actions;
