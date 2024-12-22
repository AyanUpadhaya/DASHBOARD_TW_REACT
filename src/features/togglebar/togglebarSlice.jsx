import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: true,
};

const togglebarSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggle } = togglebarSlice.actions;

export default togglebarSlice.reducer;
