import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'


function App() {

  return (
    <>
        <h2 style={{ color: 'green', fontSize: '2rem', textAlign: 'center', textDecoration: 'underline' }}>Todos</h2>
        <AddTodo />
        <Todos />
    </>
  )
}

export default App