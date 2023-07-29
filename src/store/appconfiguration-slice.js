import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPresent: false,
  folders: [],
  files: [],
  scripts: [],
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
      state.scripts = action.payload;
    },
    addFolder(state, action) {
      state.folders.push(action.payload);
    },
    addFile(state, action) {
      state.files.push(action.payload);
    },
    addCommand(state, action) {
      state.scripts.push(action.payload);
    },
    resetData(state) {
      state.folders = [];
      state.files = [];
      state.scripts = [];
    },
    setDataPresent(state, action) {
      state.isPresent = action.payload;
    },
  },
});

export default appConfigurationSlice.reducer;
export const appConfigurationActions = appConfigurationSlice.actions;
