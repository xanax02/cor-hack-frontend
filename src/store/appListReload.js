import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reload: false,
};

const appReloadSlice = createSlice({
  name: "appReload",
  initialState,
  reducers: {
    reRender(state) {
      state.reload = !state.reload;
    },
  },
});

export default appReloadSlice.reducer;
export const appReloadSliceAction = appReloadSlice.actions;
