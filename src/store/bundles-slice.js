import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bundles: {},
};

const bundlesSlice = createSlice({
  name: "bundles",
  initialState,
  reducers: {
    setBundles(state, action) {
      state.bundles = action.payload;
    },
  },
});

export default bundlesSlice.reducer;
export const bundlesSliceActions = bundlesSlice.actions;
