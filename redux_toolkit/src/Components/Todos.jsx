import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, isCompletedTodo, deleteTodo } from '../features/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todos.todos);  // get todos from store
    const dispatch = useDispatch();                     // dispatch - used for sending values
    const [newTodo, setNewTodo] = useState('');


    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodo));
        setNewTodo('');
    }

    const handleCompleteTodo = (id) => {
        dispatch(isCompletedTodo(id));
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <>
            <div className="flex flex-col items-center space-y-4 mt-2 mb-2">
                <h2 className="text-2xl font-semibold underline">Todos</h2>

                <div className="flex space-x-4">
                    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="p-2 border border-gray-300 rounded" />
                    <button onClick={handleAddTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Todo</button>
                </div>

                <ul className="list-disc">
                    {todos.map((todo, index) => (
                        <li key={todo.id} className="flex items-center  space-x-4 space-y-2">
                            {index + 1 + "."}
                            <span
                                className={
                                    todo.completed ? "line-through" : ""
                                }
                                onClick={() => isCompletedTodo(todo.id)} // Toggle completion
                            >
                                {todo.text}
                            </span>
                            <span>{todo.time}</span>
                            <button onClick={() => handleCompleteTodo(todo.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-2 rounded">{todo.completed ? "Mark Incomplete" : "Mark Completed"}</button>
                            <button onClick={() => handleDeleteTodo(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
        </>
    )
}

export default Todos
