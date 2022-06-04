import { configureStore } from "@reduxjs/toolkit";
// import JokesReducer from "./features/jokeSlice";
import taskReducer from "./features/taskSlice";

export default configureStore({
  reducer: {
    task: taskReducer,
    // joke: JokesReducer,
  },
});
