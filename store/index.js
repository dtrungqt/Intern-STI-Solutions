import { createSlice, configureStore } from "@reduxjs/toolkit";

const paginateSlice = createSlice({
  name: "pagination",
  initialState: { currentPage: 1, totalPage: 1 },
  reducers: {
    goToNextPage(state) {
      console.log("go to next page");
      if (state.currentPage < state.totalPage) {
        state.currentPage++;
      } else {
        state.currentPage = 1;
      }
    },

    goToPreviousPage(state) {
      if (state.currentPage > 1) {
        state.currentPage--;
      } else {
        state.currentPage = state.totalPage;
      }
    },

    setTotalPage(state, action) {
      console.log("set total page");
      state.totalPage = action.payload.totalPage;
    },
  },
});

const store = configureStore({
  reducer: paginateSlice.reducer,
});

export const paginateActions = paginateSlice.actions;
export default store;
