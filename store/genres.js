import { createSlice } from "@reduxjs/toolkit";

const initialState = { genres: [] };

const genresSlice = createSlice({
  name: "setGenres",
  initialState,
  reducers: {
    setGenres(state, action) {
      state.genres = action.payload.genresData;
    },
  },
});

export const genresAction = genresSlice.actions;
export default genresSlice.reducer;
