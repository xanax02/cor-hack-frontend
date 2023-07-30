import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  systems: {},
};

const systemsSlice = createSlice({
  name: "systems",
  initialState,
  reducers: {
    setHosts(state, action) {
      state.systems = action.payload;
    },
  },
});

export default systemsSlice.reducer;
export const systemsSliceActions = systemsSlice.actions;
