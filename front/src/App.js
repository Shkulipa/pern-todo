import React from "react";
import './App.css';

//components
import InputTodo from './components/inputTodo/inputTodo';
import ListTodos from "./components/listTodo/listTodo";

function App() {
  return (
    <>
      <div className="container">
          <InputTodo/>
          <ListTodos/>
      </div>
    </>
  );
}

export default App;
