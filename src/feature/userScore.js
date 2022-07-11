import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  name: "",
};

export const userData = createSlice({
  name: "user-score",
  initialState,
  reducers: {
    storeName: (state, action) => {
      state.name = action.payload;
    },
    userWithScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { storeName, userWithScore } = userData.actions;

export default userData.reducer;
