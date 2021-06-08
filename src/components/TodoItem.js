import React, { useContext } from 'react';
import Context from './context/context';
import s from './TodoItem.module.css';

function TodoItem({ todo, index }) {
  let { onChange, deleteTodo } = useContext(Context);

  return (
    <li className={s.todoItem}>
      <span className={todo.completed ? `${s.done}` : null}>
        <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
