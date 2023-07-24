import { configureStore } from "@reduxjs/toolkit";
import createOverlaySlice from "./createOverlay-slice";
import currentProjectSlice from "./currentProject-slice";
import projectsSlice from "./projects-slice";
import appConfigurationSlice from "./appconfiguration-slice";

export const store = configureStore({
  reducer: {
    createOverlay: createOverlaySlice,
    currentProject: currentProjectSlice,
    projects: projectsSlice,
    appConfiguration: appConfigurationSlice,
  },
});
