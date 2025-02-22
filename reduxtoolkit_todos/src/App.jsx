import './App.css';
import Todos from './components/Todos';
import ManageTodo from './components/ManageTodo';
import { useState } from 'react';



function App() {
  const [editId, setEditId] = useState(null);
  const enterEditMode = (id, text) => {
    setEditId(id);
  }

  return (
    <>
        <h2 style={{ color: 'green', fontSize: '2rem', textAlign: 'center', textDecoration: 'underline' }}>Todos</h2>
        <ManageTodo editId={editId} setEditId={setEditId} enterEditMode={enterEditMode}/>
        <Todos enterEditMode={enterEditMode}/>
    </>
  )
}

export default App
