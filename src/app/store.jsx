import { configureStore } from "@reduxjs/toolkit";

import togglebarSlice from "../features/togglebar/togglebarSlice";

export const store = configureStore({
  reducer: {
    toggle: togglebarSlice,
  },
});
