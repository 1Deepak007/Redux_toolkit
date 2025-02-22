import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';
import { IoTrashBin } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";



const Todos = () => {

    const dispatch = useDispatch();

    // useSelector to get values (todos) from store (like name )
    const todos = useSelector(state => state.todos.todos);


    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <table
                style={{
                    width: '80%',
                    maxWidth: '800px',
                    borderCollapse: 'collapse',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    backgroundColor: '#ffffff',
                }}
            >
                <thead>
                    <tr style={{ backgroundColor: '#007bff', color: '#ffffff' }}>
                        <th style={{ padding: '12px', textAlign: 'left', fontSize: '16px' }}>S.no</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontSize: '16px' }}>Title</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontSize: '16px' }}>Completed</th>
                        <th style={{ padding: '12px', textAlign: 'left', fontSize: '16px' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={todo.id} style={{ textAlign: 'left', backgroundColor: index % 2 !== 0 ? '#f9f9f9' : '#ffffff', transition: 'background-color 0.3s ease', }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f1f1f1')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = index % 2 !== 0 ? '#f9f9f9' : '#ffffff')}
                        >
                            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>{index + 1}</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>{todo.text}</td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>
                                {todo.completed ? '✅' : '❌'}
                            </td>
                            <td style={{ padding: '12px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <button onClick={() => dispatch(removeTodo(todo.id))} style={{ background: 'green', color: 'lightgreen', border: 'none', borderRadius: '4px', padding: '8px 12px', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s ease', }} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#00cc00')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'green')} >     <IoCheckbox style={{ marginRight: '5px' }} /> Done </button>
                                <button onClick={() => dispatch(removeTodo(todo.id))} style={{ background: 'green', color: 'lightgreen', border: 'none', borderRadius: '4px', padding: '8px 12px', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s ease', }} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#00cc00')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'green')} >     <IoCheckbox style={{ marginRight: '5px' }} /> Update </button>
                                <button onClick={() => dispatch(removeTodo(todo.id))} style={{ backgroundColor: '#ff4d4d', color: '#ffffff', border: 'none', borderRadius: '4px', padding: '8px 12px', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s ease', }} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff1a1a')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff4d4d')} >     <IoTrashBin style={{ marginRight: '5px' }} /> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Todos