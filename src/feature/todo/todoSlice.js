// to create slice we need basically three things
// 1 - name
//2 - initialState
// 3 - reducer

import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state
const initialState = {
  todos: [{ id: 1, text: "Write your Todo" }],
};

// Reducer

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTodo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    // RemoveTodo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // update
    updateTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id === action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
