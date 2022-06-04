import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("joke/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
  .then((res) =>  res.json());
});

const jokeSlice = createSlice(({
  name: "joke",
  intialState: {
    joke: [],
    loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.joke = payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
}));

export default jokeSlice.reducer;
