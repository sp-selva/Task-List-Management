import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [
    {
      id: 1,
      taskname: "ONE",
      description: "One",
      starttime: "10:55 PM",
      endtime: "3:00 PM",
      status:"Running"
    },
    {
      id: 2,
      taskname: "Two",
      description: "Two",
      starttime: "12:55 PM",
      endtime: "4:00 PM",
      status:"Expired"
    },
    {
      id: 3,
      taskname: "Three",
      description: "Three",
      starttime: "09:55 PM",
      endtime: "5:00 PM",
      status:"Scheduled"
    },
  ],

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
