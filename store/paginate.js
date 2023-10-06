import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentPage: 1, totalPage: 1 };

const paginateSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    goToNextPage(state) {
      // console.log("go to next page");
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
    setCurrentPage(state) {
      state.currentPage = 1;
    },

    setTotalPage(state, action) {
      // console.log("set total page");
      state.totalPage = action.payload.totalPage;
    },
  },
});

export const paginateActions = paginateSlice.actions;
export default paginateSlice.reducer;
