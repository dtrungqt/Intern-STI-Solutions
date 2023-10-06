import { createSlice } from "@reduxjs/toolkit";

const initialState = { reload: true };

const reloadPageSlice = createSlice({
  name: "reloadPage",
  initialState,
  reducers: {
    reloadPageNow(state) {
      state.reload = !state.reload; //chỉ cần reload thay đổi giá trị là tải lại trang, chứ ko cần quan tâm nó là true hay false
    },
  },
});

export const reloadPageAction = reloadPageSlice.actions;
export default reloadPageSlice.reducer;
