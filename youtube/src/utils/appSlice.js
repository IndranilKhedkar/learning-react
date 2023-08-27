import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuCollapsed: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuCollapsed = !state.isMenuCollapsed;
    },
    closeMenu: (state) => {
      state.isMenuCollapsed = true;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
