// Slice contains initial state and reducers for updating states
import { createSlice } from "@reduxjs/toolkit";

// createSlice
export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },

  // create reducer functions : Logics of reducer for updating states
  reducers: {
    // actions (increment, decrement, reset)
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += Number(action.payload) },
    reset: (state) => { state.value = 0 },
  },
});

// now register reducer in store
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer; // this is counter reducer
