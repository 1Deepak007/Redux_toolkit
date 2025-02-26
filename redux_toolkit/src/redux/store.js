import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoSlice from "../features/todoSlice";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoSlice,
    cart: cartSlice,
    products: productSlice
  },
});