import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hosts: [],
};

const hostSlice = createSlice({
  name: "hosts",
  initialState,
  reducers: {
    setHosts(state, action) {
      state.projectId = action.payload;
    },
  },
});

export default hostSlice.reducer;
export const hostSliceAction = hostSlice.actions;
