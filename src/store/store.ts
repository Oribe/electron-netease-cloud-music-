import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./Search";
import { combineReducers } from "redux";

const reducers = {
  search: searchReducer,
};

const allReducers = combineReducers(reducers);

export default allReducers;
