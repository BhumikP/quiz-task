import { configureStore } from "@reduxjs/toolkit";
import { userData } from "./feature/userScore";

export const store = configureStore({
  reducer: {
    user: userData.reducer,
  },
});
