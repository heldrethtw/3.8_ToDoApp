import React from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
