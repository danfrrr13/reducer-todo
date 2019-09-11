import React from 'react';

const Todo = props => {
  
  return (
    <div className="todo">
      <h3 onClick={() => props.toggle(props.todo.id)} id={props.todo.id} className={props.todo.completed ? 'completed' : null}>
        {props.todo.item}
      </h3>
    </div>
  );
}

export default Todo;