import React, { useReducer, useState } from 'react';
import Todo from './Todo.js';
import { initialState, reducer } from '../reducers/reducer.js';

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState({
    item: '',
    completed: false,
    id: null
  });

  const handleChange = e => {
    setNewTodo({ item: e.target.value, completed: false, id: Date.now() });
  }

  const addTodo = e => {
    e.preventDefault();
    if (newTodo.item.length > 0) {
        dispatch({ type: 'ADD_TODO', payload: newTodo})
    }
    setNewTodo({ item: '' });
  }

  const toggleCompleted = id => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id });
  }

  const clearCompleted = e => {
      e.preventDefault();
      const newArray = state.todos.filter(todo => todo.completed === false);
      dispatch({ type: 'CLEAR_COMPLETED', payload: newArray });

  }

  return (
    <div className="todoList">
      <h1>Todo List...</h1>
      {state.todos.map(todo => <Todo key={todo.id} todo={todo} toggle={toggleCompleted} />)}
      <form onSubmit={addTodo}>
        <input type='text' placeholder='New todo...' onChange={handleChange} value={newTodo.item} />
        <input type='submit' />
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoList;
