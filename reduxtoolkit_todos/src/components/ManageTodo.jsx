import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, updateTodo, markDone } from '../features/todo/todoSlice';


const ManageTodo = ({ editId, setEditId }) => {

    const todos = useSelector(state => state.todos.todos); // Get todos from Redux store

    const [todo, setTodo] = useState('');

    // use useDispatch for sending values
    const dispatch = useDispatch();

    useEffect(()=>{
        if(editId){
            const todoToEdit = todos.find((todo) => todo.id === editId);
            if(todoToEdit){
                setTodo(todoToEdit.text);
            }
        }
    },[editId]);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(editId){
            dispatch(updateTodo({ id: editId, text: todo }));
            setEditId(null);
        }
        else{
            dispatch(addTodo(todo));        // using dispatch send values(reducer)
            setTodo('');
        }
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
                    {editId ? 'Update' : 'Add'}
                </button>
            </form>
        </div>
    )
}

export default ManageTodo
