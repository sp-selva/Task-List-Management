import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/taskSlice";
import jokeReducer from './features/jokeSlice'

export default configureStore({
  reducer: {
    task: taskReducer,
    jokes: jokeReducer
  },
});
