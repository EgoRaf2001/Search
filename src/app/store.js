import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchApp/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  
  },
});
