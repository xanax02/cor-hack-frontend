import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  app: {},
};

const currentAppSlice = createSlice({
  name: "currentApp",
  initialState,
  reducers: {
    setCurrentApp(state, action) {
      state.app = action.payload;
    },
  },
});

export default currentAppSlice.reducer;
export const currentAppActions = currentAppSlice.actions;
