import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [], // Initialize with an empty array
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  // Reducers
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate a unique ID
        text: action.payload,
        completed: false, // Default completed status
      };
      state.todos.push(todo); // Add the new todo to the array
    },

    // Update an existing todo
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text; // Update the text of the matching todo
        }
        return todo;
      });
    },

    // Remove a todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); // Filter out the todo with the matching ID
    },

    // Toggle the completed status of a todo
    markDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed; // Toggle the completed status
        }
        return todo;
      });
    },
  },
});

// Export the actions
export const { addTodo, removeTodo, updateTodo, markDone } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;