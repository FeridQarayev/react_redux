import { createSlice } from "@reduxjs/toolkit";

export const favousSlice = createSlice({
  name: "favous",
  initialState: {
    value: [],
  },
  reducers: {
    addFavousData: (state, action) => {
      state.value.push(action.payload);
    },
    resetFavous: (state) => {
      state.value = [];
    },
  },
});

 export const { addFavousData, resetFavous } = favousSlice.actions

export default favousSlice.reducer;
