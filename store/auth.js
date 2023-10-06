import { createSlice } from "@reduxjs/toolkit";

// import isAccessTokenValid from "@/utils/checkAccessTokenExpiration";
// const token = localStorage.getItem("accessToken");

const initialState = {
  isLogin: false,
  isLogout: true,
  accessToken: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    setLoginStatus(state, action) {
      state.isLogin = action.payload;
    },
    setLogoutStatus(state, action) {
      state.isLogout = action.payload;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
