import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    filter: filterSlice,
  },
});
