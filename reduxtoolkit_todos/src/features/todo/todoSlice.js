import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Learn Redux", completed: false }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  // reducer contains properties and functions
  reducers: {
    // state is the current state of the store
    // action is the action that triggered the reducer, action contains data
    addTodo: (state, action) => {
      const todo = {
        //create a todo
        id: nanoid(), // nanoid is a unique id generator
        text: action.payload,
        completed: false, // Add the completed property with a default value
      };
      state.todos.push(todo); // update state
    },

    // we added todo, now we will remove todo.
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // update todo
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
    },

    // mark as done
    markDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
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