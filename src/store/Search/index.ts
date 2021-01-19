import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: 0,
  reducers: {},
});

export const { reducer: searchReducer } = searchSlice;
