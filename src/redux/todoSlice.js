import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: id++,
        text: action.payload,
        done: false,
      };
      state.push(newTask);
    },
    doneTask: (state, action) => {
      const i = state.findIndex((e) => e.id === action.payload.id);
      state[i].done = !state[i].done;
    },

    editTask: (state, action) => {
      const i = state.findIndex((e) => e.id === action.payload.id);
      state[i].text = action.payload.edited;
    },

    deleteTask: (state, action) => {
      return state.filter((e) => e.id !== action.payload.id);
    },
  },
});

export const { addTask, doneTask, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
