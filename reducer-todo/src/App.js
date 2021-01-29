import React from "react";
import './App.css';
import reducer from './reducers/MainReducer.js';
import Form from './components/Form.js';
import ToDoList from "./components/TodoList";

const initialState = {
  ToDos: [],
  currentId: 0,
}


function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const addItem = toDoName => {
    dispatch({ type: 'ADD', payload: { text: toDoName, complete: false } })
  }

  const completed = toDoId => {
    dispatch({ type: 'TOGGLE', payload: toDoId })
  }

  const clearItems = toDoName => {
    dispatch({ type: 'CLEAR', payload: {} })
  }
  console.log(state)
  return (
    <div>
      <Form add={addItem} toggle={completed} />
      <ToDoList toDos={state.ToDos} toggle={completed}/>
    </div>
  );
}

export default App;