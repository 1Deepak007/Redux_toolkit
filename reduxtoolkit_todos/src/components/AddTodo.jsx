import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo, updateTodo, markDone } from '../features/todo/todoSlice';

const AddTodo = () => {

    const [todo, setTodo] = useState('');

    // use useDispatch for sending values
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));        // using dispatch send values(reducer)
        setTodo('');
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
            <form onSubmit={addTodoHandler} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    style={{ padding: '12px 20px', backgroundColor: '#1e1e1e', color: '#00ff00', fontWeight: 'bold', border: '2px solid #00ff00', borderRadius: '5px', marginRight: '10px', fontSize: '16px', outline: 'none', width: '300px', boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', }} placeholder="Enter a task..." />
                <button
                    type="submit"
                    style={{ padding: '12px 20px', backgroundColor: '#00bfff', color: '#ffffff', fontWeight: 'bold', border: '2px solid #00bfff', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', boxShadow: '0 0 10px rgba(0, 191, 255, 0.5)', transition: 'background-color 0.3s ease', }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#009acd')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#00bfff')}
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTodo
