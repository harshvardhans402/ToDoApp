import React from 'react';
import "./css/main.css";
import AllTodos from "./components/AllTodos";
import AddTodo from "./components/AddTodo";

function App() {


  return (
    <>
      <div className='App'>
        <h1> To-Do App</h1>
        <AddTodo />
        <AllTodos />
      </div>
    </>
  )
}

export default App
