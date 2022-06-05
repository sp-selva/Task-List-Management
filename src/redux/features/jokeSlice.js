import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getJokes = createAsyncThunk("jokes/getJokes", async () => {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
  );
  const formetedResponse = response.json();
  return formetedResponse;
});

export const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    list: [],
    isLodding: false,
  },
  extraReducers: {
    [getJokes.pending]: (state) => {
      state.isLodding = true;
    },
    [getJokes.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLodding = false;
    },
    [getJokes.rejected]: (state) => {
      state.isLodding = false;
    },
  },
});

export default jokeSlice.reducer;
