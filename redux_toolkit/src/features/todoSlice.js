import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:[]
}


const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        // add todo
        addTodo:(state,action)=>{
            const date = new Date();
            const newTodo = {
                id:nanoid(),                // unique id
                text:action.payload,
                completed:false,
                time:date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
            state.todos.push(newTodo) // add the new todo to the array
        },
        // complete todo
        isCompletedTodo:(state,action)=>{
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed
            }
        },
        // delete todo
        deleteTodo:(state,action)=>{
            const todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.todos = todos 
        }
    }
})

export const {addTodo,isCompletedTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer