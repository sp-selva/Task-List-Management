import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],

  reducers: {
    addTask: (state, action) => {
      const newAddTask = {
        id: Date.now(),
        taskname: action.payload.taskname,
        description: action.payload.description,
        starttime: action.payload.starttime,
        endtime: action.payload.endtime,
        status: action.payload.status,
      };
      state.push(newAddTask);
    },

    deleteTask: (state, action) => {
      return state.filter(({id}) => id !== action.payload.id)
    },


  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
