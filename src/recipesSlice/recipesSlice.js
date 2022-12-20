import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchSingleRecipe = createAsyncThunk(
  "recipe/fetchSingleRecipe",
  async ({ id }) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchSearchRecipe = createAsyncThunk(
  "recipe/fetchSearchRecipe",
  async ({ input }) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    loading: false,
    error: "",
    recipes: [],
    searched: [],
    recipe: [],
  },
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.loading = true;
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.loading = false;
      state.recipes = action.payload.recipes;
    },
    [fetchSingleRecipe.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleRecipe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchSingleRecipe.fulfilled]: (state, action) => {
      state.loading = false;
      state.recipe = action.payload;
    },
    [fetchSearchRecipe.pending]: (state) => {
      state.loading = true;
    },
    [fetchSearchRecipe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchSearchRecipe.fulfilled]: (state, action) => {
      state.loading = false;
      state.searched = action.payload.results;
    },
  },
});

export const recipesReducer = recipesSlice.reducer;
