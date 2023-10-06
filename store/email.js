import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const emailSlice = createSlice({
  name: "setEmail",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.name = action.payload.name;
    },
  },
});

export const emailAction = emailSlice.actions;
export default emailSlice.reducer;
