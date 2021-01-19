import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./store";

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware({
        thunk: true,
        immutableCheck: true,
      }),
    ];
  },
});

export default store;
