import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "../recipesSlice/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
