import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoSlice from "../features/todoSlice";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";
import userReducer from "../features/userApiSlice";
import usersReducer from "../features/userEntitySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoSlice,
    cart: cartSlice,
    products: productSlice,
    users: userReducer,
    usersEntity: usersReducer
  },
});