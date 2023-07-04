import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchBar/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  
  },
});
