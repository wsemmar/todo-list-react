import './App.css';
import AddTodo from './AddTodo';
import {useState} from 'react'
import TodoList from "./TodoList";

function App() {
const [input, setInput] = useState("")
const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <AddTodo setInput={setInput} input={input} setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
export default App;
