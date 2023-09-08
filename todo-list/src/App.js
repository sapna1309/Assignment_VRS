
import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos,setTodos] = useState([]);

  //console.log(todos);
  return (
    <div className="App">
     <h1>Todo List App</h1>
     <TodoInput todos={todos} setTodos={setTodos} />
     {todos.length===0?<h1>No tasks added yet!</h1>:<TodoList todos={todos} setTodos={setTodos} />}
     <ToastContainer />
    </div>
  );
}

export default App;
