import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';




function App() {

  const todoText = useRef();

  useEffect(() => { 
    const existingTodos = localStorage.getItem('todos');
    if(existingTodos) {
      setTodos(JSON.parse(existingTodos));
    }
    else
    setTodos([]);
  }, []);

  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos',JSON.stringify(next));

    const [todos, setTodos] = useState([])
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>

      <form onSubmit={addTodo}>
        <input ref={todoText}/>
        <input type="text" placeholder="Write Task here"/>
        <input type="submit" value="Add Todo"/> 
      </form>
    </div>
  )
}

export default App;





